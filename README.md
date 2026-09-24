# Solid’Action — site de campagne

Site de la liste **Solid’Action** (candidat : **Salam**) pour l’élection à la présidence de
l’Association des Étudiants et Stagiaires Sénégalais de Toulouse (ASEST), le **dimanche 25 octobre 2026**.

> *La solidarité dans l’action.*

Le site est une simple page web (HTML, CSS, JavaScript), sans installation ni outil technique.
Il est hébergé **gratuitement sur GitHub Pages** à l’adresse :

**https://bambaxyz.github.io/Solid-Action/**

---

## 1. Modifier le contenu : un seul fichier, `content.js`

**Tous les textes du site** (nom, biographie, programme, gouvernement, équipe, dates, FAQ, contacts…)
sont dans le fichier **`content.js`**. Vous n’avez pas besoin de toucher aux autres fichiers.

### Comment faire

1. Ouvrez `content.js` avec un éditeur de texte simple
   (Bloc-notes sur Windows, TextEdit sur Mac en mode « texte brut »,
   ou directement sur GitHub avec le crayon ✏️ « Edit this file »).
2. Modifiez **uniquement le texte entre guillemets** :
   ```js
   prenom: "Salam",
   ```
3. Enregistrez, puis rechargez la page dans le navigateur pour vérifier.

### Les 4 règles à respecter

| ✅ À faire | ❌ À éviter |
|---|---|
| Garder les guillemets `"…"` autour du texte | Supprimer un guillemet |
| Garder la virgule `,` en fin de ligne | Supprimer une virgule ou une accolade `{ }` |
| Utiliser `’` ou `'` pour les apostrophes | Mettre un `"` à l’intérieur d’un texte (utilisez « ») |
| Copier-coller un bloc entier `{ … },` pour ajouter un élément | Couper un bloc en deux |

Si la page devient **blanche** après une modification, c’est presque toujours un guillemet
ou une virgule oubliée : annulez votre dernière modification (Ctrl+Z) et recommencez.

### Les textes à compléter

Tous les textes d’exemple sont marqués **`[À REMPLIR]`**. Sur le site, ils apparaissent
**surlignés en jaune** pour les repérer facilement. Quand il n’en reste plus, plus rien n’est surligné.

### Où se trouve quoi dans `content.js`

| Section du fichier | Ce qu’elle contient |
|---|---|
| 1. Informations générales | Nom de la liste, slogan, nom de l’association |
| 2. L’élection | Date et heure (compte à rebours), horaires, lieu |
| 3. Contact | Numéro WhatsApp, message pré-rempli, e-mail, réseaux sociaux |
| 4. Le candidat | Nom, photos, biographie, parcours, citation, 3 chiffres clés |
| 5. Nos valeurs | Solidarité, Transparence, Action |
| 6. Le programme | Une carte par commission : constat + propositions |
| 7. Le gouvernement | Président(e) et adjoint(e) de chaque commission |
| 8. 100 premiers jours | Engagements des mois 1, 2 et 3 |
| 9. Déjà en action | Réalisations + guide des nouveaux arrivants |
| 10. L’équipe de campagne | Nom, rôle, photo |
| 11. La vidéo | Fichier MP4 ou lien YouTube |
| 12. Boîte à idées | Texte d’introduction et message de remerciement |
| 13. Questions fréquentes | Questions / réponses |

**Numéro WhatsApp** : au format international, sans `+` ni espaces.
Exemple : 06 12 34 56 78 → `"33612345678"`.

---

## 2. Ajouter les photos

Déposez les photos dans le dossier `images/`, puis indiquez leur chemin dans `content.js`.
Tant qu’une photo manque, **un avatar élégant aux initiales** s’affiche automatiquement.

