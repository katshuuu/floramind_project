const fs = require('fs');
const path = require('path');

// Исправляем путь — теперь ищем src внутри frontend
const srcDir = './src';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  console.log(`Checking: ${filePath}`);
  
  // Замена для JS/JSX файлов
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    const jsxPattern = /src=["']\/images\/([^"']+)["']/g;
    if (jsxPattern.test(content)) {
      content = content.replace(
        /src=["']\/images\/([^"']+)["']/g,
        'src={`${process.env.PUBLIC_URL}/images/$1`}'
      );
      modified = true;
    }
    
    // Замена для href
    const hrefPattern = /href=["']\/images\/([^"']+)["']/g;
    if (hrefPattern.test(content)) {
      content = content.replace(
        /href=["']\/images\/([^"']+)["']/g,
        'href={`${process.env.PUBLIC_URL}/images/$1`}'
      );
      modified = true;
    }
  }
  
  // Замена для CSS файлов — используем относительные пути
  if (filePath.endsWith('.css')) {
    const cssPattern = /url\(['"]?\/images\/([^'"\)]+)['"]?\)/g;
    if (cssPattern.test(content)) {
      content = content.replace(
        /url\(['"]?\/images\/([^'"\)]+)['"]?\)/g,
        'url("../images/$1")'
      );
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (
        filePath.endsWith('.js') || 
        filePath.endsWith('.jsx') || 
        filePath.endsWith('.css')
      ) {
        processFile(filePath);
      }
    });
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }
}

console.log('🔍 Starting path fixes in frontend/src...');
console.log('Current directory:', process.cwd());

if (!fs.existsSync(srcDir)) {
  console.error(`❌ Error: ${srcDir} directory not found!`);
  console.log('Please make sure you are in the frontend directory and it contains a src folder.');
  console.log('Current contents:');
  const files = fs.readdirSync('.');
  files.forEach(file => console.log(`  - ${file}`));
  process.exit(1);
}

walkDir(srcDir);
console.log('✅ Done!');