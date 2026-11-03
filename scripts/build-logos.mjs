// aky: regenerates public/logos from devicon, recolored into the site palette.
// aky: each logo's light and dark areas map onto a theme color ramp, so its details survive.
// aky: run with node scripts/build-logos.mjs
import { createRequire } from "node:module";
import { mkdirSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const icons = join(dirname(require.resolve("devicon/package.json")), "icons");
const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "logos");

const LOGOS = {
  html: "html5", css: "css3", javascript: "javascript", python: "python", java: "java", cpp: "cplusplus", c: "c",
  csharp: "csharp", php: "php", typescript: "typescript", go: "go", rust: "rust", kotlin: "kotlin", swift: "swift",
  r: "r", bash: "bash", xml: "xml", react: "react", vue: "vuejs", angular: "angular", jquery: "jquery", nodejs: "nodejs",
  django: "django", bootstrap: "bootstrap", tailwind: "tailwindcss", sass: "sass", mysql: "mysql", postgresql: "postgresql",
  mongodb: "mongodb", numpy: "numpy", pandas: "pandas", git: "git",
};

// aky: light surfaces get green with gold highlights, the dark bar gets chalk tones.
const RAMPS = {
  light: { stops: [[22, 46, 32], [44, 110, 72], [201, 162, 62]], flat: 0.42, dir: "" },
  dark: { stops: [[185, 143, 46], [242, 208, 107], [255, 246, 216]], flat: 0.5, dir: "chalk" },
};

const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const ramp = (stops, t) => (t < 0.5 ? mix(stops[0], stops[1], t * 2) : mix(stops[1], stops[2], (t - 0.5) * 2));
const lum = (d, i) => (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255;

function source(name) {
  for (const variant of ["original", "plain", "original-wordmark", "plain-wordmark"]) {
    const file = join(icons, name, `${name}-${variant}.svg`);
    if (existsSync(file)) return file;
  }
  throw new Error(`no logo for ${name}`);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, "chalk"), { recursive: true });

for (const [slug, name] of Object.entries(LOGOS)) {
  const { data, info } = await sharp(source(name), { density: 600 })
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const values = [];
  for (let i = 0; i < data.length; i += 4) if (data[i + 3] > 128) values.push(lum(data, i));
  values.sort((a, b) => a - b);
  const low = values[Math.floor(values.length * 0.02)];
  const high = values[Math.floor(values.length * 0.98)];
  const flat = high - low < 0.12;

  for (const { stops, flat: flatTone, dir } of Object.values(RAMPS)) {
    const pixels = Buffer.from(data);
    for (let i = 0; i < pixels.length; i += 4) {
      const t = flat ? flatTone : Math.min(1, Math.max(0, (lum(data, i) - low) / (high - low)));
      [pixels[i], pixels[i + 1], pixels[i + 2]] = ramp(stops, t);
    }
    await sharp(pixels, { raw: { width: info.width, height: info.height, channels: 4 } })
      .png({ compressionLevel: 9 })
      .toFile(join(out, dir, `${slug}.png`));
  }
}
console.log(`wrote ${Object.keys(LOGOS).length * 2} logos`);
