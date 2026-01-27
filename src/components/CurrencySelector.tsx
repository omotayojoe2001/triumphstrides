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
    <Select value={currency.code} onValueChange={(value) => setCurrency(value as Currency)}>
      <SelectTrigger className="w-[90px] h-9 text-sm border-border">
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
  );
}
