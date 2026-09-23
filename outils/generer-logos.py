#!/usr/bin/env python3
"""Génère toutes les versions du logo Solid'Action en SVG (texte vectorisé).

Usage : python3 outils/generer-logos.py <dossier-polices>
Le dossier doit contenir poppins-latin-700-normal.woff2 et poppins-latin-600-normal.woff2
(paquet npm @fontsource/poppins). Les fichiers sont écrits dans images/logo/.
"""
import math
import os
import sys

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "images", "logo")
FONTS = sys.argv[1] if len(sys.argv) > 1 else "fonts"

PALETTES = {
    # version standard, sur fond clair
    "clair-fond": dict(stem="#B9562F", leaf="#EDB195", leafline="#B9562F", cap="#2A1A14",
                       tassel="#B9562F", rings="#B9562F", name="#2A1A14", slogan="#A84A26"),
    # version claire, pour fond sombre (brun ou terracotta)
    "fond-sombre": dict(stem="#F4CDB9", leaf="#E9A98B", leafline="#F7DCCD", cap="#FBF6F1",
                        tassel="#E9A98B", rings="#F4CDB9", name="#FBF6F1", slogan="#F0B89C"),
}
# favicon : symbole crème sur carré terracotta
FAVICON = dict(stem="#FBF6F1", leaf="#F6CDB8", leafline="#FBF6F1", cap="#FBF6F1",
               tassel="#F3C2A9", rings="#FBF6F1")


def f(v):
    return f"{v:.2f}".rstrip("0").rstrip(".")


def pt(theta, r, cx=100, cy=100):
    a = math.radians(theta)
    return cx + r * math.cos(a), cy + r * math.sin(a)


def leaf_path(length, width):
    L, W = length, width
    return (f"M0 0C{f(L*.28)} {f(-W)} {f(L*.72)} {f(-W*.92)} {f(L)} 0"
            f"C{f(L*.72)} {f(W*.92)} {f(L*.28)} {f(W)} 0 0Z")


