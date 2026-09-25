// Renders the İngilizce A1 brand assets (icon, adaptive foreground, logo, splash) from SVG to PNG.
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const BLUE = "#2563EB";
const ORANGE = "#FE9519";
const WHITE = "#FFFFFF";

// Speech bubble with "A1" — the mark, drawn in a 1024 box.
const mark = (fg, accent) => `
  <path d="M232 256h560a96 96 0 0 1 96 96v272a96 96 0 0 1-96 96H480l-152 120v-120h-96a96 96 0 0 1-96-96V352a96 96 0 0 1 96-96z" fill="${fg}"/>
  <text x="512" y="578" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="240" fill="${accent === "text" ? BLUE : BLUE}">A1</text>
  <circle cx="800" cy="248" r="72" fill="${ORANGE}"/>`;

const svgs = {
  "icon-1024.png": [1024, 1024, `<rect width="1024" height="1024" fill="${BLUE}"/>${mark(WHITE)}`],
  "adaptive-foreground.png": [1024, 1024, `<g transform="translate(205 205) scale(0.6)">${mark(WHITE)}</g>`],
  "logo.png": [512, 512, `<rect width="512" height="512" rx="112" fill="${BLUE}"/><g transform="scale(0.5)">${mark(WHITE)}</g>`],
  "splash.png": [1242, 2436, `<rect width="1242" height="2436" fill="${BLUE}"/><g transform="translate(365 960) scale(0.5)">${mark(WHITE)}</g>
    <text x="621" y="1560" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="84" fill="${WHITE}">İngilizce A1</text>`],
};

for (const [name, [w, h, body]] of Object.entries(svgs)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
  const png = new Resvg(svg, { font: { loadSystemFonts: true } }).render().asPng();
  writeFileSync(`ingilizce-a1/${name}`, png);
  console.log(name, png.length);
}
