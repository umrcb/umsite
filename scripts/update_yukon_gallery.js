const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

const yukonGallery = `gallery: [
      "/fleet/gmc-yukon-gallery/yukon_2026_exterior_1785015846189.png",
      "/fleet/gmc-yukon-gallery/yukon_2026_luggage_1785015855767.png",
      "/fleet/gmc-yukon-gallery/yukon_2026_road_1785016092056.png"
    ],`;

const regex = /(slug:\s*"gmc-yukon"[\s\S]*?)gallery:\s*\[[\s\S]*?\],/g;

content = content.replace(regex, `$1${yukonGallery}`);

fs.writeFileSync(filePath, content);
console.log("Updated GMC Yukon gallery to use local AI generated 2026 images.");