| Dossier | Photos attendues | Format conseillé |
|---|---|---|
| `images/candidat/` | `candidat-accueil.jpg` (accueil), `candidat-portrait.jpg` (section candidat) | vertical, ~1000 × 1250 px |
| `images/gouvernement/` | `social-president.jpg`, `social-adjoint.jpg`, `logement-president.jpg`… | carré, ~400 × 400 px |
| `images/equipe/` | `prenom-nom.jpg` | carré, ~400 × 400 px |
| `images/realisations/` | une photo par action (facultatif) | horizontal, ~1200 × 750 px |
| `documents/` | `guide-bienvenue-a-toulouse.pdf` | PDF |
| `videos/` | la vidéo verticale (ou utilisez YouTube) | MP4 9:16, < 20 Mo |

Exemple dans `content.js` :
```js
photoAccueil: "images/candidat/candidat-accueil.jpg",
```

**Important pour la vitesse du site** (vos visiteurs sont sur téléphone) : compressez chaque photo
avant de l’ajouter, par exemple sur <https://squoosh.app> (format JPG ou WebP, qualité 75,
idéalement moins de 250 Ko par photo). Attention aux majuscules : `Photo.JPG` ≠ `photo.jpg`.

Chaque dossier contient un fichier `LISEZMOI.txt` qui rappelle ces consignes.

---

## 3. Mettre le site en ligne gratuitement sur GitHub Pages

### Activer GitHub Pages (une seule fois, 2 minutes)

1. Ouvrez le dépôt <https://github.com/BambaXYZ/Solid-Action> et cliquez sur **Settings** (Paramètres).
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Dans **Build and deployment → Source**, choisissez **Deploy from a branch**.
4. Dans **Branch**, choisissez la branche qui contient le site
   (actuellement `claude/solidaction-campaign-site-1fzeqy`) et le dossier **`/ (root)`**, puis **Save**.
