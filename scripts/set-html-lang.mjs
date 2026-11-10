// Postbuild: el export estático usa un único root layout con <html lang="es-AR">.
// Las páginas bajo out/en/ son en inglés: se corrige el atributo para Google, lectores
// de pantalla y bots de IA. Corre solo con `npm run build` (hook postbuild de npm).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'out', 'en');
const FROM = '<html lang="es-AR"';
const TO = '<html lang="en"';

function walk(dir) {
  let changed = 0;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      changed += walk(p);
    } else if (name.endsWith('.html')) {
      const html = readFileSync(p, 'utf8');
      if (html.includes(FROM)) {
        writeFileSync(p, html.replace(FROM, TO));
        changed += 1;
      }
    }
  }
  return changed;
}

let count = 0;
try {
  count = walk(ROOT);
} catch (err) {
  if (err.code !== 'ENOENT') throw err;
}
console.log(`set-html-lang: ${count} páginas EN con lang="en"`);
