import { Globe } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { currencies } from '@/lib/data';
import { Currency } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function CurrencySelector() {
  const { currency, setCurrency } = useCart();

  return (
    <div className="fixed bottom-24 right-6 z-40 hidden sm:block">
      <div className="bg-background border-2 border-primary rounded-xl shadow-lg p-3 flex items-center gap-2">
        <Globe className="h-4 w-4 text-primary" />
        <Select value={currency.code} onValueChange={(value) => setCurrency(value as Currency)}>
          <SelectTrigger className="w-28 h-8 border-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {c.code} ({c.symbol})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
