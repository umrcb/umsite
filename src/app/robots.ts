import { MetadataRoute } from 'next';

// Use the same env var as getBaseUrl() so this stays in sync across environments.
// Falls back to the canonical production domain as a safety net.
const CANONICAL_URL =
    process.env.NEXT_PUBLIC_APP_URL ??
    `https://${process.env.VERCEL_URL}` ??
    'https://umrahcabs.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ── General crawlers ───────────────────────────────────────────────
            // Allow all public content; block admin, API, and internal routes.
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',    // Admin dashboard — never index
                    '/api/',      // REST API endpoints
                    '/_next/',    // Next.js internal assets
                    '/private/',  // Any private staging content
                ],
            },
            // ── Googlebot — explicit allow for key indexable sections ──────────
            {
                userAgent: 'Googlebot',
                allow: [
                    '/',
                    '/services/',
                    '/fleet/',
                    '/pricing',
                    '/booking',
                    '/about',
                    '/contact',
                    '/images/',
                    '/manifest.webmanifest',
                ],
                disallow: [
                    '/admin/',
                    '/api/',
                ],
            },
        ],
        sitemap: `${CANONICAL_URL}/sitemap.xml`,
        host: CANONICAL_URL,
    };
}
