export interface ProductVariant {
  id: string;
  weight: string;
  price: number | null;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  usedFor: string;
  images: string[];
  variants: ProductVariant[];
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  note?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  whoFor: string;
  includes: string[];
  icon: string;
  cta: string;
  ctaAction: string;
}

export interface Track {
  id: string;
  title: string;
  coverImage: string;
  audioUrl: string;
  duration: string;
}

export interface PastShow {
  id: string;
  eventName: string;
  city: string;
  date: string;
  photos: string[];
}

export interface Order {
  id: string;
  items: CartItem[];
  customerName: string;
  email: string;
  phone: string;
  address: string;
  deliveryMethod: 'delivery' | 'pickup';
  orderNote?: string;
  status: 'pending' | 'paid' | 'processing' | 'completed';
  total: number;
  createdAt: Date;
}

export type Currency = 'CAD' | 'USD' | 'EUR' | 'GBP' | 'NGN';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number;
}
