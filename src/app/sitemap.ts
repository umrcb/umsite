import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/url-utils';

export const revalidate = 3600;

// ─────────────────────────────────────────────────────────────────────────────
// Main sitemap generator
// ─────────────────────────────────────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getBaseUrl();

    // ── 1. Core / High-traffic pages ─────────────────────────────────────────
    const coreRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/booking`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/fleet`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
    ];

    // ── 2. Individual service pages (static — verified against /app filesystem) ─
    // Slugs must exactly match the folder names under app/(public)/services/
    const serviceRoutes: MetadataRoute.Sitemap = [
        'jeddah-airport-transfer',
        'makkah-madinah-taxi',
        'madinah-airport-transfer',
        'intercity-transfer',
        'airport-transfers',
        'hotel-transfers',
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // ── 3. Legal / low-priority pages ────────────────────────────────────────
    const legalRoutes: MetadataRoute.Sitemap = [
        '/privacy',
        '/terms',
        '/cookie-preferences',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }));

    return [
        ...coreRoutes,
        ...serviceRoutes,
        ...legalRoutes,
    ];
}
