import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '../src');

const nums = [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(tsx|ts|css)$/.test(name)) {
      let c = fs.readFileSync(p, 'utf8');
      const orig = c;
      for (const n of nums) {
        c = c.split(`blue-${n}`).join(`brand-${n}`);
      }
      if (c !== orig) {
        fs.writeFileSync(p, c);
        console.log('updated', path.relative(path.join(__dirname, '..'), p));
      }
    }
  }
}

walk(src);
