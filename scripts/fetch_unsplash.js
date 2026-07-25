const https = require('https');

https.get('https://unsplash.com/napi/search/photos?query=leather%20car%20seats&per_page=5', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        try {
            const parsed = JSON.parse(data);
            parsed.results.forEach(img => {
                console.log(`ID: ${img.id}, Alt: ${img.alt_description}`);
            });
        } catch (e) {
            console.error('Parse error', e);
        }
    });
});
