const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The new array without the interior image
const hiaceGallery = `gallery: [
      "/fleet/toyota-hiace-gallery/hiace_2026_exterior_1785014646800.png",
      "/fleet/toyota-hiace-gallery/hiace_2026_luggage_1785014689488.png",
      "/fleet/toyota-hiace-gallery/hiace_2026_road_1785014710246.png"
    ],`;

// We use regex to replace the specific Hiace gallery array.
// Because the gallery currently has 4 images, we match the gallery array after the slug.
const regex = /(slug:\s*"toyota-hiace"[\s\S]*?)gallery:\s*\[[\s\S]*?\],/g;

content = content.replace(regex, `$1${hiaceGallery}`);

fs.writeFileSync(filePath, content);
console.log("Removed interior image from Toyota Hiace gallery.");
