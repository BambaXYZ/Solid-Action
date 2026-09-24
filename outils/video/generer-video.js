// Génère les images de la vidéo « Salam vous parle » à partir de salam-vous-parle.html.
// Usage : node generer-video.js <enveloppe-voix.json> <dossier-images> [largeur=720]
// Puis assemblage avec ffmpeg (voir README, section vidéo).
const path = require('path');
const fs = require('fs');
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
(async () => {
  const [envPath, outDir, width = '720'] = process.argv.slice(2);
  const FPS = 25, DUREE = 60.1;
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: +width / 1080 });
  await p.goto('file://' + path.join(__dirname, 'salam-vous-parle.html'));
  const icones = fs.readFileSync(path.join(__dirname, '../../js/icones.js'), 'utf8');
  await p.evaluate(({ env, icones }) => {
    ENV = env;
    const ICONES = new Function(icones + ';return ICONES;')();
    document.getElementById('wa').innerHTML = ICONES.whatsapp[1];
  }, { env: JSON.parse(fs.readFileSync(envPath, 'utf8')), icones });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  const total = Math.round(DUREE * FPS);
  for (let i = 0; i < total; i++) {
    await p.evaluate(t => draw(t), i / FPS);
    await p.screenshot({ path: path.join(outDir, String(i).padStart(5, '0') + '.jpg'), type: 'jpeg', quality: 90 });
    if (i % 250 === 0) console.log(i + '/' + total);
  }
  await b.close();
})();
