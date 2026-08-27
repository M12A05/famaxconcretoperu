// Script para copiar imágenes a public/
// Ejecutar: node copy-images.js
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "ImagenesInicio");
const dest = path.join(__dirname, "public", "images");

if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

const files = [
  ["FOTO PORTADA.png", "hero.png"],
  ["POR QUE ELEGIR A FAMAX CONCRETO PERU.png", "por-que-famax.png"],
  ["imagen-Concreto Premezclado.png", "concreto-premezclado.png"],
  ["imagen-Adoquines de Concreto.png", "adoquines.png"],
  ["imagen-SERVICIOS INTEGRALES.png", "servicios-integrales.png"],
];

files.forEach(([original, destName]) => {
  const srcFile = path.join(src, original);
  const destFile = path.join(dest, destName);
  fs.copyFileSync(srcFile, destFile);
  console.log(`✓ ${original} → public/images/${destName}`);
});

console.log("\n✅ Todas las imágenes copiadas a public/images/");
