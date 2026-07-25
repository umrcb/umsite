export interface VehicleRoute {
  name: string;
  time: string;
  distance: string;
  recommended: boolean;
}

export interface VehiclePricing {
  startingPrice: number;
  currency: string;
  included: string[];
}

export interface VehicleFAQ {
  question: string;
  answer: string;
}

export interface VehicleTestimonial {
  name: string;
  country: string;
  rating: number;
  route: string;
  image?: string;
  text: string;
}

export interface VehicleSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface VehicleData {
  name: string;
  slug: string;
  badge: string;
  shortDescription: string;
  heroImage: string;
  gallery: string[];
  passengers: number;
  luggage: number;
  transmission: string;
  fuel: string;
  engine: string;
  doors: number;
  interior: string;
  airConditioning: string;
  luxuryLevel: string;
  amenities: string[];
  idealFor: string[];
  routes: VehicleRoute[];
  whyChoose: { title: string; description: string; icon: string }[];
  pricing: VehiclePricing;
  faqs: VehicleFAQ[];
  seo: VehicleSEO;
  testimonials: VehicleTestimonial[];
  relatedVehicles: string[]; // slugs
}

export const vehicles: VehicleData[] = [
  {
    name: "Toyota Hiace",
    slug: "toyota-hiace",
    badge: "Premium Group Transport",
    shortDescription: "11 Passenger Luxury Van",
    heroImage: "/fleet/cars/toyota-hiace-v3.png",
    gallery: [
      "/fleet/toyota-hiace-gallery/hiace_2026_exterior_1785014646800.png",
      "/fleet/toyota-hiace-gallery/hiace_2026_luggage_1785014689488.png",
      "/fleet/toyota-hiace-gallery/hiace_2026_road_1785014710246.png"
    ],
    passengers: 11,
    luggage: 11,
    transmission: "Automatic",
    fuel: "Diesel/Petrol",
    engine: "2.8L / 3.5L",
    doors: 4,
    interior: "Premium Cloth/Leatherette",
    airConditioning: "Dual Zone Climate Control",
    luxuryLevel: "Premium",
    amenities: [
      "Air Conditioning",
      "Reclining Seats",
      "USB Charging",
      "Tinted Windows",
      "Large Luggage Space",
      "Comfortable Suspension",
      "Professional Driver",
      "Complimentary Water"
    ],
    idealFor: [
      "Umrah",
      "Hajj",
      "Families",
      "Groups",
      "Ziyarat Tours"
    ],
    routes: [
      { name: "Jeddah Airport to Makkah", time: "1h 15m", distance: "95 km", recommended: true },
      { name: "Makkah to Madinah", time: "4h 30m", distance: "450 km", recommended: true },
      { name: "Madinah to Jeddah Airport", time: "4h 15m", distance: "410 km", recommended: false }
    ],
    whyChoose: [
      { title: "Space", description: "Incredible headroom and legroom for all passengers.", icon: "Maximize" },
      { title: "Reliability", description: "Toyota's legendary durability ensures a safe trip.", icon: "ShieldCheck" },
      { title: "Comfort", description: "High-quality seating for long distance travel.", icon: "Sofa" },
      { title: "Luggage", description: "Ample room for all your bags and Zemzem water.", icon: "Briefcase" }
    ],
    pricing: {
      startingPrice: 250,
      currency: "SAR",
      included: [
        "Professional Driver",
        "Fuel & Tolls",
        "Meet & Greet at Airport",
        "Complimentary Waiting Time"
      ]
    },
    faqs: [
      { question: "How many passengers can fit in the Toyota Hiace?", answer: "The Toyota Hiace comfortably seats up to 11 passengers, plus the driver." },
      { question: "Is there enough space for luggage?", answer: "Yes, it can accommodate up to 11 large suitcases easily." },
      { question: "Is the driver included?", answer: "Yes, a professional, licensed driver is included with every booking." }
    ],
    seo: {
      title: "Toyota Hiace | Luxury Chauffeur Vehicle | Umrah Taxi Services",
      description: "Book the Toyota Hiace with Umrah Taxi Services for airport transfers, hotel transfers, Umrah, Hajj, and intercity travel.",
      keywords: ["Toyota Hiace", "Toyota Hiace Saudi Arabia", "Luxury Toyota Hiace", "Private Toyota Hiace Hire"]
    },
    testimonials: [
      { name: "Ahmed R.", country: "UK", rating: 5, route: "Jeddah to Makkah", text: "Perfect vehicle for our family of 8. Very spacious and comfortable." }
    ],
    relatedVehicles: ["hyundai-staria", "gmc-yukon", "hyundai-h1"]
  },
  {
    name: "GMC Yukon",
    slug: "gmc-yukon",
    badge: "VIP Luxury SUV",
    shortDescription: "7 Passenger Premium SUV",
    heroImage: "/fleet/cars/gmc-yukon.png",
    gallery: [
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200"
    ],
    passengers: 7,
    luggage: 6,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "5.3L V8",
    doors: 4,
    interior: "Premium Leather",
    airConditioning: "Tri-Zone Climate Control",
    luxuryLevel: "VIP",
    amenities: [
      "Air Conditioning",
      "Reclining Seats",
      "Leather Seats",
      "USB Charging",
      "Tinted Windows",
      "Comfortable Suspension",
      "Professional Driver",
      "Complimentary Water"
    ],
    idealFor: [
      "VIP Guests",
      "Corporate",
      "Families",
      "Airport Transfer"
    ],
    routes: [
      { name: "Jeddah Airport to Makkah", time: "1h 10m", distance: "95 km", recommended: true },
      { name: "Makkah to Madinah", time: "4h 15m", distance: "450 km", recommended: true },
      { name: "Hotel to Haram Transfer", time: "15m", distance: "5 km", recommended: false }
    ],
    whyChoose: [
      { title: "Luxury", description: "Top-tier premium leather interior and finishes.", icon: "Crown" },
      { title: "Smooth Ride", description: "Advanced suspension for maximum comfort.", icon: "Waves" },
      { title: "Safety", description: "State-of-the-art safety features and robust build.", icon: "Shield" },
      { title: "VIP Experience", description: "Arrive in style and make a lasting impression.", icon: "Star" }
    ],
    pricing: {
      startingPrice: 350,
      currency: "SAR",
      included: [
        "Professional VIP Driver",
        "Fuel & Tolls",
        "Meet & Greet at Airport",
        "Complimentary Water & Refreshments"
      ]
    },
    faqs: [
      { question: "Does the GMC Yukon have leather seats?", answer: "Yes, our GMC Yukon features premium leather seating." },
      { question: "How many bags fit in the trunk?", answer: "It can hold up to 6 large suitcases depending on the passenger count." },
      { question: "Is this vehicle suitable for VIPs?", answer: "Absolutely, it is our most requested vehicle for VIPs and corporate clients." }
    ],
    seo: {
      title: "GMC Yukon | VIP Chauffeur Vehicle | Umrah Taxi Services",
      description: "Book the VIP GMC Yukon with Umrah Taxi Services for airport transfers, hotel transfers, Umrah, and VIP intercity travel.",
      keywords: ["GMC Yukon", "VIP GMC Yukon Saudi Arabia", "Luxury GMC Yukon", "Private GMC Yukon Hire"]
    },
    testimonials: [
      { name: "Faisal M.", country: "UAE", rating: 5, route: "Jeddah to Makkah", text: "The most comfortable ride I've ever had from the airport." }
    ],
    relatedVehicles: ["toyota-hiace", "hyundai-staria"]
  },
  {
    name: "Hyundai Staria",
    slug: "hyundai-staria",
    badge: "Modern Comfort",
    shortDescription: "7 Passenger Modern Minivan",
    heroImage: "/fleet/cars/hyundai-staria.png",
    gallery: [
      "/fleet/staria-gallery/staria_exterior_1785016336596.png",
      "/fleet/staria-gallery/staria_luggage_1785016345212.png",
      "/fleet/staria-gallery/staria_road_1785016354724.png"
    ],
    passengers: 7,
    luggage: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    engine: "2.2L CRDi",
    doors: 5,
    interior: "Premium Leatherette",
    airConditioning: "Dual Zone Auto AC",
    luxuryLevel: "Premium",
    amenities: [
      "Air Conditioning",
      "Reclining Seats",
      "USB Charging",
      "Tinted Windows",
      "Panoramic Windows",
      "Professional Driver",
      "Complimentary Water"
    ],
    idealFor: [
      "Umrah",
      "Families",
      "Ziyarat Tours",
      "Intercity Travel"
    ],
    routes: [
      { name: "Jeddah Airport to Makkah", time: "1h 15m", distance: "95 km", recommended: true },
      { name: "Makkah to Madinah", time: "4h 30m", distance: "450 km", recommended: true }
    ],
    whyChoose: [
      { title: "Modern Design", description: "Futuristic look with panoramic windows.", icon: "Eye" },
      { title: "Comfort", description: "Spacious seating designed for relaxation.", icon: "Sofa" },
      { title: "Fuel Efficiency", description: "Modern diesel engine ensures a great rate.", icon: "Fuel" },
      { title: "Accessibility", description: "Large sliding doors for easy entry and exit.", icon: "DoorOpen" }
    ],
    pricing: {
      startingPrice: 220,
      currency: "SAR",
      included: [
        "Professional Driver",
        "Fuel & Tolls",
        "Airport Meet & Greet"
      ]
    },
    faqs: [
      { question: "Is the Hyundai Staria spacious?", answer: "Yes, it boasts best-in-class headroom and legroom." },
      { question: "Can I book it for Makkah to Madinah?", answer: "Absolutely, it is highly recommended for intercity travel." }
    ],
    seo: {
      title: "Hyundai Staria | Luxury Chauffeur Vehicle | Umrah Taxi Services",
      description: "Book the modern Hyundai Staria with Umrah Taxi Services for your family trips, Umrah, and intercity travel.",
      keywords: ["Hyundai Staria", "Hyundai Staria Saudi Arabia", "Luxury Hyundai Staria", "Private Staria Hire"]
    },
    testimonials: [
      { name: "Omar T.", country: "Malaysia", rating: 5, route: "Makkah to Madinah", text: "Amazing views from the large windows and very comfortable seats." }
    ],
    relatedVehicles: ["toyota-hiace", "hyundai-h1", "gmc-yukon"]
  },
  {
    name: "Hyundai H1 / Starex",
    slug: "hyundai-h1",
    badge: "Family Classic",
    shortDescription: "7 Passenger Minivan",
    heroImage: "/fleet/cars/hyundai-h1.png",
    gallery: [
      "/fleet/h1-gallery/h1_exterior_1785016378702.png",
      "/fleet/h1-gallery/h1_road_1785016397559.png"
    ],
    passengers: 7,
    luggage: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    engine: "2.5L CRDi",
    doors: 4,
    interior: "Comfort Cloth",
    airConditioning: "Dual Zone AC",
    luxuryLevel: "Standard Premium",
    amenities: [
      "Air Conditioning",
      "USB Charging",
      "Tinted Windows",
      "Professional Driver",
      "Complimentary Water"
    ],
    idealFor: [
      "Umrah",
      "Families",
      "Budget Travel"
    ],
    routes: [
      { name: "Jeddah Airport to Makkah", time: "1h 15m", distance: "95 km", recommended: true }
    ],
    whyChoose: [
      { title: "Reliability", description: "A proven track record of dependability.", icon: "ShieldCheck" },
      { title: "Affordable", description: "Great value for small groups and families.", icon: "Wallet" },
      { title: "Comfort", description: "Classic comfort suitable for all journeys.", icon: "Sofa" }
    ],
    pricing: {
      startingPrice: 180,
      currency: "SAR",
      included: [
        "Professional Driver",
        "Fuel & Tolls"
      ]
    },
    faqs: [
      { question: "Is the H1 suitable for families?", answer: "Yes, it's one of the most popular choices for families of up to 7 members." }
    ],
    seo: {
      title: "Hyundai H1 | Family Vehicle | Umrah Taxi Services",
      description: "Book the Hyundai H1 with Umrah Taxi Services for affordable and comfortable family trips.",
      keywords: ["Hyundai H1", "Hyundai H1 Saudi Arabia", "Private H1 Hire"]
    },
    testimonials: [
      { name: "Tariq H.", country: "Pakistan", rating: 4, route: "Jeddah to Makkah", text: "Great value for money. The driver was very polite." }
    ],
    relatedVehicles: ["toyota-hiace", "hyundai-staria"]
  },
  {
    name: "Toyota Coaster",
    slug: "toyota-coaster",
    badge: "Large Group Travel",
    shortDescription: "19 Passenger Minibus",
    heroImage: "/fleet/cars/toyota-coaster.png",
    gallery: [
      "/fleet/coaster-gallery/coaster_exterior_1785016423400.png",
      "/fleet/coaster-gallery/coaster_luggage_1785016434239.png"
    ],
    passengers: 19,
    luggage: 15,
    transmission: "Manual/Automatic",
    fuel: "Diesel",
    engine: "4.2L",
    doors: 2,
    interior: "Standard/Premium Cloth",
    airConditioning: "High Capacity Roof AC",
    luxuryLevel: "Standard",
    amenities: [
      "Air Conditioning",
      "Microphone System",
      "Tinted Windows",
      "Professional Driver",
      "Complimentary Water"
    ],
    idealFor: [
      "Large Groups",
      "Hajj",
      "Corporate Transport"
    ],
    routes: [
      { name: "Jeddah Airport to Makkah", time: "1h 30m", distance: "95 km", recommended: true },
      { name: "Makkah to Madinah", time: "5h 00m", distance: "450 km", recommended: true }
    ],
    whyChoose: [
      { title: "Capacity", description: "Fits up to 19 passengers comfortably.", icon: "Users" },
      { title: "Luggage Space", description: "Massive storage for large group luggage.", icon: "Briefcase" },
      { title: "Group Economy", description: "The most cost-effective way for large groups to travel.", icon: "Wallet" }
    ],
    pricing: {
      startingPrice: 500,
      currency: "SAR",
      included: [
        "Professional Driver",
        "Fuel & Tolls",
        "Group Coordination"
      ]
    },
    faqs: [
      { question: "Does it come with a microphone?", answer: "Yes, a PA system is available for group leaders." },
      { question: "Is there enough AC for 19 people?", answer: "The Coaster is equipped with a high-capacity roof AC to ensure everyone stays cool." }
    ],
    seo: {
      title: "Toyota Coaster | Group Transport | Umrah Taxi Services",
      description: "Book the Toyota Coaster for large groups traveling to Makkah and Madinah.",
      keywords: ["Toyota Coaster", "Toyota Coaster Saudi Arabia", "Group Transport Makkah"]
    },
    testimonials: [
      { name: "Ayesha S.", country: "India", rating: 5, route: "Makkah to Madinah", text: "Perfect for our group of 20. The AC was very cold and the ride smooth." }
    ],
    relatedVehicles: ["toyota-hiace"]
  },
  {
    name: "Toyota Camry",
    slug: "toyota-camry",
    badge: "Executive Sedan",
    shortDescription: "4 Passenger Premium Sedan",
    heroImage: "/fleet/cars/toyota-camry.png",
    gallery: [
      "/fleet/camry-gallery/camry_exterior_1785016469336.png",
      "/fleet/camry-gallery/camry_luggage_1785016477899.png",
      "/fleet/camry-gallery/camry_road_1785016486801.png"
    ],
    passengers: 4,
    luggage: 4,
    transmission: "Automatic",
    fuel: "Petrol/Hybrid",
    engine: "2.5L",
    doors: 4,
    interior: "Premium Fabric/Leather",
    airConditioning: "Dual Zone AC",
    luxuryLevel: "Executive",
    amenities: [
      "Air Conditioning",
      "Comfortable Seating",
      "USB Charging",
      "Tinted Windows",
      "Professional Driver",
      "Complimentary Water"
    ],
    idealFor: [
      "Couples",
      "Business Travelers",
      "Small Families"
    ],
    routes: [
      { name: "Jeddah Airport to Makkah", time: "1h", distance: "95 km", recommended: true },
      { name: "Makkah to Madinah", time: "4h", distance: "450 km", recommended: true }
    ],
    whyChoose: [
      { title: "Comfort", description: "Smooth ride perfect for relaxing after a flight.", icon: "Sofa" },
      { title: "Efficiency", description: "Excellent fuel efficiency offering competitive rates.", icon: "Wallet" },
      { title: "Agility", description: "Navigates city traffic and tight spaces easily.", icon: "Maximize" }
    ],
    pricing: {
      startingPrice: 150,
      currency: "SAR",
      included: [
        "Professional Driver",
        "Fuel & Tolls",
        "Airport Meet & Greet"
      ]
    },
    faqs: [
      { question: "Is the Camry suitable for intercity travel?", answer: "Yes, it is very comfortable for travel between Makkah and Madinah for small groups." },
      { question: "How much luggage can fit?", answer: "The trunk comfortably holds up to 4 medium-sized suitcases." }
    ],
    seo: {
      title: "Toyota Camry | Executive Sedan | Umrah Taxi Services",
      description: "Book a premium Toyota Camry with Umrah Taxi Services for a comfortable and efficient journey.",
      keywords: ["Toyota Camry", "Camry Taxi Saudi Arabia", "Private Car Jeddah"]
    },
    testimonials: [
      { name: "Sami A.", country: "Egypt", rating: 5, route: "Jeddah to Makkah", text: "Very smooth ride and the driver was excellent." }
    ],
    relatedVehicles: ["gmc-yukon", "hyundai-h1"]
  }
];

export function getVehicleBySlug(slug: string): VehicleData | undefined {
  return vehicles.find(v => v.slug === slug);
}
