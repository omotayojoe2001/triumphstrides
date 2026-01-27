import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/lib/data';

export function CartPage() {
  const { 
    items, 
    orderNote, 
    setOrderNote,
    updateQuantity, 
    updateItemNote,
    removeItem, 
    getSubtotal,
    getConvertedPrice,
    formatPrice,
    currency
  } = useCart();

  const cartItems = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    const variant = product?.variants.find(v => v.id === item.variantId);
    return { ...item, product, variant };
  }).filter(item => item.product && item.variant);

  const subtotal = getSubtotal();

  if (cartItems.length === 0) {
    return (
      <div className="container-tight py-16 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added any products yet.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/shop">
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-muted py-8">
        <div className="container-tight">
          <h1 className="text-3xl font-bold">Your Cart</h1>
        </div>
      </section>

      <div className="container-tight py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(({ productId, variantId, quantity, note, product, variant }) => {
              const convertedPrice = getConvertedPrice(variant!.price);
              const itemTotal = convertedPrice ? convertedPrice * quantity : null;

              return (
                <div 
                  key={`${productId}-${variantId}`}
                  className="flex gap-4 p-4 border border-border bg-background"
                >
                  <Link to={`/product/${productId}`} className="w-24 h-24 bg-muted shrink-0">
                    <img 
                      src={product!.images[0]} 
                      alt={product!.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link 
                          to={`/product/${productId}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {product!.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{variant!.weight}</p>
                        <p className="font-medium mt-1">{formatPrice(convertedPrice)}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(productId, variantId)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(productId, variantId, quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(productId, variantId, quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      {itemTotal && (
                        <span className="text-sm font-medium">
                          Total: {formatPrice(itemTotal)}
                        </span>
                      )}
                    </div>

                    {/* Item Note */}
                    <div className="mt-3">
                      <Input
                        placeholder="Add note for this item..."
                        value={note || ''}
                        onChange={(e) => updateItemNote(productId, variantId, e.target.value)}
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-border bg-background p-6 space-y-6">
              <h2 className="text-xl font-bold">Order Summary</h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-muted-foreground">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total ({currency.code})</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="orderNote">Order Note</Label>
                <Textarea
                  id="orderNote"
                  placeholder="e.g., Call on arrival, Leave at door..."
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  rows={3}
                />
              </div>

              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Link 
                to="/shop"
                className="block text-center text-sm text-muted-foreground hover:text-foreground"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
