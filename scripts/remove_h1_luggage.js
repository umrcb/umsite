const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

const h1Gallery = `gallery: [
      "/fleet/h1-gallery/h1_exterior_1785016378702.png",
      "/fleet/h1-gallery/h1_road_1785016397559.png"
    ],`;

const regex = /(slug:\s*"hyundai-h1"[\s\S]*?)gallery:\s*\[[\s\S]*?\],/g;

content = content.replace(regex, `$1${h1Gallery}`);

fs.writeFileSync(filePath, content);
console.log("Removed flawed luggage image from Hyundai H1 gallery.");
