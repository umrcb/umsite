import { vehicles } from '@/data/vehicles';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PremiumHero from '@/components/fleet-template/PremiumHero';
import QuickSpecifications from '@/components/fleet-template/QuickSpecifications';
import VehicleOverview from '@/components/fleet-template/VehicleOverview';
import ImageGallery from '@/components/fleet-template/ImageGallery';
import FeaturesAmenities from '@/components/fleet-template/FeaturesAmenities';
import VehicleSpecifications from '@/components/fleet-template/VehicleSpecifications';
import PerfectFor from '@/components/fleet-template/PerfectFor';
import PopularRoutes from '@/components/fleet-template/PopularRoutes';
import WhyChoose from '@/components/fleet-template/WhyChoose';
import BookingProcess from '@/components/fleet-template/BookingProcess';
import PricingSection from '@/components/fleet-template/PricingSection';
import CustomerReviews from '@/components/fleet-template/CustomerReviews';
import VehicleFAQ from '@/components/fleet-template/VehicleFAQ';
import RelatedVehicles from '@/components/fleet-template/RelatedVehicles';
import RelatedServices from '@/components/fleet-template/RelatedServices';
import FinalCTA from '@/components/fleet-template/FinalCTA';

export async function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  
  if (!vehicle) {
    return {
      title: 'Vehicle Not Found - Umrah Taxi Services',
    };
  }

  return {
    title: `${vehicle.name} Chauffeur Services | Umrah Taxi Services`,
    description: vehicle.seoDescription,
    keywords: vehicle.seoKeywords,
  };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="bg-white">
      <PremiumHero vehicle={vehicle} />
      <QuickSpecifications vehicle={vehicle} />
      <VehicleOverview vehicle={vehicle} />
      <ImageGallery vehicle={vehicle} />
      <FeaturesAmenities vehicle={vehicle} />
      <VehicleSpecifications vehicle={vehicle} />
      <PerfectFor vehicle={vehicle} />
      <PopularRoutes vehicle={vehicle} />
      <WhyChoose vehicle={vehicle} />
      <BookingProcess />
      <PricingSection vehicle={vehicle} />
      <CustomerReviews vehicle={vehicle} />
      <VehicleFAQ vehicle={vehicle} />
      <RelatedVehicles vehicle={vehicle} />
      <RelatedServices />
      <FinalCTA vehicle={vehicle} />
    </main>
  );
}

