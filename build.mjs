import { mkdir, readdir, copyFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';
import { runInNewContext } from 'node:vm';
import { readFile } from 'node:fs/promises';

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, 'dist');
const source = await readFile(join(root, 'script.js'), 'utf8');
const configSource = source.slice(0, source.indexOf('\nconst $ ='));
const config = runInNewContext(`${configSource}\nCONFIG`);
try {
  await access(join(root, config.surprise.ticketImage));
} catch {
  console.error(`Gambar tiket publik belum tersedia: ${config.surprise.ticketImage}. Simpan versi tersensor sebelum build/deploy.`);
  process.exit(1);
}
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'style.css', 'script.js']) await copyFile(join(root, name), join(output, name));
// Only publish website assets; no browser profiles, logs, tests, or documentation.
async function copyAssets(directory, target) {
  await mkdir(target, { recursive: true });
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const from = join(directory, item.name);
    const to = join(target, item.name);
    if (item.isDirectory()) await copyAssets(from, to);
    else if (['.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.mp3', '.wav', '.ogg', '.woff2'].includes(extname(item.name).toLowerCase())) await copyFile(from, to);
  }
}
await copyAssets(join(root, 'assets'), join(output, 'assets'));
console.log('Built static site in dist/. Public ticket image included.');
