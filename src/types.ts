export type ProductCategory = 'new' | 'used' | 'accessories';
export type Brand = 'Apple' | 'Samsung' | 'Xiaomi' | 'Infinix' | 'Tecno' | 'Vivo' | 'OPPO' | 'Realme' | 'Google' | 'Accessories';
export type PTAStatus = 'Official PTA Approved' | 'CPID Approved' | 'Non-PTA / JV' | '1 Year Official Warranty' | 'N/A Accessories';
export type ConditionRating = 'Brand New Sealed' | '10/10 Box Pack' | '9.5/10 Mint Condition' | '9/10 Clean Used' | 'Original Accessory';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  category: ProductCategory;
  subcategory?: string;
  priceEst: number; // In PKR for filtering/sorting
  priceDisplay: string; // Formatting like "Rs. 465,000"
  ptaStatus: PTAStatus;
  condition: ConditionRating;
  storage?: string; // e.g. "256GB" or "8GB RAM / 256GB"
  colors: string[];
  desc: string;
  specs: ProductSpec[];
  featured?: boolean;
  hotDeal?: boolean;
  image: string;
  gallery?: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface TradeInOption {
  brand: string;
  models: { name: string; baseValue: number }[];
}

export interface FilterState {
  category: 'all' | ProductCategory;
  brand: 'all' | Brand;
  ptaStatus: string;
  condition: string;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
