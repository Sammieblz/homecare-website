/**
 * One-off: sample dominant colors from logo PNGs for brand.css
 * Run: node scripts/sample-brand-colors.mjs
 */
import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/Images');

function rgbToHex(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map((x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, '0'))
      .join('')
  );
}

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function analyzeFile(filePath) {
  const buf = fs.readFileSync(filePath);
  const png = PNG.sync.read(buf);
  const { width, height, data } = png;
  const buckets = new Map();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (width * y + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 128) continue;
      // Quantize to reduce noise
      const qr = Math.round(r / 6) * 6;
      const qg = Math.round(g / 6) * 6;
      const qb = Math.round(b / 6) * 6;
      const key = `${qr},${qg},${qb}`;
      buckets.set(key, (buckets.get(key) || 0) + 1);
    }
  }

  const sorted = [...buckets.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 40)
    .map(([key, count]) => {
      const [r, g, b] = key.split(',').map(Number);
      return { r, g, b, count, hex: rgbToHex(r, g, b), lum: luminance(r, g, b) };
    });

  return sorted;
}

const files = ['oghosa-logo1.png', 'oghosa-logo2.png', 'ogosa-logo-nobg.png'];
const all = [];

for (const f of files) {
  const p = path.join(imagesDir, f);
  if (!fs.existsSync(p)) {
    console.warn('missing', p);
    continue;
  }
  const top = analyzeFile(p);
  console.log('\n===', f, '===');
  top.slice(0, 12).forEach((c, i) => console.log(i + 1, c.hex, 'lum', c.lum.toFixed(1), 'n', c.count));
  all.push(...top);
}

// Merge: pick chrome = darkest frequent blue among top buckets from logos with bg
// pick accent = highest pop among blues with lum 80-200 and b > r,g

const blues = all.filter((c) => c.b > c.r + 15 && c.b > c.g + 5 && c.lum > 35 && c.lum < 220);
blues.sort((a, b) => b.count - a.count);

const darkBlues = all.filter((c) => c.lum < 90 && c.b > 50);
darkBlues.sort((a, b) => b.count - a.count);

const accentCandidates = all.filter((c) => c.lum > 100 && c.lum < 200 && c.b > c.r && c.b > c.g);
accentCandidates.sort((a, b) => b.count - a.count);

const chrome = darkBlues[0] || { hex: '#1a3352', r: 26, g: 51, b: 82 };
const accent = accentCandidates[0] || blues.find((c) => c.lum > 120) || { hex: '#4f8fd9', r: 79, g: 143, b: 217 };

console.log('\n--- Suggested ---');
console.log('chrome (dark):', chrome.hex, chrome);
console.log('accent (bright):', accent.hex, accent);
