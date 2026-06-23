import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import AdmZip from 'adm-zip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const zip = new AdmZip();

// Output directory is public/ to make it statically accessible
const outputDir = path.join(__dirname, 'public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'vvardrobe-app.zip');

// Items to ignore to keep the zip archive clean and light
const ignoreList = [
  'node_modules',
  '.git',
  'dist',
  'vvardrobe-app.zip',
  'package-lock.json',
  '.env',
  '.env.local'
];

function addRecursively(currentPath, zipPath = '') {
  const items = fs.readdirSync(currentPath);

  for (const item of items) {
    if (ignoreList.includes(item)) continue;
    if (zipPath === 'public' && item === 'vvardrobe-app.zip') continue;

    const fullPath = path.join(currentPath, item);
    const itemZipPath = zipPath ? `${zipPath}/${item}` : item;
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // We recurse into directories
      addRecursively(fullPath, itemZipPath);
    } else {
      // Read file contents and add directly to zip with relative path structure
      const fileBuffer = fs.readFileSync(fullPath);
      zip.addFile(itemZipPath, fileBuffer);
    }
  }
}

console.log('Building full-application export archive...');
addRecursively(__dirname);

zip.writeZip(outputPath);
console.log(`ZIP successfully created at: ${outputPath}`);
