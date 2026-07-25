const https = require('https');

const urls = [
    'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1549687989-b003a27072cc?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1621285814345-9854743ebdf4?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1502877338535-346ce0d165f5?auto=format&fit=crop&q=80&w=1200'
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error: ${e.message} - ${url}`);
    });
});
