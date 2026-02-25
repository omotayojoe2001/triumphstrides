import { ReactNode } from 'react';
import { TopBar } from './TopBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { CurrencySelector } from '@/components/CurrencySelector';
import { DiscountBanner } from '@/components/DiscountBanner';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
      <CurrencySelector />
      <DiscountBanner />
    </div>
  );
}
