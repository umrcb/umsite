const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

const coasterGallery = `gallery: [
      "/fleet/coaster-gallery/coaster_exterior_1785016423400.png",
      "/fleet/coaster-gallery/coaster_luggage_1785016434239.png"
    ],`;

const regex = /(slug:\s*"toyota-coaster"[\s\S]*?)gallery:\s*\[[\s\S]*?\],/g;

content = content.replace(regex, `$1${coasterGallery}`);

fs.writeFileSync(filePath, content);
console.log("Removed flawed road image from Toyota Coaster gallery.");
