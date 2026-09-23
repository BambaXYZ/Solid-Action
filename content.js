/* ==========================================================================
   SOLID'ACTION — CONTENU DU SITE
   ==========================================================================

   C'est LE SEUL fichier à modifier pour changer les textes du site.

   Règles simples :
   - Modifiez uniquement le texte ENTRE les guillemets "comme ceci".
   - Gardez les guillemets, les virgules en fin de ligne et les accolades { }.
   - Pour une apostrophe, utilisez ’ ou ' : les deux fonctionnent.
   - Pour un guillemet à l'intérieur d'un texte, utilisez « » plutôt que ".
   - Tout ce qui est marqué [À REMPLIR] est un texte d'exemple à remplacer.
     Tant qu'il reste des [À REMPLIR], ils sont surlignés en jaune sur le site.
   - Photos : mettez le fichier dans le bon dossier de images/, puis écrivez
     son chemin, par exemple  photo: "images/equipe/awa-diop.jpg".
     Laissez  photo: ""  tant que vous n'avez pas de photo : un avatar aux
     initiales s'affiche automatiquement.

   Après une modification, enregistrez et rechargez la page pour vérifier.
   ========================================================================== */

const SITE = {

  /* ------------------------------------------------------------------------
     1. INFORMATIONS GÉNÉRALES
     ------------------------------------------------------------------------ */
  general: {
    nomListe: "Solid’Action",
    slogan: "La solidarité dans l’action",
    association: "Association des Étudiants et Stagiaires Sénégalais de Toulouse",
    sigle: "AESST",
    // Titulaire des droits, affiché en bas de page : « © 2026 … — Tous droits réservés. »
    droits: "Cheikh Awa Balla Mbacke CISSE",
  },

  /* ------------------------------------------------------------------------
     2. L'ÉLECTION
     ------------------------------------------------------------------------
     date : format "AAAA-MM-JJTHH:MM:SS+01:00" (heure de Toulouse en hiver).
     Le compte à rebours se cale sur cette date et cette heure. */
  election: {
    date: "2026-10-25T10:00:00+01:00",
    dateTexte: "Dimanche 25 octobre 2026",
    horaires: "Horaires communiqués prochainement",
    lieu: "Lieu communiqué prochainement, à Toulouse",
    lieuLienCarte: "", // lien Google Maps du lieu de vote (facultatif)
  },

  /* ------------------------------------------------------------------------
     3. CONTACT ET RÉSEAUX SOCIAUX
     ------------------------------------------------------------------------
     whatsapp : numéro au format international, SANS le +, SANS espaces.
     Exemple pour 06 12 34 56 78 en France : "33612345678".
     Laissez "" pour un réseau que vous n'utilisez pas : il sera masqué. */
  contact: {
    whatsapp: "33600000000", // ⚠️ [À REMPLIR] : numéro WhatsApp de la campagne (faux numéro pour l'instant)
    messageWhatsapp: "Bonjour Solid’Action ! J’ai une question sur votre programme :",
    telephoneAffiche: "", // ex. "+33 6 12 34 56 78" (laisser "" pour ne pas l'afficher)
    email: "",            // ex. "solidaction.aesst@gmail.com"
    instagram: "",        // ex. "https://www.instagram.com/solidaction.aesst"
    facebook: "",
    tiktok: "",
    linkedin: "",
  },

  /* ------------------------------------------------------------------------
     4. LE CANDIDAT
     ------------------------------------------------------------------------ */
  candidat: {
    prenom: "Salam",
    nom: "", // nom de famille (laisser "" pour n'afficher que le prénom)
    fonction: "Candidat à la présidence de l’Association des Étudiants et Stagiaires Sénégalais de Toulouse",

    // Grande photo de l'accueil (idéalement portrait vertical, fond neutre, 1200 px de haut)
    photoAccueil: "", // ex. "images/candidat/candidat-accueil.jpg"
    // Photo plus naturelle pour la section « Le candidat »
    photoPortrait: "", // ex. "images/candidat/candidat-portrait.jpg"

    accroche: "Étudiant en Master 1 au Mirail et vice-président de l’AESST, je veux une association qui agit concrètement pour chacun d’entre nous.",

    biographie: [
      "Arrivé à Toulouse il y a trois ans pour étudier les langues, littératures et civilisations étrangères (LLCER) à l’Université Toulouse Jean-Jaurès, j’ai vécu comme beaucoup d’entre vous les premières semaines difficiles : logement, démarches, éloignement de la famille.",
      "J’y ai suivi toute ma licence, de la L1 à la L3, avant d’entrer en Master 1 LLCER parcours international. En parallèle, je me suis engagé dans la vie de notre communauté, jusqu’à devenir vice-président de l’AESST dans le bureau actuel.",
      "Cette expérience m’a appris ce que notre association sait faire de mieux, et ce qu’il lui manque encore. C’est pour aller plus loin, ensemble, que je me présente aujourd’hui.",
    ],

    // Trois repères du parcours
    parcours: [
      { titre: "Études", texte: "Master 1 LLCER, parcours international, Université Toulouse Jean-Jaurès (Le Mirail)" },
      { titre: "Parcours", texte: "Licence LLCER de la L1 à la L3 au Mirail, trois ans de vie étudiante à Toulouse" },
      { titre: "Engagements", texte: "Vice-président de l’AESST dans le bureau actuel" },
    ],

    citation: {
      titre: "Pourquoi je me présente",
      texte: "Parce que la solidarité ne se proclame pas, elle se prouve. Je me présente pour que notre association soit présente à chaque étape de la vie étudiante : à l’arrivée, pendant les études et au moment de se lancer. Vice-président sortant, je connais le terrain : je sais ce qui fonctionne et ce qu’il faut changer.",
    },

    // Trois chiffres clés (animés au défilement). valeur = un nombre uniquement.
    chiffres: [
      { valeur: 3, suffixe: " ans", texte: "d’études et d’engagement à Toulouse" },
      { valeur: 6, suffixe: "", texte: "commissions pour couvrir toute la vie étudiante" },
      { valeur: 18, suffixe: "", texte: "propositions concrètes dans notre programme" },
    ],
  },

  /* ------------------------------------------------------------------------
     5. NOS VALEURS (3 blocs)
     icone : "solidarite", "transparence" ou "action"
     ------------------------------------------------------------------------ */
  valeurs: [
    { icone: "solidarite", titre: "Solidarité", texte: "Personne ne reste seul face aux difficultés : nous nous serrons les coudes, de l’arrivée à Toulouse jusqu’au diplôme." },
    { icone: "transparence", titre: "Transparence", texte: "Chaque euro et chaque décision seront rendus publics, avec un bilan partagé tous les trois mois." },
    { icone: "action", titre: "Action", texte: "Des engagements concrets, datés et vérifiables, plutôt que des promesses sans lendemain." },
  ],

  /* ------------------------------------------------------------------------
     6. LE PROGRAMME PAR COMMISSION
     ------------------------------------------------------------------------
     id : identifiant court, sans espace ni accent (sert aux liens internes).
     icone : "social", "logement", "accueil", "etudes", "culture", "sport",
             "communication", "finances"
     Vous pouvez ajouter ou supprimer une commission (copier-coller un bloc). */
  commissions: [
    {
      id: "social",
      icone: "social",
      nom: "Affaires sociales",
      constat: "Trop d’étudiants traversent seuls une urgence financière, médicale ou administrative, sans savoir vers qui se tourner.",
      propositions: [
        "Une caisse de solidarité d’urgence, avec une réponse sous 72 heures.",
        "Une permanence mensuelle d’aide aux démarches (titre de séjour, CAF, sécurité sociale).",
        "Un réseau de parrains pour ne laisser personne isolé.",
      ],
    },
    {
      id: "logement",
      icone: "logement",
      nom: "Logement",
      constat: "Trouver un logement sans garant ni réseau reste le premier obstacle à l’arrivée à Toulouse.",
      propositions: [
        "Une bourse au logement : colocations, sous-locations et hébergement temporaire entre membres.",
        "Un guide pratique des garanties (Visale, garants) et des arnaques à éviter.",
        "Un accompagnement aux visites pour les nouveaux arrivants.",
      ],
    },
    {
      id: "accueil",
      icone: "accueil",
      nom: "Accueil et intégration",
      constat: "Les premières semaines décident souvent de toute l’année, mais l’accueil reste improvisé.",
      propositions: [
        "Un accueil à l’aéroport et à la gare pendant la rentrée.",
        "Un guide gratuit des nouveaux arrivants, mis à jour chaque année.",
        "Une journée d’intégration dès septembre.",
      ],
    },
    {
      id: "etudes",
      icone: "etudes",
      nom: "Études et insertion pro",
      constat: "Stages, alternances et premiers emplois : beaucoup de talents manquent seulement de réseau.",
      propositions: [
        "Des ateliers CV, lettre de motivation et entretien chaque trimestre.",
        "Un annuaire des anciens pour trouver un mentor dans son domaine.",
        "Des séances de révision collectives avant les examens.",
      ],
    },
    {
      id: "culture",
      icone: "culture",
      nom: "Culture et événements",
      constat: "Notre culture nous rassemble, mais les événements restent trop rares et mal annoncés.",
      propositions: [
        "Un calendrier annuel des événements publié dès la rentrée.",
        "Une grande soirée culturelle sénégalaise ouverte à tous les Toulousains.",
        "Des moments de partage pour les fêtes religieuses et nationales.",
      ],
    },
    {
      id: "sport",
      icone: "sport",
      nom: "Sport et bien-être",
      constat: "Le sport crée des liens, pourtant aucune activité régulière n’est proposée aux membres.",
      propositions: [
        "Des matchs de football hebdomadaires ouverts à toutes et à tous.",
        "Un tournoi inter-associations au printemps.",
        "Des sorties découverte de la région.",
      ],
    },
  ],

  /* ------------------------------------------------------------------------
     7. LE GOUVERNEMENT SOLID'ACTION
     ------------------------------------------------------------------------
     bureau : les membres du bureau autour du candidat (vice-présidence,
     secrétariat général, trésorerie…). Photos dans images/gouvernement/
     Ajouter une personne = copier-coller un bloc { … }, sans oublier la virgule.

     poles : les présidents et adjoints de commission. Laissez  poles: []
     tant qu'ils ne sont pas annoncés : le texte « annonce » s'affiche à la place.
     Modèle d'un pôle (commission = un "id" de la section 6) :
       {
         commission: "social",
         president: { nom: "…", titre: "Présidente de commission", statut: "…", photo: "", engagement: "…" },
         adjoint: { nom: "…", titre: "Adjoint", statut: "…", photo: "", engagement: "…" },
       },
     statut : filière ou situation (laisser "" pour ne rien afficher). */
  gouvernement: {
    intro: "Une équipe déjà en place autour de Salam, prête à travailler dès le premier jour.",
    bureau: [
      {
        nom: "Khoudia",
        titre: "Vice-présidente",
        statut: "Master 1 E2-CMD, Université Toulouse III – Paul Sabatier",
        photo: "", // ex. "images/gouvernement/khoudia.jpg"
        engagement: "Être à l’écoute de chaque étudiant et faire avancer nos projets avec rigueur.",
      },
      {
        nom: "Pape Kane",
        titre: "Secrétaire général et directeur de campagne",
        statut: "",
        photo: "", // ex. "images/gouvernement/pape-kane.jpg"
        engagement: "Une association bien organisée, transparente et joignable à tout moment.",
      },
    ],
    annonce: "Les présidents et adjoints des six commissions seront présentés très prochainement.",
    poles: [],
  },

  /* ------------------------------------------------------------------------
     8. NOS 100 PREMIERS JOURS
     ------------------------------------------------------------------------ */
  centJours: [
    {
      periode: "Mois 1",
      titre: "Rassembler",
      engagements: [
        "Installation du gouvernement et publication du calendrier annuel",
        "Lancement de la caisse de solidarité d’urgence",
        "Assemblée ouverte pour recueillir vos idées",
      ],
    },
    {
      periode: "Mois 2",
      titre: "Accompagner",
      engagements: [
        "Ouverture de la bourse au logement",
        "Premier atelier CV et entretien",
        "Lancement des matchs hebdomadaires",
      ],
    },
    {
      periode: "Mois 3",
      titre: "Rendre des comptes",
      engagements: [
        "Première grande soirée culturelle",
        "Mise en ligne de l’annuaire des anciens",
        "Bilan public des 100 jours, chiffres à l’appui",
      ],
    },
  ],

  /* ------------------------------------------------------------------------
     9. DÉJÀ EN ACTION
     Photo facultative : ajoutez  photo: "images/realisations/nom.jpg",  dans un bloc.
     ------------------------------------------------------------------------ */
  realisations: [
    { date: "Rentrée 2026", titre: "Accueil des nouveaux arrivants", texte: "Accueil et accompagnement des nouveaux étudiants sénégalais dans leurs premières démarches : logement, banque, inscriptions." },
    { date: "Année 2025-2026", titre: "Solidarité au quotidien", texte: "Soutien aux étudiants en difficulté : orientation vers les aides, accompagnement administratif et entraide entre membres." },
    { date: "Année 2025-2026", titre: "Des moments qui rassemblent", texte: "Participation à l’organisation des rencontres de la communauté : fêtes, soirées culturelles et activités sportives." },
  ],

  guide: {
    titre: "Le guide gratuit des nouveaux arrivants",
    texte: "Logement, banque, titre de séjour, transports, bons plans : tout ce qu’il faut savoir pour bien démarrer à Toulouse, réuni dans un seul guide.",
    // Mettez le PDF dans le dossier documents/ puis indiquez son nom ici
    lien: "documents/guide-nouveaux-arrivants.pdf",
    bouton: "Télécharger le guide (PDF)",
  },

  /* ------------------------------------------------------------------------
     10. L'ÉQUIPE DE CAMPAGNE
     Photos à mettre dans images/equipe/ (carrées de préférence)
     ------------------------------------------------------------------------ */
  equipe: [
    // Noms provisoires (sauf Pape Kane) : remplacez-les par les vrais membres de l'équipe.
    { nom: "Pape Kane", role: "Directeur de campagne", photo: "" },
    { nom: "Aïssatou Ndiaye", role: "Responsable communication", photo: "" },
    { nom: "Mamadou Diallo", role: "Trésorier de campagne", photo: "" },
    { nom: "Fatou Sow", role: "Chargée des réseaux sociaux", photo: "" },
    { nom: "Ousmane Faye", role: "Responsable terrain", photo: "" },
    { nom: "Ndèye Fall", role: "Photo et vidéo", photo: "" },
  ],

  /* ------------------------------------------------------------------------
     11. LA VIDÉO (format vertical)
     ------------------------------------------------------------------------
     Option A : fichier vidéo dans videos/  → fichier: "videos/salam.mp4"
                (MP4, moins de 20 Mo conseillé) + image d'aperçu facultative
     Option B : vidéo YouTube  → youtube: "https://www.youtube.com/shorts/XXXX"
     Laissez les deux vides : un emplacement « bientôt disponible » s'affiche. */
  video: {
    titre: "Salam vous parle",
    texte: "Une minute pour comprendre pourquoi je me présente et ce que nous allons faire ensemble.",
    fichier: "",
    apercu: "", // ex. "images/candidat/video-apercu.jpg"
    youtube: "",
  },

  /* ------------------------------------------------------------------------
     12. BOÎTE À IDÉES
     ------------------------------------------------------------------------ */
  /* Deux façons de recevoir les idées (au choix) :
     - Laisser  formspree: ""  → le bouton ouvre WhatsApp avec l'idée déjà écrite,
       envoyée au numéro de la section 3. Rien à configurer.
     - Ou créer un formulaire gratuit sur https://formspree.io (50 envois/mois),
       puis coller son adresse ici, par exemple  formspree: "https://formspree.io/f/abcdwxyz"
       → les idées arrivent par e-mail et restent anonymes si la personne ne met pas son nom. */
  boiteAIdees: {
    formspree: "",
    intro: "Une idée pour améliorer la vie des étudiants et stagiaires sénégalais à Toulouse ? Nous lisons toutes les propositions.",
    merci: "Merci ! Votre idée a bien été envoyée à l’équipe Solid’Action.",
  },

  /* ------------------------------------------------------------------------
     13. QUESTIONS FRÉQUENTES
     ------------------------------------------------------------------------ */
  faq: [
    { question: "Qui peut voter ?", reponse: "Tous les membres de l’AESST à jour de leur adhésion le jour du vote, selon les statuts de l’association." },
    { question: "Quand a lieu l’élection ?", reponse: "Le dimanche 25 octobre 2026. Les horaires exacts seront annoncés ici et sur WhatsApp." },
    { question: "Où vote-t-on ?", reponse: "À Toulouse. Le lieu exact, avec l’accès en métro, sera annoncé ici et sur WhatsApp dès qu’il sera confirmé." },
    { question: "Comment voter ?", reponse: "Présentez-vous au bureau de vote avec une pièce d’identité et votre carte de membre ou votre carte étudiante, puis votez pour Solid’Action." },
    { question: "Je ne suis pas encore adhérent, que faire ?", reponse: "Il est encore possible d’adhérer à l’AESST avant le scrutin. Écrivez-nous sur WhatsApp : nous vous expliquons comment faire." },
    { question: "Comment rejoindre l’équipe Solid’Action ?", reponse: "Envoyez-nous un message sur WhatsApp ou passez par la boîte à idées : toutes les bonnes volontés sont les bienvenues." },
  ],
};
