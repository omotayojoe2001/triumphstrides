import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CartItem, Currency, CurrencyConfig } from '@/lib/types';
import { currencies, products } from '@/lib/data';

interface CartContextType {
  items: CartItem[];
  currency: CurrencyConfig;
  orderNote: string;
  addItem: (productId: string, variantId: string, quantity?: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  updateItemNote: (productId: string, variantId: string, note: string) => void;
  setOrderNote: (note: string) => void;
  setCurrency: (code: Currency) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getConvertedPrice: (priceCAD: number | null) => number | null;
  formatPrice: (price: number | null) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [currency, setCurrencyState] = useState<CurrencyConfig>(currencies[0]);
  const [orderNote, setOrderNote] = useState('');

  const addItem = useCallback((productId: string, variantId: string, quantity = 1) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.productId === productId && item.variantId === variantId
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { productId, variantId, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string, variantId: string) => {
    setItems(prev => prev.filter(
      item => !(item.productId === productId && item.variantId === variantId)
    ));
  }, []);

  const updateQuantity = useCallback((productId: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      return;
    }
    setItems(prev => prev.map(item =>
      item.productId === productId && item.variantId === variantId
        ? { ...item, quantity }
        : item
    ));
  }, [removeItem]);

  const updateItemNote = useCallback((productId: string, variantId: string, note: string) => {
    setItems(prev => prev.map(item =>
      item.productId === productId && item.variantId === variantId
        ? { ...item, note }
        : item
    ));
  }, []);

  const setCurrency = useCallback((code: Currency) => {
    const found = currencies.find(c => c.code === code);
    if (found) setCurrencyState(found);
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setOrderNote('');
  }, []);

  const getItemCount = useCallback(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const getConvertedPrice = useCallback((priceCAD: number | null): number | null => {
    if (priceCAD === null) return null;
    return Math.round(priceCAD * currency.rate * 100) / 100;
  }, [currency]);

  const formatPrice = useCallback((price: number | null): string => {
    if (price === null) return 'Price on request';
    return `${currency.symbol}${price.toFixed(2)}`;
  }, [currency]);

  const getSubtotal = useCallback(() => {
    return items.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return sum;
      const variant = product.variants.find(v => v.id === item.variantId);
      if (!variant || variant.price === null) return sum;
      const convertedPrice = getConvertedPrice(variant.price);
      return sum + (convertedPrice || 0) * item.quantity;
    }, 0);
  }, [items, getConvertedPrice]);

  return (
    <CartContext.Provider value={{
      items,
      currency,
      orderNote,
      addItem,
      removeItem,
      updateQuantity,
      updateItemNote,
      setOrderNote,
      setCurrency,
      clearCart,
      getItemCount,
      getSubtotal,
      getConvertedPrice,
      formatPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
