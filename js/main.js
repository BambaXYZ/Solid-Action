/* Solid'Action — remplit la page à partir de content.js et gère les interactions.
   Pour modifier les textes, ne touchez pas à ce fichier : éditez content.js. */
(function () {
  "use strict";

  var S = typeof SITE !== "undefined" ? SITE : null;
  var ICO = typeof ICONES !== "undefined" ? ICONES : {};
  if (!S) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- outils ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Texte sûr, avec les [À REMPLIR] surlignés pour les repérer facilement
  function txt(str) {
    return esc(str).replace(/« /g, "«&nbsp;").replace(/ »/g, "&nbsp;»").replace(/\[À REMPLIR[^\]]*\]/g, function (m) { return '<mark class="todo">' + m + "</mark>"; });
  }
  function icon(name, cls) {
    var i = ICO[name];
    if (!i) return "";
    var attrs = i[0] === "f"
      ? 'fill="currentColor"'
      : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" ' + attrs + ' aria-hidden="true" focusable="false">' + i[1] + "</svg>";
  }
  function set(sel, html) { $$(sel).forEach(function (el) { el.innerHTML = html; }); }
  function initials(name) {
    var clean = String(name || "").replace(/\[[^\]]*\]/g, "").trim();
    if (!clean || /^prénom nom$/i.test(clean)) return "?";
    var parts = clean.split(/\s+/);
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }
  // Photo, ou avatar aux initiales si la photo est absente ou introuvable
  function avatar(photo, name, cls, eager) {
    var ini = initials(name);
    var fallback = ini === "?"
      ? '<span class="avatar-initials avatar-anonyme" aria-hidden="true">' + icon("personne") + "</span>"
      : '<span class="avatar-initials" aria-hidden="true">' + esc(ini) + "</span>";
    if (!photo) return '<span class="avatar ' + (cls || "") + '">' + fallback + "</span>";
    return '<span class="avatar ' + (cls || "") + '" data-fallback="' + esc(fallback) + '">' +
      '<img src="' + esc(photo) + '" alt="' + esc(name) + '" ' + (eager ? "" : 'loading="lazy" ') +
      'decoding="async" onerror="this.parentNode.innerHTML=this.parentNode.dataset.fallback">' +
      "</span>";
  }

  var c = S.candidat;
  var nomComplet = (c.prenom + " " + (c.nom || "")).trim();
  var commissionsById = {};
  S.commissions.forEach(function (m) { commissionsById[m.id] = m; });

  /* ---------- liens WhatsApp ---------- */
  var waUrl = "https://wa.me/" + String(S.contact.whatsapp).replace(/\D/g, "") +
    "?text=" + encodeURIComponent(S.contact.messageWhatsapp || "");
  $$("[data-whatsapp]").forEach(function (a) {
    a.href = waUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-icon]").forEach(function (el) { el.outerHTML = icon(el.getAttribute("data-icon")); });

  /* ---------- 2. accueil ---------- */
  set("[data-election-badge]", icon("calendrier") + "<span>Élection · <strong>" + txt(S.election.dateTexte) + "</strong></span>");
  set("[data-candidat-nom]", '<span class="hero-kicker">' + txt(S.general.appelAuVote || "Votez") + "</span> " + txt(S.general.nomListe));
  var fonction = String(c.fonction || "");
  set("[data-candidat-fonction]", "<strong>" + txt(nomComplet) + "</strong>, " + txt(fonction.charAt(0).toLowerCase() + fonction.slice(1)));
  set("[data-slogan]", txt(S.general.devise || S.general.slogan));

  var heroPhoto = $("[data-hero-photo]");
  if (c.photoAccueil) {
    heroPhoto.innerHTML = '<img src="' + esc(c.photoAccueil) + '" alt="' + esc(nomComplet) + '" fetchpriority="high" decoding="async">';
    heroPhoto.querySelector("img").onerror = function () { heroPhoto.innerHTML = heroPlaceholder(); };
  } else {
    heroPhoto.innerHTML = heroPlaceholder();
  }
  function heroPlaceholder() {
    return '<div class="hero-placeholder" role="img" aria-label="' + esc(nomComplet) + '">' +
      '<img src="images/logo/logo-symbole-clair.svg" alt="" width="120" height="120">' +
      '<span class="hero-placeholder-initials">' + esc(initials(nomComplet)) + "</span></div>";
  }

  /* compte à rebours */
  var cd = $("[data-countdown]");
  var target = new Date(S.election.date).getTime();
  var units = [["jours", 86400000], ["heures", 3600000], ["min", 60000], ["sec", 1000]];
  cd.innerHTML = units.map(function (u) {
    return '<div class="cd-item"><span class="cd-num" data-u="' + u[0] + '">00</span><span class="cd-label">' + u[0] + "</span></div>";
  }).join("");
  cd.setAttribute("aria-label", "Temps restant avant l’élection du " + S.election.dateTexte);
  function tick() {
    var diff = target - Date.now();
    if (isNaN(target)) return;
    if (diff <= 0) {
      var sameDay = new Date().toDateString() === new Date(target).toDateString();
      cd.innerHTML = '<p class="cd-done">' + (sameDay ? "C’est aujourd’hui : allez voter !" : "Merci pour votre mobilisation !") + "</p>";
      return;
    }
    units.forEach(function (u) {
      var v = Math.floor(diff / u[1]);
      diff -= v * u[1];
      cd.querySelector('[data-u="' + u[0] + '"]').textContent = v < 10 ? "0" + v : v;
    });
    setTimeout(tick, 1000 - (Date.now() % 1000));
  }
  tick();

  /* ---------- 3. le candidat ---------- */
  set("[data-candidat-titre]", txt(c.titreSection || nomComplet + " au service de tous"));
  set("[data-candidat-accroche]", txt(c.accroche));
  set("[data-candidat-bio]", c.biographie.map(function (p) { return "<p>" + txt(p) + "</p>"; }).join(""));
  var parcoursIcons = ["etudes", "mallette", "solidarite"];
  set("[data-candidat-parcours]", c.parcours.map(function (p, i) {
    return '<li><span class="parcours-icon">' + icon(parcoursIcons[i % 3]) + "</span><div><strong>" + txt(p.titre) + "</strong><span>" + txt(p.texte) + "</span></div></li>";
  }).join(""));
  set("[data-candidat-citation]",
    '<span class="quote-mark">' + icon("citation") + "</span>" +
    '<figcaption class="eyebrow">' + txt(c.citation.titre) + "</figcaption>" +
    "<blockquote><p>" + txt(c.citation.texte) + "</p></blockquote>" +
    '<p class="quote-sign">— ' + txt(nomComplet) + "</p>");
  set("[data-candidat-chiffres]", c.chiffres.map(function (k) {
    return '<li class="stat reveal"><span class="stat-num"><span data-count="' + Number(k.valeur) + '">' + Number(k.valeur) + "</span>" + esc(k.suffixe) + '</span><span class="stat-label">' + txt(k.texte) + "</span></li>";
  }).join(""));
  var portrait = $("[data-candidat-portrait]");
  portrait.innerHTML = c.photoPortrait
    ? avatar(c.photoPortrait, nomComplet, "avatar-portrait")
    : avatar("", nomComplet, "avatar-portrait");

  /* ---------- 4. valeurs ---------- */
  set("[data-valeurs]", S.valeurs.map(function (v) {
    return '<li class="valeur reveal"><span class="valeur-icon">' + icon(v.icone) + "</span><h3>" + txt(v.titre) + "</h3><p>" + txt(v.texte) + "</p></li>";
  }).join(""));

  /* ---------- 5. programme (accordéon sur mobile) ---------- */
  set("[data-commissions]", S.commissions.map(function (m) {
    return '<article class="commission reveal" id="commission-' + esc(m.id) + '">' +
      '<h3 class="commission-head"><button type="button" class="commission-toggle" aria-expanded="false" aria-controls="cbody-' + esc(m.id) + '">' +
      '<span class="commission-icon">' + icon(m.icone) + "</span>" +
      '<span class="commission-name">' + txt(m.nom) + "</span>" +
      '<span class="commission-chevron">' + icon("chevron") + "</span></button></h3>" +
      '<div class="commission-body" id="cbody-' + esc(m.id) + '">' +
      '<p class="constat"><span class="constat-label">Le constat</span>' + txt(m.constat) + "</p>" +
      '<p class="props-label">Nos propositions</p><ul class="props">' +
      m.propositions.map(function (p) { return "<li>" + icon("check") + "<span>" + txt(p) + "</span></li>"; }).join("") +
      "</ul></div></article>";
  }).join(""));

  var mqDesktop = window.matchMedia("(min-width: 768px)");
  function syncAccordion() {
    $$(".commission").forEach(function (card) {
      var btn = $(".commission-toggle", card);
      if (mqDesktop.matches) {
        card.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("tabindex", "-1");
      } else {
        btn.removeAttribute("tabindex");
        btn.setAttribute("aria-expanded", card.classList.contains("is-open") ? "true" : "false");
      }
    });
  }
  function openCommission(id) {
    var card = document.getElementById("commission-" + id);
    if (!card) return;
    card.classList.add("is-open");
    $(".commission-toggle", card).setAttribute("aria-expanded", "true");
  }
  $$(".commission").forEach(function (card, i) {
    if (i === 0) card.classList.add("is-open");
    $(".commission-toggle", card).addEventListener("click", function () {
      if (mqDesktop.matches) return;
      var open = card.classList.toggle("is-open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  syncAccordion();
  if (mqDesktop.addEventListener) mqDesktop.addEventListener("change", syncAccordion);

  /* ---------- 6. gouvernement ---------- */
  set("[data-gouvernement-intro]", txt(S.gouvernement.intro));
  function membre(p, defaultRole) {
    return '<div class="membre">' + avatar(p.photo, p.nom, "avatar-md") +
      '<div class="membre-info"><span class="membre-role">' + txt(p.titre || defaultRole) + "</span>" +
      '<strong class="membre-nom">' + txt(p.nom) + "</strong>" +
      (p.statut ? '<span class="membre-statut">' + txt(p.statut) + "</span>" : "") + "</div>" +
      (p.engagement ? '<p class="membre-engagement">«\u00a0' + txt(p.engagement) + "\u00a0»</p>" : "") + "</div>";
  }
  var G = S.gouvernement, bureau = G.bureau || [], poles = G.poles || [];
  var bureauHtml = bureau.length
    ? '<div class="bureau bureau-' + Math.min(bureau.length, 3) + '">' + bureau.map(function (p) {
        return '<article class="bureau-card reveal">' + avatar(p.photo, p.nom, "avatar-bureau") +
          '<span class="membre-role">' + txt(p.titre) + "</span>" +
          '<h3 class="bureau-nom">' + txt(p.nom) + "</h3>" +
          (p.statut ? '<span class="membre-statut">' + txt(p.statut) + "</span>" : "") +
          (p.engagement ? '<p class="bureau-engagement">«\u00a0' + txt(p.engagement) + "\u00a0»</p>" : "") +
          "</article>";
      }).join("") + "</div>"
    : "";
  var polesHtml = poles.length
    ? '<div class="poles">' + poles.map(function (pole) {
        var m = commissionsById[pole.commission] || { nom: pole.commission, icone: "etoile" };
        return '<article class="pole reveal"><header class="pole-head"><span class="pole-icon">' + icon(m.icone) + "</span>" +
          '<div><span class="pole-kicker">Commission</span><h3>' + txt(m.nom) + "</h3></div></header>" +
          '<div class="pole-membres">' + membre(pole.president, "Président de commission") + membre(pole.adjoint, "Adjoint") + "</div>" +
          (commissionsById[pole.commission] ? '<a class="pole-link" href="#commission-' + esc(pole.commission) + '" data-open-commission="' + esc(pole.commission) + '">Voir les propositions' + icon("fleche") + "</a>" : "") +
          "</article>";
      }).join("") + "</div>"
    : (G.annonce
      ? '<div class="annonce reveal"><p class="annonce-texte">' + icon("etoile") + "<span>" + txt(G.annonce) + "</span></p>" +
        '<ul class="annonce-commissions">' + S.commissions.map(function (m) {
          return '<li><a href="#commission-' + esc(m.id) + '" data-open-commission="' + esc(m.id) + '">' + icon(m.icone) + "<span>" + txt(m.nom) + "</span></a></li>";
        }).join("") + "</ul></div>"
      : "");
  set("[data-gouvernement]",
    '<div class="chef reveal' + (bureau.length || poles.length ? "" : " chef-seul") + '">' + avatar(c.photoVisage || c.photoPortrait || c.photoAccueil, nomComplet, "avatar-lg") +
    '<span class="membre-role">Candidat à la présidence</span><strong class="chef-nom">' + txt(nomComplet) + "</strong>" +
    '<span class="chef-slogan">' + txt(S.general.slogan) + "</span></div>" +
    bureauHtml + polesHtml);
  $$("[data-open-commission]").forEach(function (a) {
    a.addEventListener("click", function () { openCommission(a.getAttribute("data-open-commission")); });
  });

  /* ---------- 7. 100 jours ---------- */
  set("[data-cent-jours]", S.centJours.map(function (m, i) {
    return '<li class="step reveal"><span class="step-dot">' + (i + 1) + "</span>" +
      '<div class="step-card"><span class="step-period">' + txt(m.periode) + "</span><h3>" + txt(m.titre) + "</h3><ul>" +
      m.engagements.map(function (e) { return "<li>" + txt(e) + "</li>"; }).join("") + "</ul></div></li>";
  }).join(""));

  /* ---------- 8. déjà en action ---------- */
  set("[data-realisations]", S.realisations.map(function (r) {
    return '<li class="realisation reveal">' + (r.photo ? '<img src="' + esc(r.photo) + '" alt="" loading="lazy" decoding="async">' : "") +
      '<span class="realisation-date">' + txt(r.date) + "</span><h3>" + txt(r.titre) + "</h3><p>" + txt(r.texte) + "</p></li>";
  }).join(""));
  set("[data-guide]",
    '<div class="guide-icon">' + icon("livre") + "</div>" +
    '<div class="guide-text"><span class="guide-kicker">Gratuit</span><h3>' + txt(S.guide.titre) + "</h3><p>" + txt(S.guide.texte) + "</p></div>" +
    '<a class="btn btn-light" href="' + esc(S.guide.lien) + '" download>' + icon("telecharger") + txt(S.guide.bouton) + "</a>");

  /* ---------- 9. équipe ---------- */
  set("[data-equipe]", S.equipe.map(function (p) {
    return '<li class="personne reveal">' + avatar(p.photo, p.nom, "avatar-team") +
      "<strong>" + txt(p.nom) + "</strong>" + (p.role ? "<span>" + txt(p.role) + "</span>" : "") + "</li>";
  }).join(""));

  /* ---------- 10. vidéo ---------- */
  set("[data-video-titre]", txt(S.video.titre));
  set("[data-video-texte]", txt(S.video.texte));
  var v = S.video, vbox = $("[data-video]");
  var yt = (v.youtube || "").match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([\w-]{6,})/);
  if (v.fichier) {
    vbox.innerHTML = '<video controls playsinline preload="none"' + (v.apercu ? ' poster="' + esc(v.apercu) + '"' : "") + '><source src="' + esc(v.fichier) + '" type="video/mp4">Votre navigateur ne lit pas cette vidéo.</video>';
  } else if (yt) {
    // la vidéo YouTube ne se charge qu'au clic, pour garder un site rapide
    vbox.innerHTML = '<button type="button" class="video-placeholder video-play" aria-label="Lire la vidéo">' +
      '<span class="play-btn">' + icon("play") + "</span><span>Lire la vidéo</span></button>";
    $(".video-play", vbox).addEventListener("click", function () {
      vbox.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + yt[1] + '?autoplay=1&playsinline=1" title="' + esc(v.titre) + '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  } else {
    vbox.innerHTML = '<div class="video-placeholder"><span class="play-btn">' + icon("play") + "</span><span>Vidéo bientôt disponible</span></div>";
  }

  /* ---------- 11. boîte à idées (Netlify Forms) ---------- */
  set("[data-idees-intro]", txt(S.boiteAIdees.intro));
  var select = $("[data-commission-select]");
  S.commissions.forEach(function (m) {
    var o = document.createElement("option");
    o.value = o.textContent = m.nom;
    select.appendChild(o);
  });
  var other = document.createElement("option");
  other.value = other.textContent = "Autre";
  select.appendChild(other);

  var form = $("[data-idees-form]"), status = $("[data-form-status]");
  var formspree = (S.boiteAIdees.formspree || "").trim();
  if (!formspree) {
    set("[data-form-note]", icon("whatsapp") + "<span>Votre idée s’ouvrira dans WhatsApp, prête à être envoyée à l’équipe.</span>");
  }
  function sendByWhatsApp() {
    var d = new FormData(form);
    // message en texte simple (sans emoji ni mise en forme) pour s'afficher sur tous les téléphones
    var msg = "Idée pour Solid'Action\n\nCommission : " + d.get("commission") + "\n\nIdée : " + d.get("idee") +
      (d.get("nom") ? "\n\nNom : " + d.get("nom") : "");
    window.open("https://wa.me/" + String(S.contact.whatsapp).replace(/\D/g, "") + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    status.className = "form-status is-ok";
    status.textContent = "WhatsApp s’est ouvert : il ne reste qu’à appuyer sur « Envoyer ». Merci !";
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!formspree) { sendByWhatsApp(); return; }
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    status.className = "form-status";
    status.textContent = "Envoi en cours…";
    fetch(formspree, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      form.reset();
      status.className = "form-status is-ok";
      status.textContent = S.boiteAIdees.merci;
    }).catch(function () {
      status.className = "form-status is-error";
      status.innerHTML = "L’envoi n’a pas fonctionné. Réessayez, ou <a href=\"" + esc(waUrl) + "\" target=\"_blank\" rel=\"noopener\">envoyez-nous votre idée sur WhatsApp</a>.";
    }).then(function () { btn.disabled = false; });
  });

  /* ---------- 12. FAQ ---------- */
  set("[data-faq]", S.faq.map(function (q) {
    return '<details class="faq-item reveal"><summary><span>' + txt(q.question) + "</span>" + icon("chevron") + "</summary><div class=\"faq-body\"><p>" + txt(q.reponse) + "</p></div></details>";
  }).join(""));

  /* ---------- 13. pied de page ---------- */
  var e = S.election;
  set("[data-footer-vote]",
    '<h2 class="footer-title">Le jour du vote</h2>' +
    '<p class="footer-date">' + txt(e.dateTexte) + "</p>" +
    '<ul class="footer-list">' +
    "<li>" + icon("horloge") + "<span>" + txt(e.horaires) + "</span></li>" +
    "<li>" + icon("lieu") + "<span>" + (e.lieuLienCarte ? '<a href="' + esc(e.lieuLienCarte) + '" target="_blank" rel="noopener">' + txt(e.lieu) + "</a>" : txt(e.lieu)) + "</span></li></ul>" +
    '<p class="footer-slogan">' + txt(S.general.slogan) + "</p>");
  var ct = S.contact, contactItems = [];
  if (ct.telephoneAffiche) contactItems.push("<li>" + icon("telephone") + '<a href="tel:+' + esc(String(ct.whatsapp).replace(/\D/g, "")) + '">' + txt(ct.telephoneAffiche) + "</a></li>");
  if (ct.email) contactItems.push("<li>" + icon("mail") + '<a href="mailto:' + esc(ct.email) + '">' + txt(ct.email) + "</a></li>");
  set("[data-footer-contact]", contactItems.join(""));
  var socials = [["instagram", "Instagram"], ["facebook", "Facebook"], ["tiktok", "TikTok"], ["linkedin", "LinkedIn"]];
  set("[data-socials]", socials.filter(function (s) { return ct[s[0]]; }).map(function (s) {
    return '<li><a href="' + esc(ct[s[0]]) + '" target="_blank" rel="noopener" aria-label="' + s[1] + '">' + icon(s[0]) + "</a></li>";
  }).join(""));
  set("[data-footer-bottom]", "© " + new Date().getFullYear() + " " + esc(S.general.droits || S.general.nomListe));


  /* ---------- menu mobile ---------- */
  var header = $(".site-header"), burger = $(".burger"), nav = $("#menu");
  function closeMenu() {
    header.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Ouvrir le menu");
  }
  burger.addEventListener("click", function () {
    var open = header.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") closeMenu(); });

  /* en-tête qui s'ombre au défilement + bouton WhatsApp flottant après l'accueil */
  var hero = $("#accueil");
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 8);
    document.body.classList.toggle("past-hero", y > hero.offsetHeight * 0.7);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* lien actif dans le menu */
  var links = {};
  $$(".nav a[href^='#']").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          $$(".nav a").forEach(function (a) { a.classList.remove("is-active"); });
          links[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- apparitions au défilement + chiffres animés ---------- */
  function countUp(el) {
    var end = Number(el.getAttribute("data-count"));
    if (reduceMotion || !end) return;
    var start = null, dur = 1400;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = "0";
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && !reduceMotion) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-visible");
        $$("[data-count]", en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  }
})();
