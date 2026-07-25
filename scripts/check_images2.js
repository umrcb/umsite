const https = require('https');

const urls = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200', // car interior
    'https://images.unsplash.com/photo-1503376760368-228cd4fee111?auto=format&fit=crop&q=80&w=1200', // another interior
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200', // mercedes interior
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200', // car on road
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200', // classic car
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200', // black bmw
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error: ${e.message} - ${url}`);
    });
});
