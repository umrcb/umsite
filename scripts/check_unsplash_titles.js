const https = require('https');

const ids = [
    '1549399542-7e3f8b79c341',
    '1552519507-da3b142c6e3d',
    '1503376760368-228cd4fee111',
    '1616789916428-7690623a9d5e',
    '1544829099-b9a0c62fad8d',
    '1546614042-731b6e4b47dc',
    '1580273916550-e323be2ae537',
    '1617478061413-568eb2a2656f',
    '1617469767053-d3b523a0b982',
    '1494976388531-d1058494cdd8'
];

ids.forEach(id => {
    https.get(`https://unsplash.com/photos/${id}`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const titleMatch = data.match(/<title>(.*?)<\/title>/);
            if (titleMatch) {
                console.log(`ID: ${id} -> Title: ${titleMatch[1]}`);
            } else {
                console.log(`ID: ${id} -> No title found or 404`);
            }
        });
    }).on('error', (e) => {
        console.error(`Error: ${e.message} - ${id}`);
    });
});
