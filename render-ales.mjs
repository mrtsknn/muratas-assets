// Renders the ALES in-app logo from the app's icon mark (core-learning/mobile/assets/ales/icon.svg).
// The icon, adaptive foreground and splash PNGs/SVGs are copied as they are from core-learning/mobile/assets/ales.
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const TEAL = "#0B5D66";
const GOLD = "#F5B841";
const WHITE = "#FFFFFF";

// "A" mark with the gold crossbar, drawn in a 1024 box (same paths as icon.svg).
const mark = `
  <path d="M312 764 L512 268 L712 764" fill="none" stroke="${WHITE}" stroke-width="100" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M398 610 H626" fill="none" stroke="${GOLD}" stroke-width="76" stroke-linecap="round"/>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="${TEAL}"/><g transform="scale(0.5)">${mark}</g></svg>`;
const png = new Resvg(svg).render().asPng();
writeFileSync("ales/logo.png", png);
console.log("logo.png", png.length);
