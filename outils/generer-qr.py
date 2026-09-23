#!/usr/bin/env python3
"""Génère le QR code du site pour les affiches.

Usage : python3 outils/generer-qr.py https://adresse-du-site.fr
(nécessite : pip install qrcode pillow)
Fichiers créés dans qr-code/ : qr-code.svg (impression, qualité parfaite) et qr-code.png (2000 px).
"""
import os
import sys

import qrcode
from PIL import Image, ImageDraw

URL = sys.argv[1] if len(sys.argv) > 1 else "https://bambaxyz.github.io/Solid-Action/"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "qr-code")
BROWN, CREAM, TERRA = "#2A1A14", "#FFFFFF", "#B9562F"

qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, border=4)
qr.add_data(URL)
qr.make(fit=True)
m = qr.get_matrix()
n = len(m)

# zone centrale réservée au symbole (≈ 22 % de la largeur, la correction H le permet)
logo = max(7, round(n * 0.22)) | 1
lo = (n - logo) // 2
hi = lo + logo


def in_logo(x, y):
    return lo <= x < hi and lo <= y < hi


os.makedirs(OUT, exist_ok=True)

# --- SVG ---
rects = "".join(f'<rect x="{x}" y="{y}" width="1" height="1"/>'
                for y in range(n) for x in range(n) if m[y][x] and not in_logo(x, y))
symbol = open(os.path.join(ROOT, "images", "logo", "logo-symbole.svg")).read()
symbol = symbol.split(">", 1)[1].rsplit("</svg>", 1)[0]  # contenu du symbole
pad = 0.6
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges">'
       f'<rect width="{n}" height="{n}" fill="{CREAM}"/><g fill="{BROWN}">{rects}</g>'
       f'<rect x="{lo + .3}" y="{lo + .3}" width="{logo - .6}" height="{logo - .6}" rx="1.4" fill="#FBF6F1" '
       f'stroke="{TERRA}" stroke-width=".35" shape-rendering="geometricPrecision"/>'
       f'<svg x="{lo + pad}" y="{lo + pad}" width="{logo - 2 * pad}" height="{logo - 2 * pad}" viewBox="0 0 200 200" '
       f'shape-rendering="geometricPrecision">{symbol}</svg></svg>\n')
open(os.path.join(OUT, "qr-code.svg"), "w").write(svg)

# --- PNG (le symbole est l'icône images/logo/icon-512.png) ---
scale = 2000 // n
img = Image.new("RGB", (n * scale, n * scale), CREAM)
d = ImageDraw.Draw(img)
for y in range(n):
    for x in range(n):
        if m[y][x] and not in_logo(x, y):
            d.rectangle([x * scale, y * scale, (x + 1) * scale - 1, (y + 1) * scale - 1], fill=BROWN)
icon = Image.open(os.path.join(ROOT, "images", "logo", "icon-512.png")).convert("RGBA")
size = int((logo - .6) * scale)
icon = icon.resize((size, size), Image.LANCZOS)
img.paste(icon, (int((lo + .3) * scale), int((lo + .3) * scale)), icon)
img.save(os.path.join(OUT, "qr-code.png"))
print(f"QR code généré pour {URL} ({n}x{n} modules) dans {OUT}")
