const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  {
    slug: 'hyundai-staria',
    gallery: `gallery: [
      "/fleet/staria-gallery/staria_exterior_1785016336596.png",
      "/fleet/staria-gallery/staria_luggage_1785016345212.png",
      "/fleet/staria-gallery/staria_road_1785016354724.png"
    ],`
  },
  {
    slug: 'hyundai-h1',
    gallery: `gallery: [
      "/fleet/h1-gallery/h1_exterior_1785016378702.png",
      "/fleet/h1-gallery/h1_luggage_1785016387624.png",
      "/fleet/h1-gallery/h1_road_1785016397559.png"
    ],`
  },
  {
    slug: 'toyota-coaster',
    gallery: `gallery: [
      "/fleet/coaster-gallery/coaster_exterior_1785016423400.png",
      "/fleet/coaster-gallery/coaster_luggage_1785016434239.png",
      "/fleet/coaster-gallery/coaster_road_1785016445139.png"
    ],`
  },
  {
    slug: 'toyota-camry',
    gallery: `gallery: [
      "/fleet/camry-gallery/camry_exterior_1785016469336.png",
      "/fleet/camry-gallery/camry_luggage_1785016477899.png",
      "/fleet/camry-gallery/camry_road_1785016486801.png"
    ],`
  }
];

updates.forEach(update => {
  const regex = new RegExp(`(slug:\\s*"${update.slug}"[\\s\\S]*?)gallery:\\s*\\[[\\s\\S]*?\\],`, 'g');
  content = content.replace(regex, `$1${update.gallery}`);
});

fs.writeFileSync(filePath, content);
console.log("Successfully updated all remaining vehicle galleries in vehicles.ts");
