const fs = require('fs');
const path = require('path');

// Carpetas y archivos que NO queremos (basura o secretos)
const ignoreList = [
  'node_modules', 
  '.next', 
  '.git', 
  '.vscode', 
  'package-lock.json', 
  'yarn.lock', 
  'exportar.js',
  'README.md',
  '.eslintrc.json',
  'next-env.d.ts'
];

// Extensiones de archivo que SÍ queremos leer
const validExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.md'];

const outputFile = 'codigo_completo.txt';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    
    // Si está en la lista de ignorados, lo saltamos
    if (ignoreList.includes(file)) return;

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      // Verificamos si la extensión es válida
      if (validExtensions.includes(path.extname(file))) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(__dirname);
let content = "ESTE ES EL CÓDIGO FUENTE DE MI PROYECTO NEXT.JS:\n\n";

allFiles.forEach(file => {
  // Leemos el contenido
  const fileContent = fs.readFileSync(file, 'utf8');
  // Obtenemos la ruta relativa para que la IA sepa dónde está el archivo
  const relativePath = path.relative(__dirname, file);
  
  content += `\n==================================================\n`;
  content += `RUTA DEL ARCHIVO: ${relativePath}\n`;
  content += `==================================================\n`;
  content += `${fileContent}\n\n`;
});

fs.writeFileSync(outputFile, content);
console.log(`¡Listo! Todo tu código está en el archivo: ${outputFile}`);