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
     0. ACCÈS AU SITE (mode « Bientôt disponible »)
     ------------------------------------------------------------------------
     ouvert: false → tout le monde voit une page d'attente « Bientôt en ligne ».
     ouvert: true  → le site complet est visible par tous (jour du lancement).

     Pour voir le vrai site pendant qu'il est fermé, ouvrez une seule fois :
       https://bambaxyz.github.io/Solid-Action/?apercu=salam2026
     (le téléphone s'en souvient ensuite ; pour oublier : ?apercu=off)
     Ce n'est pas un vrai mot de passe : ne partagez pas ce lien. */
  acces: {
    ouvert: true,
    codeApercu: "salam2026",
    message: "Le site de campagne de Solid’Action arrive très bientôt. Restez connectés !",
  },

  /* ------------------------------------------------------------------------
     1. INFORMATIONS GÉNÉRALES
     ------------------------------------------------------------------------ */
  general: {
    nomListe: "Solid’Action",
    slogan: "La solidarité dans l’action",
    association: "Association des Étudiants et Stagiaires Sénégalais de Toulouse",
    sigle: "ASEST",
    // Phrase d'accroche affichée sur l'accueil, sous le nom du candidat
    devise: "Solidifier l’existant, rassembler les forces, construire la suite. Ensemble pour une meilleure communauté.",
    // Grand titre de l'accueil : « Votez » + nom de la liste
    appelAuVote: "Votez",
    // Nom affiché en bas de page : « © 2026 … »
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
    lieu: "Salle des fêtes de Lafourguette, 28 rue de Gironis, 31100 Toulouse",
    lieuLienCarte: "https://www.google.com/maps/search/?api=1&query=Salle+des+f%C3%AAtes+Lafourguette+28+rue+de+Gironis+31100+Toulouse", // lien Google Maps du lieu de vote (facultatif)
  },

  /* ------------------------------------------------------------------------
     3. CONTACT ET RÉSEAUX SOCIAUX
     ------------------------------------------------------------------------
     whatsapp : numéro au format international, SANS le +, SANS espaces.
     Exemple pour 06 12 34 56 78 en France : "33612345678".
     Laissez "" pour un réseau que vous n'utilisez pas : il sera masqué. */
  contact: {
    whatsapp: "33758706326", // 07 58 70 63 26
    messageWhatsapp: "Bonjour Solid’Action ! J’ai une question sur votre programme :",
    // Numéro d'appel affiché dans « Nous contacter » (pied de page), différent du WhatsApp ci-dessus
    telephoneAffiche: "06 71 88 63 93", // laisser "" pour ne pas l'afficher
    telephone: "33671886393",           // même numéro, format international sans + ni espaces
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
    photoAccueil: "images/candidat/candidat-accueil.jpg",
    // Photo plus naturelle pour la section « Le candidat »
    photoPortrait: "images/candidat/candidat-portrait.jpg",
    // Photo carrée du visage, pour le petit rond de la section Gouvernement
    photoVisage: "images/candidat/candidat-visage.jpg",
    // Titre de la section « Le candidat »
    titreSection: "Salam au service de tous",

    accroche: "Étudiant en Master 1 au Mirail et vice-président de l’ASEST, je veux une association qui agit concrètement pour chacun d’entre nous.",

    biographie: [
      "Arrivé à Toulouse il y a trois ans pour étudier les langues, littératures et civilisations étrangères (LLCER) à l’Université du Mirail, j’ai vécu comme beaucoup d’entre vous les premières semaines difficiles : logement, démarches, éloignement de la famille.",
      "J’y ai suivi toute ma licence, de la L1 à la L3, avant d’entrer en Master 1 LLCER parcours international. En parallèle, je me suis engagé dans la vie de notre communauté : d’abord comme président de la commission Organisation, puis comme vice-président de l’ASEST dans le bureau actuel.",
      "Cette expérience m’a appris ce que notre association sait faire de mieux, et ce qu’il lui manque encore. C’est pour aller plus loin, ensemble, que je me présente aujourd’hui.",
    ],

    // Trois repères du parcours
    parcours: [
      { titre: "Études", texte: "Master 1 LLCER, parcours international, Université du Mirail" },
      { titre: "Parcours", texte: "Licence LLCER de la L1 à la L3 au Mirail, trois ans de vie étudiante à Toulouse" },
      { titre: "Engagements", texte: "Président de la commission Organisation, puis vice-président de l’ASEST dans le bureau actuel" },
    ],

    citation: {
      titre: "Pourquoi je me présente",
      texte: "Parce que la solidarité ne se proclame pas, elle se prouve. Je me présente pour que notre association soit présente à chaque étape de la vie étudiante : à l’arrivée, pendant les études et au moment de se lancer. Vice-président sortant, je connais le terrain : je sais ce qui fonctionne et ce qu’il faut changer.",
    },

    // Trois chiffres clés (animés au défilement). valeur = un nombre uniquement.
    chiffres: [
      { valeur: 3, suffixe: " ans", texte: "d’études et d’engagement à Toulouse" },
      { valeur: 5, suffixe: "", texte: "commissions pour couvrir toute la vie étudiante" },
      { valeur: 25, suffixe: "", texte: "propositions concrètes dans notre programme" },
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
             "communication", "finances", "calendrier"
     Vous pouvez ajouter ou supprimer une commission (copier-coller un bloc). */
  commissions: [
    {
      id: "sociale",
      icone: "social",
      nom: "Commission sociale",
      constat: "Trop d’étudiants traversent seuls une urgence financière, médicale ou administrative, sans savoir vers qui se tourner.",
      propositions: [
        "Une caisse de solidarité d’urgence, avec une réponse rapide aux situations difficiles.",
        "Un accompagnement aux démarches : titre de séjour, CAF, sécurité sociale, logement.",
        "Un accueil et un parrainage des nouveaux arrivants pour ne laisser personne isolé.",
        "« Outal ma job » : un réseau de restaurants, commerces et entreprises partenaires qui contactent directement l’ASEST pour recruter. Nous leur transmettons les CV des étudiants disponibles : plus besoin de chercher seul sur Indeed.",
      ],
    },
    {
      id: "communication",
      icone: "communication",
      nom: "Communication et relations extérieures",
      constat: "Nos activités restent peu visibles, faute d’outils de communication et d’une présence régulière auprès des étudiants et des partenaires.",
      propositions: [
        "Création du site internet de l’association : « My ASEST ».",
        "Achat de matériel audiovisuel (caméra, micro…).",
        "Mise en place d’un studio à l’ASEST.",
        "Création d’un journal mensuel : « Wéru Toulouse ».",
        "Un podcast vidéo toutes les deux semaines : « Exprime-toi ».",
        "Des partenariats avec les restaurants et structures de Toulouse pour faire vivre « Outal ma job », via le site My ASEST.",
        "L’ASEST et les autres associations en France : rencontres, projets communs et échanges d’expériences.",
      ],
    },
    {
      id: "sport",
      icone: "sport",
      nom: "Commission sport",
      constat: "Le sport crée des liens, pourtant trop peu d’activités régulières sont proposées aux étudiants.",
      propositions: [
        "Des matchs de football réguliers, ouverts à toutes et à tous.",
        "Un tournoi inter-associations au printemps.",
        "Des sorties sportives et de découverte de la région.",
      ],
    },
    {
      id: "pedagogique",
      icone: "etudes",
      nom: "Commission pédagogique",
      constat: "Inscriptions, choix de formation, orientation : beaucoup d’étudiants avancent sans repères ni accompagnement.",
      propositions: [
        "« Mes inscriptions et formations » : un accompagnement pas à pas pour les inscriptions.",
        "« Ma formation » : identifier les obstacles et saisir les opportunités.",
        "« Mon orientation » : conseils sur l’alternance et les formations universitaires.",
        "Des ateliers pédagogiques, avec une série de conférences.",
        "« Wanél sa talent » : un concours oratoire pour promouvoir les jeunes talents étudiants.",
      ],
    },
    {
      id: "organisation",
      icone: "calendrier",
      nom: "Commission d’organisation",
      constat: "Nos grands rendez-vous rassemblent, mais ils doivent être plus réguliers et mieux préparés.",
      propositions: [
        "Les 48 h de l’ASEST.",
        "Le Ngoonal de l’ASEST, un samedi sur deux.",
        "Deux grands ndogou pendant le mois de Ramadan.",
        "L’after Korité.",
        "La Tabaski ensemble.",
        "Le grand événement de l’ASEST au mois de juin.",
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
        nom: "Khoudia NDAO",
        titre: "Vice-présidente",
        statut: "Master 1 E2-CMD, Université Toulouse III – Paul Sabatier",
        photo: "images/gouvernement/khoudia-ndao.jpg",
        engagement: "Être à l’écoute de chaque étudiant et faire avancer nos projets avec rigueur.",
      },
      {
        nom: "Pape Mamadou KANE",
        titre: "Secrétaire général",
        statut: "",
        photo: "images/gouvernement/pape-mamadou-kane.jpg",
        engagement: "Une association bien organisée, transparente et joignable à tout moment.",
      },
      {
        nom: "Mamadou TALLA",
        titre: "Trésorier",
        statut: "BTS 2 MCO (Management Commercial Opérationnel)",
        photo: "images/gouvernement/mamadou-talla.jpg",
        engagement: "Des comptes clairs et partagés, pour que chaque euro serve les étudiants.",
      },
    ],
    annonce: "Les présidents et adjoints des cinq commissions seront présentés très prochainement.",
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
        "Installation du bureau et publication du calendrier annuel",
        "Lancement du Ngoonal de l’ASEST, un samedi sur deux",
        "Assemblée ouverte pour recueillir vos idées",
      ],
    },
    {
      periode: "Mois 2",
      titre: "Accompagner",
      engagements: [
        "Lancement de la caisse de solidarité d’urgence",
        "Premier atelier pédagogique « Mon orientation »",
        "Premier épisode du podcast « Exprime-toi »",
      ],
    },
    {
      periode: "Mois 3",
      titre: "Rendre des comptes",
      engagements: [
        "Premier numéro du journal « Wéru Toulouse »",
        "Préparation des grands ndogou du Ramadan",
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
    titre: "Le guide pratique des nouveaux arrivants",
    texte: "Arrivée, logement, CROUS, transports, santé, vie étudiante : le guide « Bienvenue à Toulouse » de Campus France réunit tout ce qu’il faut savoir pour bien démarrer.",
    // Mettez le PDF dans le dossier documents/ puis indiquez son nom ici
    lien: "documents/guide-bienvenue-a-toulouse.pdf",
    bouton: "Télécharger le guide (PDF)",
  },

  /* ------------------------------------------------------------------------
     10. L'ÉQUIPE DE CAMPAGNE
     Photos à mettre dans images/equipe/ (carrées de préférence)
     ------------------------------------------------------------------------ */
  equipe: [
    // role est facultatif : laissez-le vide ("") ou retirez-le pour n'afficher que le nom
    { nom: "Abdou Aziz DIOP", photo: "" },
    { nom: "Khoudia NDAO", photo: "images/gouvernement/khoudia-ndao.jpg" },
    { nom: "Mamadou TALLA", photo: "images/gouvernement/mamadou-talla.jpg" },
    { nom: "Pape Mamadou KANE", photo: "images/gouvernement/pape-mamadou-kane.jpg" },
    { nom: "Seynabou GUEYE", photo: "" },
    { nom: "Leila Ait Ka SY", photo: "" },
    { nom: "Moustapha HANN", photo: "" },
    { nom: "Serigne Fallou KANTE", photo: "" },
    { nom: "Mouhamadou GUEYE", photo: "" },
    { nom: "Ngagne NGOM", photo: "" },
    { nom: "Fatima AW", photo: "" },
    { nom: "Ibrahima FAYE", photo: "" },
    { nom: "Sophie NDIAYE", photo: "" },
    { nom: "Racky Serigne NDIAYE", photo: "" },
    { nom: "Serigne Modou DIOP", photo: "" },
    { nom: "Mouhamed NDIAYE", photo: "" },
    { nom: "Ndeye Penda DIOUM", photo: "" },
  ],

  /* ------------------------------------------------------------------------
     11. LA VIDÉO (format vertical)
     ------------------------------------------------------------------------
     Option A : fichier vidéo dans videos/  → fichier: "videos/salam.mp4"
                (MP4, moins de 20 Mo conseillé) + image d'aperçu facultative
     Option B : vidéo YouTube  → youtube: "https://www.youtube.com/shorts/XXXX"
     Laissez les deux vides : un emplacement « bientôt disponible » s'affiche. */
  video: {
    afficher: false, // mettre true pour afficher la section Vidéo sur le site
    titre: "Salam vous parle",
    texte: "Une minute pour comprendre pourquoi je me présente et ce que nous allons faire ensemble.",
    fichier: "",
    apercu: "",
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
    { question: "Qui peut voter ?", reponse: "Tous les étudiants de Toulouse." },
    { question: "Quand a lieu l’élection ?", reponse: "Le dimanche 25 octobre 2026. Les horaires exacts seront annoncés ici et sur WhatsApp." },
    { question: "Où vote-t-on ?", reponse: "À la salle des fêtes de Lafourguette, 28 rue de Gironis, 31100 Toulouse." },
    { question: "Comment voter ?", reponse: "Présentez-vous au bureau de vote avec votre carte étudiante et une pièce d’identité, puis votez pour Solid’Action." },
    { question: "Comment rejoindre l’équipe Solid’Action ?", reponse: "Envoyez-nous un message sur WhatsApp au 07 58 70 63 26 ou passez par la boîte à idées : toutes les bonnes volontés sont les bienvenues." },
  ],
};
