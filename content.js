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
  },

  /* ------------------------------------------------------------------------
     2. L'ÉLECTION
     ------------------------------------------------------------------------
     date : format "AAAA-MM-JJTHH:MM:SS+01:00" (heure de Toulouse en hiver).
     Le compte à rebours se cale sur cette date et cette heure. */
  election: {
    date: "2026-10-25T10:00:00+01:00",
    dateTexte: "Dimanche 25 octobre 2026",
    horaires: "De 10 h à 18 h [À REMPLIR]",
    lieu: "Salle [À REMPLIR], Toulouse",
    lieuLienCarte: "", // lien Google Maps du lieu de vote (facultatif)
  },

  /* ------------------------------------------------------------------------
     3. CONTACT ET RÉSEAUX SOCIAUX
     ------------------------------------------------------------------------
     whatsapp : numéro au format international, SANS le +, SANS espaces.
     Exemple pour 06 12 34 56 78 en France : "33612345678".
     Laissez "" pour un réseau que vous n'utilisez pas : il sera masqué. */
  contact: {
    whatsapp: "33600000000", // [À REMPLIR]
    messageWhatsapp: "Bonjour Solid’Action ! J’ai une question sur votre programme :",
    telephoneAffiche: "+33 6 00 00 00 00 [À REMPLIR]",
    email: "contact@solidaction.fr", // [À REMPLIR]
    instagram: "https://www.instagram.com/", // [À REMPLIR]
    facebook: "",
    tiktok: "",
    linkedin: "",
  },

  /* ------------------------------------------------------------------------
     4. LE CANDIDAT
     ------------------------------------------------------------------------ */
  candidat: {
    prenom: "Salam",
    nom: "", // [À REMPLIR] nom de famille (laisser "" pour n'afficher que le prénom)
    fonction: "Candidat à la présidence de l’Association des Étudiants et Stagiaires Sénégalais de Toulouse",

    // Grande photo de l'accueil (idéalement portrait vertical, fond neutre, 1200 px de haut)
    photoAccueil: "", // ex. "images/candidat/candidat-accueil.jpg"
    // Photo plus naturelle pour la section « Le candidat »
    photoPortrait: "", // ex. "images/candidat/candidat-portrait.jpg"

    accroche: "Étudiant, bénévole et Toulousain d’adoption, je veux une association qui agit concrètement pour chacun d’entre nous.",

    biographie: [
      "Arrivé à Toulouse en [À REMPLIR] pour mes études de [À REMPLIR], j’ai vécu comme beaucoup d’entre vous les premières semaines difficiles : logement, démarches, solitude.",
      "Depuis, je m’engage pour que plus personne ne vive cette arrivée seul. [À REMPLIR : 2 ou 3 phrases sur votre parcours et vos engagements.]",
    ],

    // Trois repères du parcours
    parcours: [
      { titre: "Études", texte: "Master [À REMPLIR] à l’Université [À REMPLIR]" },
      { titre: "Parcours", texte: "[À REMPLIR] : stage, emploi ou expérience marquante" },
      { titre: "Engagements", texte: "Bénévole à [À REMPLIR], membre de l’AESST depuis [À REMPLIR]" },
    ],

    citation: {
      titre: "Pourquoi je me présente",
      texte: "Parce que la solidarité ne se proclame pas, elle se prouve. Je me présente pour que notre association soit présente à chaque étape de la vie étudiante : à l’arrivée, pendant les études et au moment de se lancer. [À REMPLIR]",
    },

    // Trois chiffres clés (animés au défilement). valeur = un nombre uniquement.
    chiffres: [
      { valeur: 5, suffixe: " ans", texte: "d’engagement associatif [À REMPLIR]" },
      { valeur: 150, suffixe: "+", texte: "nouveaux arrivants accompagnés [À REMPLIR]" },
      { valeur: 12, suffixe: "", texte: "événements organisés [À REMPLIR]" },
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
     Un bloc par commission : "commission" doit reprendre un "id" de la
     section 6 pour que le lien « Voir les propositions » fonctionne.
     Photos à mettre dans images/gouvernement/
     Pour une femme, ajoutez  titre: "Présidente de commission"  ou  titre: "Adjointe"
     dans son bloc, par exemple :
       adjoint: { nom: "Awa Diop", titre: "Adjointe", statut: "...", photo: "", engagement: "..." }, */
  gouvernement: {
    intro: "Une équipe déjà constituée, avec un président et un adjoint pour chaque commission, prête à travailler dès le premier jour.",
    poles: [
      {
        commission: "social",
        president: { nom: "Prénom Nom [À REMPLIR]", statut: "Master Droit social", photo: "", engagement: "Aucune demande d’aide ne restera sans réponse." },
        adjoint: { nom: "Prénom Nom [À REMPLIR]", statut: "Licence AES", photo: "", engagement: "Écouter d’abord, agir ensuite, vite." },
      },
      {
        commission: "logement",
        president: { nom: "Prénom Nom [À REMPLIR]", statut: "Master Génie civil", photo: "", engagement: "Un toit dès l’arrivée, c’est la base de tout." },
        adjoint: { nom: "Prénom Nom [À REMPLIR]", statut: "BTS Immobilier", photo: "", engagement: "Je connais les pièges, je veux vous les éviter." },
      },
      {
        commission: "accueil",
        president: { nom: "Prénom Nom [À REMPLIR]", statut: "Licence Informatique", photo: "", engagement: "Chaque nouvel arrivant aura un visage ami." },
        adjoint: { nom: "Prénom Nom [À REMPLIR]", statut: "Stagiaire en communication", photo: "", engagement: "Personne ne devrait découvrir Toulouse seul." },
      },
      {
        commission: "etudes",
        president: { nom: "Prénom Nom [À REMPLIR]", statut: "Doctorante en économie", photo: "", engagement: "Ouvrir nos réseaux pour ouvrir des portes." },
        adjoint: { nom: "Prénom Nom [À REMPLIR]", statut: "Master Management", photo: "", engagement: "Un stage trouvé grâce à l’association, c’est une réussite collective." },
      },
      {
        commission: "culture",
        president: { nom: "Prénom Nom [À REMPLIR]", statut: "Licence Arts du spectacle", photo: "", engagement: "Faire vivre notre culture et la partager." },
        adjoint: { nom: "Prénom Nom [À REMPLIR]", statut: "Master Marketing", photo: "", engagement: "Des événements réguliers, bien organisés, pour tous." },
      },
      {
        commission: "sport",
        president: { nom: "Prénom Nom [À REMPLIR]", statut: "Licence STAPS", photo: "", engagement: "Le terrain rapproche plus vite que tous les discours." },
        adjoint: { nom: "Prénom Nom [À REMPLIR]", statut: "Ingénieur stagiaire", photo: "", engagement: "Bouger ensemble pour tenir ensemble." },
      },
    ],
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
    { date: "Septembre 2026 [À REMPLIR]", titre: "Accueil de rentrée", texte: "[À REMPLIR] nouveaux arrivants accueillis et accompagnés dans leurs premières démarches." },
    { date: "Été 2026 [À REMPLIR]", titre: "Collecte solidaire", texte: "[À REMPLIR] Collecte de fournitures et de vêtements pour les étudiants en difficulté." },
    { date: "Printemps 2026 [À REMPLIR]", titre: "Tournoi de football", texte: "[À REMPLIR] Un tournoi qui a réuni plus de 60 participants." },
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
    { nom: "Prénom Nom [À REMPLIR]", role: "Directrice de campagne", photo: "" },
    { nom: "Prénom Nom [À REMPLIR]", role: "Trésorier de campagne", photo: "" },
    { nom: "Prénom Nom [À REMPLIR]", role: "Responsable communication", photo: "" },
    { nom: "Prénom Nom [À REMPLIR]", role: "Responsable terrain", photo: "" },
    { nom: "Prénom Nom [À REMPLIR]", role: "Photographe et vidéo", photo: "" },
    { nom: "Prénom Nom [À REMPLIR]", role: "Chargée des réseaux sociaux", photo: "" },
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
    { question: "Qui peut voter ?", reponse: "Tous les membres de l’AESST à jour de leur adhésion le jour du vote. [À REMPLIR : conditions exactes]" },
    { question: "Quand a lieu l’élection ?", reponse: "Le dimanche 25 octobre 2026, de 10 h à 18 h. [À REMPLIR : horaires exacts]" },
    { question: "Où vote-t-on ?", reponse: "À la salle [À REMPLIR], Toulouse. Accès en métro : [À REMPLIR]." },
    { question: "Comment voter ?", reponse: "Présentez-vous avec une pièce d’identité et votre carte de membre ou votre carte étudiante. [À REMPLIR]" },
    { question: "Je ne suis pas encore adhérent, que faire ?", reponse: "Vous pouvez adhérer auprès de l’AESST jusqu’au [À REMPLIR]. Écrivez-nous sur WhatsApp, nous vous expliquons tout." },
    { question: "Comment rejoindre l’équipe Solid’Action ?", reponse: "Envoyez-nous un message sur WhatsApp ou passez par la boîte à idées : toutes les bonnes volontés sont les bienvenues." },
  ],
};
