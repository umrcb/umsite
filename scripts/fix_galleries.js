const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newGallery = `gallery: [
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200"
    ],`;

// Replace all gallery array blocks.
content = content.replace(/gallery:\s*\[[\s\S]*?\],/g, newGallery);

fs.writeFileSync(filePath, content);
console.log('Successfully updated gallery URLs in vehicles.ts');
