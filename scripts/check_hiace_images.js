const https = require('https');

const urls = [
    "https://images.unsplash.com/photo-1596700078864-77a83d09a06b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1621376829774-783359d48b11?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1635338901248-26f63f5383f5?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1582236829399-52824be812d4?auto=format&fit=crop&q=80&w=1200"
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error: ${e.message} - ${url}`);
    });
});