def symbol(p, pairs=7, sw=1.0, uid="s", leafscale=1.0):
    """Symbole : couronne de lauriers, toque, anneaux entrelacés (viewBox 0 0 200 200)."""
    R = 76
    out = []
    # --- branche gauche (la droite est son miroir exact) ---
    t0, t1 = 104, 250
    x0, y0 = pt(t0, R)
    x1, y1 = pt(t1, R)
    branch = [f'<path d="M{f(x0)} {f(y0)}A{R} {R} 0 0 1 {f(x1)} {f(y1)}" fill="none" '
              f'stroke="{p["stem"]}" stroke-width="{f(3.4*sw)}" stroke-linecap="round"/>']
    leaves = []
    step = (232 - 118) / (pairs - 1)
    for i in range(pairs):
        th = 118 + i * step
        L = (21 - 4 * i / (pairs - 1)) * leafscale
        W = L * 0.24
        tangent = th + 90  # sens de croissance (vers le haut)
        for side, tilt, dth in (("out", -40, 0), ("in", 40, 5)):
            x, y = pt(th + dth, R)
            leaves.append((x, y, tangent + tilt, L, W))
    # feuille terminale au sommet
    x, y = pt(t1, R)
    leaves.append((x, y, t1 + 90 - 8, 19 * leafscale, 19 * leafscale * .24))
    for x, y, ang, L, W in leaves:
        branch.append(f'<path d="{leaf_path(L, W)}" transform="translate({f(x)} {f(y)}) rotate({f(ang)})" '
                      f'fill="{p["leaf"]}" stroke="{p["leafline"]}" stroke-width="{f(1.5*sw)}" '
                      f'stroke-linejoin="round"/>')
    out.append(f'<g id="{uid}-b">{"".join(branch)}</g>')
    out.append(f'<use href="#{uid}-b" transform="matrix(-1 0 0 1 200 0)"/>')

    # --- anneaux entrelacés ---
    r, cy, dx, rw = 11.5, 176.5, 9.5, 4.2 * sw
    ax, bx = 100 - dx, 100 + dx

    def arc(cx, a0, a1):
        (sx, sy), (ex, ey) = pt(a0, r, cx, cy), pt(a1, r, cx, cy)
        return f"M{f(sx)} {f(sy)}A{r} {r} 0 0 1 {f(ex)} {f(ey)}"

    h = math.degrees(math.acos(dx / r))  # angle des intersections
    # A passe au-dessus en haut, B passe au-dessus en bas
    over_a = arc(ax, -h - 22, -h + 22)
    over_b = arc(bx, 180 - h - 22, 180 - h + 22)
    gap = rw + 3.2
    out.append(f'<mask id="{uid}-ma" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">'
               f'<rect width="200" height="200" fill="#fff"/>'
               f'<path d="{over_b}" stroke="#000" stroke-width="{f(gap)}" fill="none"/></mask>')
    out.append(f'<mask id="{uid}-mb" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">'
               f'<rect width="200" height="200" fill="#fff"/>'
               f'<path d="{over_a}" stroke="#000" stroke-width="{f(gap)}" fill="none"/></mask>')
    out.append(f'<g fill="none" stroke="{p["rings"]}" stroke-width="{f(rw)}">'
               f'<circle cx="{f(ax)}" cy="{cy}" r="{r}" mask="url(#{uid}-ma)"/>'
               f'<circle cx="{f(bx)}" cy="{cy}" r="{r}" mask="url(#{uid}-mb)"/></g>')

    # --- toque de diplômé ---
    top, right, bottom, left = (100, 64), (142, 81), (100, 97.5), (58, 81)
    board = f"M{top[0]} {top[1]}L{right[0]} {right[1]}L{bottom[0]} {bottom[1]}L{left[0]} {left[1]}Z"
    # corps : suit le bord inférieur du plateau, décalé de 4.5 pour un fin liseré transparent
    off = 4.8
    k = (bottom[1] - left[1]) / (bottom[0] - left[0])  # pente du bord inférieur
    yl = left[1] + k * (77 - left[0]) + off
    body = (f"M77 {f(yl)}L100 {f(bottom[1] + off)}L123 {f(yl)}V111"
            f"C116 116.5 108.5 119 100 119C91.5 119 84 116.5 77 111Z")
    out.append(f'<g fill="{p["cap"]}" stroke="{p["cap"]}" stroke-linejoin="round" stroke-width="{f(2*sw)}">'
               f'<path d="{board}"/><path d="{body}"/></g>')
    out.append(f'<g stroke="{p["tassel"]}" stroke-width="{f(2.2*sw)}" stroke-linecap="round" fill="none">'
               f'<path d="M100 82L130 88.5V106"/></g>'
               f'<circle cx="100" cy="82" r="{f(3.2*sw)}" fill="{p["tassel"]}"/>'
               f'<path d="M127.2 105.5h5.6l1.6 11.5h-8.8z" fill="{p["tassel"]}" '
               f'stroke="{p["tassel"]}" stroke-width="1.2" stroke-linejoin="round"/>')
    return "".join(out)


class Font:
    def __init__(self, path):
        self.tt = TTFont(path)
        self.gs = self.tt.getGlyphSet()
        self.cmap = self.tt.getBestCmap()
        self.upm = self.tt["head"].unitsPerEm
        self.kern = {}
        # paires de crénage simples (GPOS format 1) si présentes
        try:
            for lookup in self.tt["GPOS"].table.LookupList.Lookup:
                for st in lookup.SubTable:
                    st = getattr(st, "ExtSubTable", st)
                    if getattr(st, "Format", None) == 1 and hasattr(st, "PairSet"):
                        cov = st.Coverage.glyphs
                        for g1, ps in zip(cov, st.PairSet):
                            for pvr in ps.PairValueRecord:
                                v = getattr(pvr.Value1, "XAdvance", 0) if pvr.Value1 else 0
                                if v:
                                    self.kern[(g1, pvr.SecondGlyph)] = v
        except KeyError:
            pass

    def path(self, text, size, x, y, tracking=0.0, anchor="start"):
        s = size / self.upm
        names = [self.cmap[ord(c)] for c in text]
        adv = []
        for i, n in enumerate(names):
            a = self.gs[n].width
            if i + 1 < len(names):
                a += self.kern.get((n, names[i + 1]), 0)
            adv.append(a * s + (tracking * size if i + 1 < len(names) else 0))
        width = sum(adv)
        if anchor == "middle":
            x -= width / 2
        pen = SVGPathPen(self.gs, ntos=lambda v: f"{v:.1f}".rstrip("0").rstrip("."))
        cx = x
        for n, a in zip(names, adv):
            self.gs[n].draw(TransformPen(pen, (s, 0, 0, -s, cx, y)))
            cx += a
        return pen.getCommands(), width


