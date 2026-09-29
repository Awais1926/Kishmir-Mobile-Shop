import { Product, TradeInOption } from '../types';

export const WHATSAPP_NUMBER = '923092585126';
export const WHATSAPP_DISPLAY = '0309 2585126';
export const SHOP_NAME = 'Kashmir Mobile Shop';
export const SHOP_LOCATION = 'Dhari Sanghi, Rahim Yar Khan, Punjab, Pakistan';
export const SHOP_HOURS = 'Monday – Saturday: 10:00 AM – 10:00 PM | Sunday: 3:00 PM – 9:00 PM';

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'new',
    priceEst: 475000,
    priceDisplay: 'Rs. 475,000',
    ptaStatus: 'Official PTA Approved',
    condition: 'Brand New Sealed',
    storage: '256GB / 512GB',
    colors: ['Natural Titanium', 'Black Titanium', 'White Titanium', 'Blue Titanium'],
    desc: 'Titanium design, A17 Pro chip, 48MP main camera with 5x optical zoom, and Action Button.',
    specs: [
      { label: 'Display', value: '6.7" Super Retina XDR OLED 120Hz' },
      { label: 'Processor', value: 'Apple A17 Pro (3nm)' },
      { label: 'Camera', value: '48MP Main + 12MP Periscope 5x + 12MP Ultra Wide' },
      { label: 'Battery', value: '4422 mAh with 20W Fast Charging' },
      { label: 'PTA Status', value: 'Official PTA Approved' },
      { label: 'Warranty', value: '1 Year Apple International Warranty' }
    ],
    featured: true,
    hotDeal: true,
    image: '/assets/new-iphone-15.webp',
    inStock: true,
    rating: 4.9,
    reviewCount: 38
  },
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'new',
    priceEst: 415000,
    priceDisplay: 'Rs. 415,000',
    ptaStatus: 'Official PTA Approved',
    condition: 'Brand New Sealed',
    storage: '12GB RAM / 512GB',
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'],
    desc: 'Galaxy AI is here. Titanium frame, 200MP camera, built-in S Pen, and Snapdragon 8 Gen 3 for Galaxy.',
    specs: [
      { label: 'Display', value: '6.8" Dynamic LTPO AMOLED 2X 120Hz' },
      { label: 'Processor', value: 'Snapdragon 8 Gen 3 for Galaxy' },
      { label: 'Camera', value: '200MP Main + 50MP 5x + 10MP 3x + 12MP Ultra Wide' },
      { label: 'Battery', value: '5000 mAh with 45W Charging' },
      { label: 'S-Pen', value: 'Built-in Bluetooth S-Pen' },
      { label: 'Warranty', value: '1 Year Official Samsung Pakistan Warranty' }
    ],
    featured: true,
    hotDeal: true,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: 'used-iphone-13',
    name: 'iPhone 13 (Pre-Owned)',
    brand: 'Apple',
    category: 'used',
    priceEst: 165000,
    priceDisplay: 'Rs. 165,000',
    ptaStatus: 'Official PTA Approved',
    condition: '9.5/10 Mint Condition',
    storage: '128GB',
    colors: ['Midnight', 'Starlight', 'Blue', 'Pink'],
    desc: 'Superb condition pre-owned iPhone 13. 88%+ Battery Health, original screen, box included.',
    specs: [
      { label: 'Display', value: '6.1" Super Retina XDR OLED' },
      { label: 'Processor', value: 'Apple A15 Bionic' },
      { label: 'Battery Health', value: '88% - 92% Original' },
      { label: 'Condition', value: '9.5/10 Clean, No Repairs' },
      { label: 'PTA Status', value: 'Official PTA Approved' },
      { label: 'Accessories', value: 'Original Box & Charging Cable' }
    ],
    featured: true,
    hotDeal: false,
    image: '/assets/used-iphone-13.webp',
    inStock: true,
    rating: 4.8,
    reviewCount: 29
  },
  {
    id: 'samsung-galaxy-a55',
    name: 'Samsung Galaxy A55 5G',
    brand: 'Samsung',
    category: 'new',
    priceEst: 132000,
    priceDisplay: 'Rs. 132,000',
    ptaStatus: '1 Year Official Warranty',
    condition: 'Brand New Sealed',
    storage: '8GB RAM / 256GB',
    colors: ['Awesome Iceblue', 'Awesome Navy', 'Awesome Lilac'],
    desc: 'Metal frame design, Nightography 50MP camera, Knox Vault security, and 4 years of OS updates.',
    specs: [
      { label: 'Display', value: '6.6" Super AMOLED 120Hz Vision Booster' },
      { label: 'Processor', value: 'Exynos 1480 (4nm)' },
      { label: 'Camera', value: '50MP OIS + 12MP Ultra Wide + 5MP Macro' },
      { label: 'Battery', value: '5000 mAh + 25W Fast Charge' },
      { label: 'Protection', value: 'IP67 Water & Dust Resistance' },
      { label: 'Warranty', value: '1 Year Official Samsung Warranty' }
    ],
    featured: true,
    hotDeal: true,
    image: '/assets/new-galaxy-a55.webp',
    inStock: true,
    rating: 4.7,
    reviewCount: 31
  },
  {
    id: 'redmi-note-13-pro-plus',
    name: 'Xiaomi Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    category: 'new',
    priceEst: 139999,
    priceDisplay: 'Rs. 139,999',
    ptaStatus: '1 Year Official Warranty',
    condition: 'Brand New Sealed',
    storage: '12GB RAM / 512GB',
    colors: ['Midnight Black', 'Moonlight White', 'Aurora Purple'],
    desc: 'Curved 1.5K 120Hz AMOLED display, flagship 200MP camera with OIS, and ultra-fast 120W HyperCharge.',
    specs: [
      { label: 'Display', value: '6.67" Curved 1.5K AMOLED 120Hz' },
      { label: 'Processor', value: 'MediaTek Dimensity 7200 Ultra' },
      { label: 'Camera', value: '200MP OIS + 8MP Wide + 2MP Macro' },
      { label: 'Charging', value: '120W HyperCharge (100% in 19 mins)' },
      { label: 'Waterproof', value: 'IP68 Water & Dust Resistance' },
      { label: 'Warranty', value: '1 Year Official Brand Warranty' }
    ],
    featured: true,
    hotDeal: true,
    image: '/assets/new-redmi-note-13.webp',
    inStock: true,
    rating: 4.8,
    reviewCount: 24
  },
  {
    id: 'used-galaxy-s22',
    name: 'Samsung Galaxy S22 5G (Used)',
    brand: 'Samsung',
    category: 'used',
    priceEst: 118000,
    priceDisplay: 'Rs. 118,000',
    ptaStatus: 'Official PTA Approved',
    condition: '9.5/10 Mint Condition',
    storage: '8GB RAM / 128GB',
    colors: ['Phantom Black', 'Green', 'Pink Gold'],
    desc: 'Compact flagship smartphone with Dynamic AMOLED 2X, Snapdragon 8 Gen 1, and flagship cameras.',
    specs: [
      { label: 'Display', value: '6.1" Dynamic AMOLED 2X 120Hz' },
      { label: 'Processor', value: 'Snapdragon 8 Gen 1' },
      { label: 'Camera', value: '50MP OIS + 10MP 3x Telephoto + 12MP Wide' },
      { label: 'Condition', value: '9.5/10 Clean, Minor Frame Wear' },
      { label: 'PTA Status', value: 'Official PTA Approved' },
      { label: 'Includes', value: 'Phone + Original Type-C Cable' }
    ],
    featured: false,
    hotDeal: false,
    image: '/assets/used-galaxy-s22.webp',
    inStock: true,
    rating: 4.6,
    reviewCount: 18
  },
  {
    id: 'infinix-note-40-pro',
    name: 'Infinix Note 40 Pro 5G',
    brand: 'Infinix',
    category: 'new',
    priceEst: 76999,
    priceDisplay: 'Rs. 76,999',
    ptaStatus: '1 Year Official Warranty',
    condition: 'Brand New Sealed',
    storage: '8GB+8GB RAM / 256GB',
    colors: ['Vintage Green', 'Titan Gold'],
    desc: '3D Curved 120Hz AMOLED, 108MP OIS super-zoom camera, 70W All-Round FastCharge + Wireless MagCharge.',
    specs: [
      { label: 'Display', value: '6.78" 3D Curved 120Hz AMOLED' },
      { label: 'Processor', value: 'MediaTek Dimensity 7020 5G' },
      { label: 'Camera', value: '108MP OIS Super-Zoom' },
      { label: 'Charging', value: '70W Wired + 20W Wireless MagCharge' },
      { label: 'Audio', value: 'Dual Speakers tuned by JBL' },
      { label: 'Warranty', value: '1 Year Official Carlcare Warranty' }
    ],
    featured: true,
    hotDeal: true,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.7,
    reviewCount: 35
  },
  {
    id: 'tecno-camon-30-pro',
    name: 'Tecno Camon 30 Pro 5G',
    brand: 'Tecno',
    category: 'new',
    priceEst: 98999,
    priceDisplay: 'Rs. 98,999',
    ptaStatus: '1 Year Official Warranty',
    condition: 'Brand New Sealed',
    storage: '12GB RAM / 512GB',
    colors: ['Alps Snowy Silver', 'Basalt Black'],
    desc: 'Ultimate camera phone with Sony IMX890 50MP OIS camera, Dimensity 8200 Ultimate, and 144Hz AMOLED screen.',
    specs: [
      { label: 'Display', value: '6.78" 144Hz AMOLED 1.5K' },
      { label: 'Processor', value: 'MediaTek Dimensity 8200 Ultimate 4nm' },
      { label: 'Camera', value: '50MP Sony IMX890 OIS + 50MP Ultra-Wide + 50MP Selfie' },
      { label: 'Charging', value: '70W Ultra Charge 5000 mAh' },
      { label: 'Warranty', value: '1 Year Official Tecno Warranty' }
    ],
    featured: false,
    hotDeal: true,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.8,
    reviewCount: 22
  },
  {
    id: 'vivo-v30-5g',
    name: 'Vivo V30 5G',
    brand: 'Vivo',
    category: 'new',
    priceEst: 129999,
    priceDisplay: 'Rs. 129,999',
    ptaStatus: '1 Year Official Warranty',
    condition: 'Brand New Sealed',
    storage: '12GB RAM / 256GB',
    colors: ['Peacock Green', 'Noble Black'],
    desc: 'Studio-level portrait photography with Smart Aura Light 3.0, 3D Curved 120Hz display, and 80W FlashCharge.',
    specs: [
      { label: 'Display', value: '6.78" 3D Curved AMOLED 120Hz' },
      { label: 'Processor', value: 'Snapdragon 7 Gen 3 (4nm)' },
      { label: 'Camera', value: '50MP VCS True Color OIS + 50MP Ultra-Wide' },
      { label: 'Selfie', value: '50MP Eye AF Group Selfie Camera' },
      { label: 'Battery', value: '5000 mAh + 80W FlashCharge' },
      { label: 'Warranty', value: '1 Year Official Vivo Warranty' }
    ],
    featured: true,
    hotDeal: false,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.7,
    reviewCount: 19
  },
  {
    id: 'used-oppo-reno',
    name: 'OPPO Reno 10 Pro 5G (Pre-Owned)',
    brand: 'OPPO',
    category: 'used',
    priceEst: 105000,
    priceDisplay: 'Rs. 105,000',
    ptaStatus: 'Official PTA Approved',
    condition: '9.5/10 Mint Condition',
    storage: '12GB RAM / 256GB',
    colors: ['Silvery Grey', 'Glossy Purple'],
    desc: 'Telephoto portrait specialist phone with 32MP Sony IMX709 portrait lens, 80W SUPERVOOC charging.',
    specs: [
      { label: 'Display', value: '6.7" 3D AMOLED 120Hz' },
      { label: 'Processor', value: 'Snapdragon 778G 5G' },
      { label: 'Camera', value: '50MP Sony IMX890 OIS + 32MP Telephoto Portrait' },
      { label: 'Charging', value: '80W SUPERVOOC (100% in 28 min)' },
      { label: 'Condition', value: '9.5/10 Scratchless with Box' },
      { label: 'PTA Status', value: 'Official PTA Approved' }
    ],
    featured: false,
    hotDeal: false,
    image: '/assets/used-oppo-reno.webp',
    inStock: true,
    rating: 4.6,
    reviewCount: 14
  },
  {
    id: 'used-iphone-12-pro',
    name: 'iPhone 12 Pro (Pre-Owned)',
    brand: 'Apple',
    category: 'used',
    priceEst: 145000,
    priceDisplay: 'Rs. 145,000',
    ptaStatus: 'Official PTA Approved',
    condition: '9/10 Clean Used',
    storage: '128GB',
    colors: ['Pacific Blue', 'Graphite', 'Gold'],
    desc: 'Pro triple-camera system with LiDAR scanner, Ceramic Shield front, and stainless steel frame.',
    specs: [
      { label: 'Display', value: '6.1" Super Retina XDR OLED' },
      { label: 'Processor', value: 'Apple A14 Bionic' },
      { label: 'Camera', value: '12MP Triple (Wide, Telephoto, Ultra Wide) + LiDAR' },
      { label: 'Battery Health', value: '85% Original Battery' },
      { label: 'PTA Status', value: 'Official PTA Approved' },
      { label: 'Condition', value: '9/10 Clean, Fully Tested' }
    ],
    featured: false,
    hotDeal: true,
    image: 'https://images.unsplash.com/photo-1603891128711-11b4b0320d56?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.7,
    reviewCount: 26
  },
  {
    id: 'realme-12-pro-plus',
    name: 'Realme 12 Pro+ 5G',
    brand: 'Realme',
    category: 'new',
    priceEst: 114999,
    priceDisplay: 'Rs. 114,999',
    ptaStatus: '1 Year Official Warranty',
    condition: 'Brand New Sealed',
    storage: '12GB RAM / 256GB',
    colors: ['Submarine Blue', 'Navigator Beige'],
    desc: 'Luxury watch design crafted with Ollivier Savéo, 64MP Periscope Portrait Camera with 120x SuperZoom.',
    specs: [
      { label: 'Display', value: '6.7" Curved AMOLED 120Hz' },
      { label: 'Processor', value: 'Snapdragon 7s Gen 2 (4nm)' },
      { label: 'Camera', value: '64MP Periscope 3x + 50MP Sony IMX890 OIS' },
      { label: 'Battery', value: '5000 mAh + 67W SUPERVOOC Charge' },
      { label: 'Warranty', value: '1 Year Official Realme Warranty' }
    ],
    featured: false,
    hotDeal: false,
    image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.6,
    reviewCount: 17
  },
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro (2nd Gen Type-C)',
    brand: 'Accessories',
    category: 'accessories',
    priceEst: 64999,
    priceDisplay: 'Rs. 64,999',
    ptaStatus: 'N/A Accessories',
    condition: 'Brand New Sealed',
    storage: 'MagSafe USB-C Case',
    colors: ['White'],
    desc: 'Up to 2x more Active Noise Cancellation, Adaptive Audio, Transparency mode, and Personalized Spatial Audio.',
    specs: [
      { label: 'Chip', value: 'Apple H2 Headphone Chip' },
      { label: 'Cancellation', value: 'Active Noise Cancellation & Adaptive Transparency' },
      { label: 'Charging Case', value: 'MagSafe Case (USB-C) with Speaker & Lanyard Loop' },
      { label: 'Battery Life', value: 'Up to 6 hours listening time (30 hrs with case)' },
      { label: 'Authenticity', value: '100% Original Apple Packed' }
    ],
    featured: true,
    hotDeal: true,
    image: '/assets/accessory-earbuds.webp',
    inStock: true,
    rating: 4.9,
    reviewCount: 53
  },
  {
    id: 'samsung-fast-charger-45w',
    name: 'Samsung 45W Original Fast Charger',
    brand: 'Accessories',
    category: 'accessories',
    priceEst: 5500,
    priceDisplay: 'Rs. 5,500',
    ptaStatus: 'N/A Accessories',
    condition: 'Original Accessory',
    storage: 'Type-C to Type-C',
    colors: ['Black', 'White'],
    desc: 'Super Fast Charging 2.0 (45W) adapter for Galaxy S24 Ultra, S23 Ultra, A55, and Note series.',
    specs: [
      { label: 'Power Output', value: '45W Max Super Fast Charge 2.0' },
      { label: 'Connector', value: 'USB Type-C to Type-C 5A Cable included' },
      { label: 'Compatibility', value: 'Samsung Galaxy Flagships & Laptops' },
      { label: 'Safety', value: 'Over-current & Temperature Protection' }
    ],
    featured: false,
    hotDeal: true,
    image: '/assets/accessory-chargers.webp',
    inStock: true,
    rating: 4.8,
    reviewCount: 67
  },
  {
    id: 'anker-20000mah-powerbank',
    name: 'Anker 20,000mAh 22.5W Power Bank',
    brand: 'Accessories',
    category: 'accessories',
    priceEst: 11999,
    priceDisplay: 'Rs. 11,999',
    ptaStatus: 'N/A Accessories',
    condition: 'Original Accessory',
    storage: '20,000 mAh Capacity',
    colors: ['Black'],
    desc: 'High-capacity portable charger with 22.5W fast charging, built-in display, dual USB-C and USB-A ports.',
    specs: [
      { label: 'Capacity', value: '20,000 mAh (Charges iPhone 15 ~4.5 times)' },
      { label: 'Speed', value: '22.5W Fast Charge PD + QC3.0' },
      { label: 'Display', value: 'Digital LED Battery Percentage Display' },
      { label: 'Protection', value: 'MultiProtect Safety System' }
    ],
    featured: false,
    hotDeal: false,
    image: 'https://images.unsplash.com/photo-1609592424074-6701b3336712?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.9,
    reviewCount: 41
  },
  {
    id: 'google-pixel-8-pro-used',
    name: 'Google Pixel 8 Pro (Pre-Owned)',
    brand: 'Google',
    category: 'used',
    priceEst: 175000,
    priceDisplay: 'Rs. 175,000',
    ptaStatus: 'CPID Approved',
    condition: '9.5/10 Mint Condition',
    storage: '128GB',
    colors: ['Bay Blue', 'Obsidian'],
    desc: 'Google Tensor G3, best computational camera with 5x telephoto, thermometer sensor, and 7 years of Android OS updates.',
    specs: [
      { label: 'Display', value: '6.7" Super Actua AMOLED 120Hz' },
      { label: 'Processor', value: 'Google Tensor G3' },
      { label: 'Camera', value: '50MP Main + 48MP Ultra-wide + 48MP 5x Telephoto' },
      { label: 'Status', value: 'CPID Official Network Approved' },
      { label: 'Condition', value: '9.5/10 Scratchless Body' }
    ],
    featured: false,
    hotDeal: false,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    rating: 4.8,
    reviewCount: 16
  }
];

