export interface VehiclePricing {
    camry: number;
    hiace: number;
    gmc: number;
    h1: number;
    staria: number;
    coaster: number;
}

export interface RouteData {
    id: string;
    name: string;
    type: 'Transfer' | 'Hourly' | 'Ziyarat' | 'Intercity' | 'Return';
    prices: VehiclePricing;
    popular?: boolean;
}

export const vehiclesData = [
    {
        id: 'camry',
        name: 'Toyota Camry',
        passengers: 4,
        luggage: 4,
        idealFor: 'Small families, couples, business travelers',
        image: '/images/fleet/camry-transparent.png'
    },
    {
        id: 'hiace',
        name: 'Toyota Hiace',
        passengers: 11,
        luggage: 11,
        idealFor: 'Medium groups, large families',
        image: '/images/fleet/hiace-transparent.png'
    },
    {
        id: 'gmc',
        name: 'GMC Yukon',
        passengers: 7,
        luggage: 7,
        idealFor: 'VIP travel, maximum comfort, executive trips',
        image: '/images/fleet/gmc-transparent.png'
    },
    {
        id: 'h1',
        name: 'Hyundai H1 / Starex',
        passengers: 7,
        luggage: 7,
        idealFor: 'Comfortable family travel, extra luggage space',
        image: '/images/fleet/h1-transparent.png'
    },
    {
        id: 'staria',
        name: 'Hyundai Staria',
        passengers: 7,
        luggage: 7,
        idealFor: 'Modern group travel, spacious interior',
        image: '/images/fleet/staria-transparent.png'
    },
    {
        id: 'coaster',
        name: 'Toyota Coaster',
        passengers: 19,
        luggage: 20,
        idealFor: 'Large groups, corporate travel, guided tours',
        image: '/images/fleet/coaster-transparent.png'
    }
];

export const pricingRoutes: RouteData[] = [
    {
        id: 'r1',
        name: 'Per Hour (Within City)',
        type: 'Hourly',
        prices: { camry: 70, hiace: 100, gmc: 140, h1: 80, staria: 90, coaster: 200 }
    },
    {
        id: 'r2',
        name: 'Jeddah Airport → Jeddah Hotel',
        type: 'Transfer',
        prices: { camry: 130, hiace: 200, gmc: 300, h1: 140, staria: 150, coaster: 350 }
    },
    {
        id: 'r3',
        name: 'Jeddah Airport → Makkah Hotel',
        type: 'Transfer',
        popular: true,
        prices: { camry: 200, hiace: 300, gmc: 450, h1: 210, staria: 225, coaster: 500 }
    },
    {
        id: 'r4',
        name: 'Jeddah Airport → Madinah Hotel',
        type: 'Intercity',
        prices: { camry: 380, hiace: 530, gmc: 1000, h1: 400, staria: 425, coaster: 850 }
    },
    {
        id: 'r5',
        name: 'Madinah Hotel → Jeddah Airport',
        type: 'Intercity',
        prices: { camry: 360, hiace: 500, gmc: 900, h1: 400, staria: 420, coaster: 800 }
    },
    {
        id: 'r6',
        name: 'Makkah Ziyarat',
        type: 'Ziyarat',
        popular: true,
        prices: { camry: 170, hiace: 250, gmc: 350, h1: 175, staria: 200, coaster: 400 }
    },
    {
        id: 'r7',
        name: 'Madinah Ziyarat',
        type: 'Ziyarat',
        popular: true,
        prices: { camry: 170, hiace: 250, gmc: 350, h1: 175, staria: 200, coaster: 400 }
    },
    {
        id: 'r8',
        name: 'Makkah → Taif (Return)',
        type: 'Return',
        prices: { camry: 400, hiace: 550, gmc: 900, h1: 400, staria: 450, coaster: 800 }
    },
    {
        id: 'r9',
        name: 'Jeddah → Taif (Return)',
        type: 'Return',
        prices: { camry: 550, hiace: 700, gmc: 1000, h1: 550, staria: 600, coaster: 1200 }
    },
    {
        id: 'r10',
        name: 'Makkah Hotel → Madinah Hotel',
        type: 'Intercity',
        popular: true,
        prices: { camry: 350, hiace: 500, gmc: 800, h1: 400, staria: 420, coaster: 800 }
    },
    {
        id: 'r11',
        name: 'Madinah Hotel → Makkah Hotel',
        type: 'Intercity',
        prices: { camry: 350, hiace: 500, gmc: 800, h1: 400, staria: 420, coaster: 800 }
    },
    {
        id: 'r12',
        name: 'Madinah Hotel → Madinah Airport',
        type: 'Transfer',
        prices: { camry: 100, hiace: 200, gmc: 250, h1: 130, staria: 150, coaster: 300 }
    },
    {
        id: 'r13',
        name: 'Madinah Airport → Madinah Hotel',
        type: 'Transfer',
        prices: { camry: 150, hiace: 250, gmc: 300, h1: 180, staria: 200, coaster: 350 }
    },
    {
        id: 'r14',
        name: 'Makkah Hotel → Jeddah Airport',
        type: 'Transfer',
        popular: true,
        prices: { camry: 150, hiace: 250, gmc: 350, h1: 180, staria: 200, coaster: 350 }
    },
    {
        id: 'r15',
        name: 'Makkah Hotel → Train Station',
        type: 'Transfer',
        prices: { camry: 100, hiace: 200, gmc: 250, h1: 150, staria: 150, coaster: 300 }
    },
    {
        id: 'r16',
        name: 'Madinah Hotel → Train Station',
        type: 'Transfer',
        prices: { camry: 120, hiace: 200, gmc: 250, h1: 150, staria: 150, coaster: 300 }
    }
];
