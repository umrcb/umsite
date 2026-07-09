import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/url-utils';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getBaseUrl();

    // 1. Static Routes - High Priority
    const mainRoutes = [
        '',
        '/booking',
        '/services',
        '/fleet',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1.0 : 0.9,
    }));

    // 2. Service & Information Pages - Medium Priority
    const serviceRoutes = [
        '/about',
        '/services/jeddah-airport-transfer',
        '/services/makkah-madinah-taxi',
        '/services/madinah-airport-transfer',
        '/services/intercity-transfer',
        '/services/airport-transfers',
        '/services/taif-city-tour',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 3. Legal Pages - Low Priority
    const legalRoutes = [
        '/privacy',
        '/terms',
        '/cookie-preferences',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    return [
        ...mainRoutes,
        ...serviceRoutes,
        ...legalRoutes,
    ];
}
