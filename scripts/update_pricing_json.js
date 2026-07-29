const fs = require('fs');
let pricingData = JSON.parse(fs.readFileSync('src/data/pricing.json', 'utf8'));
const mpvIndex = pricingData.vehicles.findIndex(v => v.id === 'mpv');
if (mpvIndex !== -1) {
    pricingData.vehicles[mpvIndex].id = 'h1';
    pricingData.vehicles[mpvIndex].name = 'Hyundai H1';
}
pricingData.routes.forEach(route => {
    if (route.customRates.mpv !== undefined) {
        route.customRates.h1 = route.customRates.mpv;
        delete route.customRates.mpv;
    }
});
fs.writeFileSync('src/data/pricing.json', JSON.stringify(pricingData, null, 2));
console.log('Done replacing MPV with H1 in pricing.json');