def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {f(w)} {f(h)}" role="img" '
            f'aria-label="{title}"><title>{title}</title>{body}</svg>\n')


def main():
    os.makedirs(OUT, exist_ok=True)
    bold = Font(os.path.join(FONTS, "poppins-latin-700-normal.woff2"))
    semi = Font(os.path.join(FONTS, "poppins-latin-600-normal.woff2"))
    NAME, SLOGAN = "Solid’Action", "LA SOLIDARITÉ DANS L’ACTION"
    T = "Solid’Action — La solidarité dans l’action"

    for key, p in PALETTES.items():
        suffix = "" if key == "clair-fond" else "-clair"
        uid = "s" if not suffix else "c"

        # 1. symbole seul
        open(os.path.join(OUT, f"logo-symbole{suffix}.svg"), "w").write(
            svg(200, 200, symbol(p, uid=uid + "y"), "Solid’Action"))

        # 2. logo complet (vertical)
        W = 560
        name_d, nw = bold.path(NAME, 84, W / 2, 318, tracking=-0.01, anchor="middle")
        slog_d, sw_ = semi.path(SLOGAN, 21, W / 2, 364, tracking=0.24, anchor="middle")
        body = (f'<g transform="translate({f(W/2-110)} 0) scale(1.1)">{symbol(p, uid=uid + "v")}</g>'
                f'<path d="{name_d}" fill="{p["name"]}"/><path d="{slog_d}" fill="{p["slogan"]}"/>')
        open(os.path.join(OUT, f"logo-complet{suffix}.svg"), "w").write(svg(W, 380, body, T))

        # 3. logo horizontal (symbole à gauche du texte)
        name_d, nw = bold.path(NAME, 62, 146, 86, tracking=-0.01)
        slog_d, sw_ = semi.path(SLOGAN, 14.2, 149, 116, tracking=0.2)
        width = 146 + max(nw, sw_ + 3) + 6
        body = (f'<g transform="translate(0 4) scale(.66)">{symbol(p, uid=uid + "h")}</g>'
                f'<path d="{name_d}" fill="{p["name"]}"/><path d="{slog_d}" fill="{p["slogan"]}"/>')
        open(os.path.join(OUT, f"logo-horizontal{suffix}.svg"), "w").write(svg(width, 140, body, T))

        # 3b. horizontal compact (sans slogan) : pour le menu, lisible à petite taille
        name_d, nw = bold.path(NAME, 60, 128, 81, tracking=-0.01)
        body = (f'<g transform="translate(0 2) scale(.6)">{symbol(p, pairs=6, sw=1.2, uid=uid + "m")}</g>'
                f'<path d="{name_d}" fill="{p["name"]}"/>')
        open(os.path.join(OUT, f"logo-menu{suffix}.svg"), "w").write(svg(128 + nw + 4, 124, body, T))

    # 4. favicon : symbole simplifié (moins de feuilles, traits plus épais) sur carré terracotta
    body = (f'<rect width="200" height="200" rx="44" fill="#B9562F"/>'
            f'<g transform="translate(6 2) scale(.94)">{symbol(FAVICON, pairs=4, sw=2.2, uid="f", leafscale=1.35)}</g>')
    open(os.path.join(ROOT, "favicon.svg"), "w").write(svg(200, 200, body, "Solid’Action"))
    print("Logos générés dans", OUT)


if __name__ == "__main__":
    main()
