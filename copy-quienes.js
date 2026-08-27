const fs = require("fs");
const path = require("path");

const tempDir = "C:\\Users\\migue\\.gemini\\antigravity\\brain\\caf571e3-cc7c-4b79-b630-99bf8507cb3a\\.tempmediaStorage";
const dest = path.join(__dirname, "public", "images", "quienes-somos.png");

const files = fs.readdirSync(tempDir);
const pngFiles = files.filter(f => f.endsWith('.png'));
const latestFile = pngFiles.sort((a, b) => fs.statSync(path.join(tempDir, b)).mtimeMs - fs.statSync(path.join(tempDir, a)).mtimeMs)[0];

fs.copyFileSync(path.join(tempDir, latestFile), dest);
console.log(`✓ Copiado ${latestFile} → public/images/quienes-somos.png`);
