import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: "Cookie Preferences | Umrah Cabs",
        description: "Manage your cookie preferences for UmrahCabs.com.",
        canonicalUrl: '/cookie-preferences',
        noIndex: true,
    });
}

export default function CookiePreferencesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
