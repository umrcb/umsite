import { getBaseUrl } from '@/lib/url-utils';
import { Mail, Phone, MapPin } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import { getSettings } from '@/lib/settings-storage';
import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: "Terms and Conditions | Umrah Cabs",
        description: "Terms of service and conditions for booking Umrah transport with Umrah Cabs.",
        canonicalUrl: '/terms',
        noIndex: true,
    });
}

export default async function TermsPage() {
    const settings = await getSettings();
    const phone = settings.contact.phone || '+966 53 481 6935';
    const email = settings.contact.email || 'info@UmrahCabs.com';
    const address = settings.contact.address || 'Al Aziziyah, Makkah, Saudi Arabia';

    return (
        <div className="w-full max-w-[960px] mx-auto px-4 md:px-8 py-12 md:py-24">
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="mb-4">Terms and Conditions</h1>
                    {/* Date removed as requested */}
                </div>

                <div className="bg-white rounded-[20px] p-6 md:p-12 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                    <section className="mb-10 last:mb-0">
                        <h2 className="text-2xl md:text-3xl text-primary mb-6 pb-2 border-b-2 border-primary/10 inline-block">1. Introduction</h2>
                        <p className="text-[#475569] mb-4 text-lg">
                            Welcome to Umrah Cabs. By accessing our website and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully before making a booking.
                        </p>
                    </section>

                    <section className="mb-10 last:mb-0">
                        <h2 className="text-2xl md:text-3xl text-primary mb-6 pb-2 border-b-2 border-primary/10 inline-block">2. Bookings and Payments</h2>
                        <p className="text-[#475569] mb-4 text-lg">
                            All bookings are subject to availability and confirmation. We reserve the right to decline any booking at our discretion.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-[#475569] text-lg">
                            <li><strong>Pricing:</strong> Prices are subject to change without notice, but confirmed bookings will be honored at the agreed rate.</li>
                            <li><strong>Payment:</strong> Full payment or a deposit may be required to secure your reservation, as specified during the booking process.</li>
                            <li><strong>Confirmation:</strong> You will receive a booking confirmation via email or WhatsApp once your reservation is processed.</li>
                        </ul>
                    </section>

                    <section className="mb-10 last:mb-0">
                        <h2 className="text-2xl md:text-3xl text-primary mb-6 pb-2 border-b-2 border-primary/10 inline-block">3. Cancellations and Refunds</h2>
                        <p className="text-[#475569] mb-4 text-lg">
                            We understand that plans can change. Our cancellation policy is designed to be fair to both parties.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-[#475569] text-lg">
                            <li>Cancellations made more than 48 hours before the scheduled pickup time may be eligible for a full refund.</li>
                            <li>Cancellations made within 24-48 hours may incur a cancellation fee.</li>
                            <li>No-shows or cancellations made less than 24 hours in advance are non-refundable.</li>
                        </ul>
                    </section>

                    <section className="mb-10 last:mb-0">
                        <h2 className="text-2xl md:text-3xl text-primary mb-6 pb-2 border-b-2 border-primary/10 inline-block">4. User Responsibilities</h2>
                        <p className="text-[#475569] mb-4 text-lg">
                            As a user of our services, you agree to:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-[#475569] text-lg">
                            <li>Provide accurate and complete information during booking.</li>
                            <li>Be ready at the designated pickup location at the scheduled time.</li>
                            <li>Treat our drivers and vehicles with respect.</li>
                            <li>Comply with all local laws and regulations during your journey.</li>
                        </ul>
                    </section>

                    <section className="mb-10 last:mb-0">
                        <h2 className="text-2xl md:text-3xl text-primary mb-6 pb-2 border-b-2 border-primary/10 inline-block">5. Limitation of Liability</h2>
                        <p className="text-[#475569] mb-4 text-lg">
                            Umrah Cabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                        </p>
                    </section>

                    <section className="mb-10 last:mb-0">
                        <h2 className="text-2xl md:text-3xl text-primary mb-6 pb-2 border-b-2 border-primary/10 inline-block">6. Contact Us</h2>
                        <p className="text-[#475569] mb-6 text-lg">
                            If you have any questions about these Terms and Conditions, please contact us:
                        </p>
                        <div className="bg-[#F8FAFC] p-6 rounded-2xl border-l-4 border-[#C9A227]">
                            <div className="flex items-center gap-4 mb-4 text-[#0F172A] text-lg font-medium" dir="ltr">
                                <MapPin size={24} className="text-[#C9A227] shrink-0" />
                                <span>{address}</span>
                            </div>
                            <div className="flex items-center gap-4 mb-4 text-[#0F172A] text-lg font-medium" dir="ltr">
                                <Phone size={24} className="text-[#C9A227] shrink-0" />
                                <span>{phone}</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#0F172A] text-lg font-medium" dir="ltr">
                                <Mail size={24} className="text-[#C9A227] shrink-0" />
                                <span>{email}</span>
                            </div>
                        </div>
                    </section>
                </div>
            </FadeIn>
        </div>
    );
}
