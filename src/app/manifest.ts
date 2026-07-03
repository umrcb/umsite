import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Umrah Cabs',
        short_name: 'Umrah Cabs',
        description: 'Book VIP Umrah transport services in Saudi Arabia. Reliable Jeddah airport transfers and Makkah to Madinah taxi.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a', // Navy
        theme_color: '#D4AF37', // Gold
        icons: [
            {
                src: '/umrah-cabs-logo-v2.svg', // Using the v2 logo as the primary icon
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
