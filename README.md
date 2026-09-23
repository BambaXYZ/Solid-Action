# Solid’Action — site de campagne

Site de la liste **Solid’Action** (candidat : **Salam**) pour l’élection à la présidence de
l’Association des Étudiants et Stagiaires Sénégalais de Toulouse (AESST), le **dimanche 25 octobre 2026**.

> *La solidarité dans l’action.*

Le site est une simple page web (HTML, CSS, JavaScript), sans installation ni outil technique :
on peut le mettre en ligne gratuitement sur Netlify en quelques minutes.

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
| `documents/` | `guide-nouveaux-arrivants.pdf` | PDF |
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

## 3. Mettre le site en ligne gratuitement sur Netlify

### Méthode la plus simple : glisser-déposer (5 minutes)

1. Créez un compte gratuit sur <https://app.netlify.com/signup> (avec votre e-mail ou GitHub).
2. Une fois connecté, allez dans **Sites** puis **Add new site → Deploy manually**.
3. **Glissez-déposez le dossier complet du site** (celui qui contient `index.html`) dans la zone indiquée.
4. Netlify affiche une adresse du type `https://nom-aleatoire-123.netlify.app` : votre site est en ligne !
5. Pour une adresse plus lisible : **Site configuration → Change site name** → par exemple `solid-action`
   → le site devient `https://solid-action.netlify.app`.

Pour publier une mise à jour : **Deploys** → glissez-déposez à nouveau le dossier.

### Méthode automatique : via GitHub (recommandée pour les mises à jour fréquentes)

1. Sur Netlify : **Add new site → Import an existing project → GitHub**.
2. Choisissez le dépôt `Solid-Action` et la bonne branche.
3. Laissez **Build command vide** et **Publish directory** = `.` (déjà réglé par `netlify.toml`).
4. Cliquez sur **Deploy**.

Ensuite, chaque modification de `content.js` enregistrée sur GitHub met le site à jour automatiquement
en une minute environ.

### Activer la boîte à idées (Netlify Forms)

Le formulaire fonctionne sans serveur grâce à Netlify Forms :

1. Dans Netlify, ouvrez **Forms** et cliquez sur **Enable form detection**.
2. **Redéployez** le site une fois (Deploys → Trigger deploy, ou nouveau glisser-déposer).
3. Le formulaire `boite-a-idees` apparaît dans **Forms**. Les idées envoyées s’y affichent.
4. Pour les recevoir par e-mail : **Forms → Form notifications → Add notification → Email notification**.

La formule gratuite accepte 100 envois par mois.

---

## 4. Après la mise en ligne : 3 choses à mettre à jour

### a) L’aperçu WhatsApp (image et lien)

WhatsApp a besoin de l’adresse complète du site. Dans `index.html`, remplacez les **deux**
occurrences de `https://solid-action.netlify.app` par votre adresse réelle :

```html
<meta property="og:url" content="https://VOTRE-ADRESSE/">
<meta property="og:image" content="https://VOTRE-ADRESSE/images/og-image.jpg">
```

L’image d’aperçu (`images/og-image.jpg`, 1200 × 630) est déjà prête.
Pour vérifier l’aperçu : collez le lien dans <https://www.opengraph.xyz>.
WhatsApp garde les aperçus en mémoire : si l’ancien aperçu s’affiche, ajoutez `?v=2` à la fin du lien.

### b) Le QR code pour les affiches

Les fichiers prêts à imprimer sont dans `qr-code/` :
- `qr-code.svg` : **à utiliser pour l’impression** (qualité parfaite à toutes les tailles) ;
- `qr-code.png` : 2000 × 2000 px, pour Canva, Word, les réseaux sociaux…

Ils pointent actuellement vers `https://solid-action.netlify.app`. Si votre adresse finale est différente,
régénérez-les (une seule commande, Python requis) :

```bash
pip install qrcode pillow
python3 outils/generer-qr.py https://VOTRE-ADRESSE
```

Imprimez le QR code en **3 cm × 3 cm minimum** et **testez-le avec plusieurs téléphones** avant l’impression.

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
netlify.toml        → réglages Netlify
```

### Voir le site sur son ordinateur avant de le publier

Double-cliquez sur `index.html` : le site s’ouvre dans le navigateur.
(Seul l’envoi du formulaire ne fonctionne qu’une fois le site en ligne sur Netlify.)

---

## Identité visuelle

| Couleur | Code | Usage |
|---|---|---|
| Terracotta | `#B9562F` | Couleur principale, boutons |
| Terracotta texte | `#A84A26` | Petits textes terracotta (contraste AA) |
| Pêche | `#E9A98B` | Couleur secondaire, décors |
| Brun foncé | `#2A1A14` | Textes |
| Crème | `#FBF6F1` | Fond |

Polices : **Poppins** (titres) et **Inter** (texte). Contrastes vérifiés selon les normes d’accessibilité AA.
Les animations sont automatiquement désactivées si l’option « réduire les animations » est activée sur le téléphone.