5. Attendez 1 à 2 minutes et rechargez la page : l’adresse du site s’affiche en haut
   (**https://bambaxyz.github.io/Solid-Action/**). Le site est en ligne !

C’est gratuit tant que le dépôt reste **public**.

### Mettre à jour le site

Chaque modification enregistrée sur GitHub met le site à jour automatiquement (1 à 2 minutes).

- **Modifier un texte** : ouvrez `content.js` sur GitHub → crayon ✏️ (**Edit this file**) → modifiez →
  **Commit changes**.
- **Ajouter une photo** : ouvrez le dossier voulu (par exemple `images/equipe`) → **Add file → Upload files** →
  déposez la photo → **Commit changes**. Puis indiquez son chemin dans `content.js`.

Astuce : si l’ancienne version s’affiche encore sur votre téléphone, rechargez la page ou ajoutez `?v=2` à la fin du lien.

### La boîte à idées

GitHub Pages n’héberge que des pages, pas de formulaire. Deux options, au choix, dans `content.js`
(section « 12. BOÎTE À IDÉES ») :

- **Option WhatsApp (par défaut, rien à faire)** : `formspree: ""`. Quand quelqu’un envoie une idée,
  WhatsApp s’ouvre avec le message déjà rédigé (idée, commission, nom), adressé au numéro de la campagne.
  La personne n’a plus qu’à appuyer sur « Envoyer ».
- **Option e-mail, anonyme (gratuit, 50 idées par mois)** :
  1. Créez un compte sur <https://formspree.io> avec l’adresse e-mail qui doit recevoir les idées.
  2. Cliquez sur **New Form**, donnez-lui un nom (« Boîte à idées »).
  3. Copiez l’adresse affichée, du type `https://formspree.io/f/abcdwxyz`.
  4. Collez-la dans `content.js` : `formspree: "https://formspree.io/f/abcdwxyz",`
  Les idées arrivent alors directement par e-mail, sans passer par WhatsApp.

---

## 4. Vérifications après la mise en ligne

### a) L’aperçu WhatsApp (image et lien)

`index.html` est déjà réglé sur l’adresse **https://bambaxyz.github.io/Solid-Action/**.
L’image d’aperçu (`images/og-image.jpg`, 1200 × 630) est prête.
Pour vérifier l’aperçu : collez le lien dans <https://www.opengraph.xyz>.
WhatsApp garde les aperçus en mémoire : si l’ancien aperçu s’affiche, ajoutez `?v=2` à la fin du lien.

Si un jour l’adresse change (nom de domaine personnalisé…), remplacez-la dans les lignes
`og:url` et `og:image` de `index.html`, et régénérez le QR code.

### b) Le QR code pour les affiches

Les fichiers prêts à imprimer sont dans `qr-code/` et pointent vers **https://bambaxyz.github.io/Solid-Action/** :
- `qr-code.svg` : **à utiliser pour l’impression** (qualité parfaite à toutes les tailles) ;
- `qr-code.png` : 2000 × 2000 px, pour Canva, Word, les réseaux sociaux…

Pour une autre adresse, régénérez-les (Python requis) :

```bash
pip install qrcode pillow
python3 outils/generer-qr.py https://NOUVELLE-ADRESSE
```

Imprimez le QR code en **3 cm × 3 cm minimum** et **testez-le avec plusieurs téléphones** avant l’impression.
Vérifiez aussi que le site est bien en ligne avant d’imprimer les affiches.

### c) La date et l’heure du vote

Le compte à rebours utilise `election.date` dans `content.js` (actuellement le 25 octobre 2026 à 10 h,
heure de Toulouse). Ajustez l’heure si le vote ouvre à un autre moment.

---

## 5. Le logo

Tous les fichiers sont dans `images/logo/` (format SVG vectoriel : net à toutes les tailles, imprimable) :

| Fichier | Usage |
|---|---|
| `logo-complet.svg` | Logo principal (symbole + nom + slogan) |
| `logo-complet-clair.svg` | Même logo pour fond sombre |
| `logo-horizontal.svg` / `-clair.svg` | Symbole à gauche du texte (bannières, en-têtes) |
| `logo-menu.svg` / `-clair.svg` | Version compacte sans slogan, pour le menu du site |
| `logo-symbole.svg` / `-clair.svg` | Symbole seul (avatars de réseaux sociaux, tampons) |
| `../../favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Icônes d’onglet et d’écran d’accueil |

La planche de présentation est dans `outils/apercu-logos.png`.

---

## La section Vidéo

Elle est actuellement masquée (`afficher: false` dans `content.js`, section « 11. LA VIDÉO »).
Pour l'afficher : déposez la vidéo verticale dans `videos/` (ou utilisez un lien YouTube),
indiquez-la dans `fichier` (ou `youtube`) et mettez `afficher: true`.

## 6. Organisation des fichiers

```
index.html          → structure de la page (ne pas modifier, sauf l'aperçu WhatsApp)
content.js          → TOUT LE CONTENU (le fichier à modifier)
css/style.css       → apparence (couleurs, mise en page)
js/main.js          → remplit la page à partir de content.js, compte à rebours, menus…
js/icones.js        → icônes
fonts/              → polices Poppins et Inter (hébergées sur le site, pour la rapidité)
images/             → logo, photos, image d'aperçu WhatsApp
documents/          → guide des nouveaux arrivants (PDF)
videos/             → vidéo du candidat
qr-code/            → QR code pour les affiches
outils/             → scripts de génération (logo, QR code) et modèle de l'image d'aperçu
.nojekyll           → indique à GitHub Pages de publier les fichiers tels quels
```

### Voir le site sur son ordinateur avant de le publier

Double-cliquez sur `index.html` : le site s’ouvre dans le navigateur.
(Les polices peuvent s’afficher légèrement différemment en local : c’est normal, tout est correct une fois en ligne.)

---

## Identité visuelle

| Couleur | Code | Usage |
|---|---|---|
| Terracotta | `#B9562F` | Couleur principale, boutons |
| Terracotta texte | `#A84A26` | Petits textes terracotta (contraste AA) |
| Pêche | `#E9A98B` | Couleur secondaire, décors |
| Brun foncé | `#2A1A14` | Textes |
| Crème | `#FBF6F1` | Fond |

Polices : **Plus Jakarta Sans** (titres et texte). Contrastes vérifiés selon les normes d’accessibilité AA.
Les animations sont automatiquement désactivées si l’option « réduire les animations » est activée sur le téléphone.
