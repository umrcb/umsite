const Jimp = require('jimp');

async function removeWhiteBackground() {
    try {
        const image = await Jimp.read('public/images/logo.png');
        const targetColor = { r: 255, g: 255, b: 255 }; // White
        const colorDistance = (c1, c2) => {
            return Math.sqrt(Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2));
        };
        const threshold = 50; // Tolerance

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const current = {
                r: this.bitmap.data[idx + 0],
                g: this.bitmap.data[idx + 1],
                b: this.bitmap.data[idx + 2],
            };
            if (colorDistance(current, targetColor) <= threshold) {
                this.bitmap.data[idx + 3] = 0; // Make transparent
            }
        });

        await image.writeAsync('public/images/logo.png');
        console.log('Background removed successfully!');
    } catch (err) {
        console.error(err);
    }
}

removeWhiteBackground();