export const TRADE_IN_OPTIONS: TradeInOption[] = [
  {
    brand: 'Apple',
    models: [
      { name: 'iPhone 14 Pro Max', baseValue: 260000 },
      { name: 'iPhone 14 Pro', baseValue: 215000 },
      { name: 'iPhone 13 Pro Max', baseValue: 195000 },
      { name: 'iPhone 13', baseValue: 125000 },
      { name: 'iPhone 12 Pro', baseValue: 110000 },
      { name: 'iPhone 12', baseValue: 90000 },
      { name: 'iPhone 11', baseValue: 70000 }
    ]
  },
  {
    brand: 'Samsung',
    models: [
      { name: 'Galaxy S23 Ultra', baseValue: 240000 },
      { name: 'Galaxy S22 Ultra', baseValue: 160000 },
      { name: 'Galaxy S22', baseValue: 95000 },
      { name: 'Galaxy S21 Ultra', baseValue: 120000 },
      { name: 'Galaxy A54 5G', baseValue: 75000 },
      { name: 'Galaxy A34 5G', baseValue: 55000 }
    ]
  },
  {
    brand: 'Xiaomi / Redmi',
    models: [
      { name: 'Redmi Note 12 Pro', baseValue: 55000 },
      { name: 'Redmi Note 11 Pro', baseValue: 42000 },
      { name: 'Xiaomi 13T', baseValue: 110000 },
      { name: 'POCO F5', baseValue: 75000 }
    ]
  },
  {
    brand: 'Infinix / Tecno',
    models: [
      { name: 'Infinix Note 30 Pro', baseValue: 40000 },
      { name: 'Infinix GT 10 Pro', baseValue: 50000 },
      { name: 'Tecno Camon 20 Premier', baseValue: 55000 }
    ]
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Muhammad Farhan',
    location: 'Rahim Yar Khan',
    rating: 5,
    text: 'Bought my iPhone 15 Pro Max from Kashmir Mobile Shop. 100% original PTA approved item delivered with official receipt. Very trustworthy shop in Dhari Sanghi!',
    date: '3 days ago',
    verified: true
  },
  {
    id: 2,
    name: 'Chaudhry Bilal',
    location: 'Dhari Sanghi',
    rating: 5,
    text: 'Traded in my old iPhone 12 for Galaxy S24 Ultra. Got the best exchange price compared to all shops in RYK city market. Owner is polite and fair.',
    date: '1 week ago',
    verified: true
  },
  {
    id: 3,
    name: 'Ali Raza',
    location: 'Sadiqabad',
    rating: 5,
    text: 'Great collection of original accessories. Purchased Anker 20,000mAh powerbank and 45W Samsung fast charger. Both are genuine. Highly recommended!',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 4,
    name: 'Usman Ghani',
    location: 'Rahim Yar Khan',
    rating: 5,
    text: 'Fastest WhatsApp response! Asked about Redmi Note 13 Pro+ price at 10 PM and got instant response with exact location and discount.',
    date: '1 month ago',
    verified: true
  }
];

export const FAQS = [
  {
    q: 'Where is Kashmir Mobile Shop located?',
    a: 'We are conveniently located in Dhari Sanghi, Rahim Yar Khan, Punjab, Pakistan. You can visit us in person or order via WhatsApp with home delivery.'
  },
  {
    q: 'Are your phones PTA Approved?',
    a: 'Yes! We sell Official PTA Approved phones with valid PTA status certificates, as well as CPID approved and 1-Year Official Warranty devices. We specify PTA status on every listing.'
  },
  {
    q: 'Do you offer warranty on used phones?',
    a: 'Yes, all pre-owned and used phones undergo a 30-point quality check and come with a 7-Day Shop Checking Warranty for your complete peace of mind.'
  },
  {
    q: 'Can I exchange or trade in my old phone?',
    a: 'Absolutely! You can use our website Trade-in Calculator or WhatsApp us photos and details of your old device to get an instant exchange value quote.'
  },
  {
    q: 'How do I place an order via WhatsApp?',
    a: 'Click "Ask on WhatsApp" on any product or use our WhatsApp button (0309 2585126). Our team will confirm stock availability, final price, and arrange local pickup or dispatch.'
  }
];
