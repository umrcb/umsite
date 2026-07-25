const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The array we want to replace with
const hiaceGallery = `gallery: [
      "/fleet/toyota-hiace-gallery/hiace_2026_exterior_1785014646800.png",
      "/fleet/toyota-hiace-gallery/hiace_2026_interior_1785014666996.png",
      "/fleet/toyota-hiace-gallery/hiace_2026_luggage_1785014689488.png",
      "/fleet/toyota-hiace-gallery/hiace_2026_road_1785014710246.png"
    ],`;

// We need to find the Toyota Hiace entry and replace its gallery only.
// The Toyota Hiace entry looks like:
// name: "Toyota Hiace",
// slug: "toyota-hiace",
// ...
// gallery: [...]

// Let's use a regex that matches the start of the Hiace entry up to its gallery
const regex = /(slug:\s*"toyota-hiace"[\s\S]*?)gallery:\s*\[[\s\S]*?\],/g;

content = content.replace(regex, `$1${hiaceGallery}`);

fs.writeFileSync(filePath, content);
console.log("Updated Toyota Hiace gallery to use local AI generated 2026 images.");
