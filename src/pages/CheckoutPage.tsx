import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    items, 
    orderNote, 
    getSubtotal,
    getConvertedPrice,
    formatPrice,
    currency,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Calgary',
    postalCode: '',
    deliveryMethod: 'delivery' as 'delivery' | 'pickup',
  });

  const [step, setStep] = useState<'info' | 'review' | 'payment'>('info');

  const cartItems = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    const variant = product?.variants.find(v => v.id === item.variantId);
    return { ...item, product, variant };
  }).filter(item => item.product && item.variant);

  const subtotal = getSubtotal();
  const deliveryFee = formData.deliveryMethod === 'delivery' ? 10 : 0;
  const total = subtotal + (currency.code === 'CAD' ? deliveryFee : deliveryFee * currency.rate);

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (formData.deliveryMethod === 'delivery' && (!formData.address || !formData.postalCode)) {
      toast({ title: "Please provide delivery address", variant: "destructive" });
      return;
    }
    setStep('review');
  };

  const handlePayment = () => {
    // Stripe integration placeholder
    toast({
      title: "Payment Processing",
      description: "Stripe integration pending. Order submitted for manual processing.",
    });
    
    // Generate order number
    const orderNumber = `TS-${Date.now().toString(36).toUpperCase()}`;
    
    // Clear cart and redirect to confirmation
    clearCart();
    navigate(`/order-confirmation?order=${orderNumber}`);
  };

  return (
    <div>
      <section className="bg-muted py-8">
        <div className="container-tight">
          <h1 className="text-3xl font-bold">Checkout</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-2 mt-4">
            {['info', 'review', 'payment'].map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={cn(
                  "h-8 w-8 flex items-center justify-center text-sm font-medium",
                  step === s ? "bg-primary text-primary-foreground" : 
                  ['info', 'review', 'payment'].indexOf(step) > i ? "bg-foreground text-background" : "bg-muted-foreground/30 text-muted-foreground"
                )}>
                  {i + 1}
                </div>
                {i < 2 && <div className="w-8 h-0.5 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-tight py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Area */}
          <div className="lg:col-span-2">
            {step === 'info' && (
              <form onSubmit={handleSubmitInfo} className="space-y-6">
                <div className="border border-border p-6 space-y-4">
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 (403) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="border border-border p-6 space-y-4">
                  <h2 className="text-xl font-semibold">Delivery Method</h2>
                  
                  <RadioGroup 
                    value={formData.deliveryMethod} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, deliveryMethod: value as 'delivery' | 'pickup' }))}
                  >
                    <div className="flex items-center space-x-3 p-4 border border-border cursor-pointer hover:bg-muted">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                        <span className="font-medium">Delivery</span>
                        <span className="block text-sm text-muted-foreground">
                          {formatPrice(getConvertedPrice(10))} - Delivered to your address in Calgary
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-border cursor-pointer hover:bg-muted">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <span className="font-medium">Pickup</span>
                        <span className="block text-sm text-muted-foreground">
                          Free - Collect from our Calgary location
                        </span>
                      </Label>
                    </div>
                  </RadioGroup>

                  {formData.deliveryMethod === 'delivery' && (
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" value="Calgary" disabled />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Postal Code *</Label>
                          <Input
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={(e) => setFormData(prev => ({ ...prev, postalCode: e.target.value }))}
                            placeholder="T2X 1A1"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Continue to Review
                </Button>
              </form>
            )}

            {step === 'review' && (
              <div className="space-y-6">
                <div className="border border-border p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Review Your Order</h2>
                    <Button variant="ghost" onClick={() => setStep('info')}>Edit</Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Contact</p>
                      <p className="font-medium">{formData.name}</p>
                      <p>{formData.email}</p>
                      <p>{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        {formData.deliveryMethod === 'delivery' ? 'Delivery Address' : 'Pickup'}
                      </p>
                      {formData.deliveryMethod === 'delivery' ? (
                        <>
                          <p className="font-medium">{formData.address}</p>
                          <p>Calgary, AB {formData.postalCode}</p>
                        </>
                      ) : (
                        <p className="font-medium">Pickup from store</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border border-border p-6 space-y-4">
                  <h3 className="font-semibold">Order Items</h3>
                  {cartItems.map(({ productId, variantId, quantity, note, product, variant }) => (
                    <div key={`${productId}-${variantId}`} className="flex gap-4 py-3 border-b border-border last:border-0">
                      <div className="w-16 h-16 bg-muted">
                        <img src={product!.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{product!.name}</p>
                        <p className="text-sm text-muted-foreground">{variant!.weight} × {quantity}</p>
                        {note && <p className="text-sm text-muted-foreground italic">Note: {note}</p>}
                      </div>
                      <p className="font-medium">
                        {formatPrice(getConvertedPrice(variant!.price)! * quantity)}
                      </p>
                    </div>
                  ))}
                  {orderNote && (
                    <div className="pt-2">
                      <p className="text-sm text-muted-foreground">Order Note: {orderNote}</p>
                    </div>
                  )}
                </div>

                <Button 
                  onClick={() => setStep('payment')} 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Continue to Payment
                </Button>
              </div>
            )}

            {step === 'payment' && (
              <div className="space-y-6">
                <div className="border border-border p-6 space-y-4">
                  <h2 className="text-xl font-semibold">Payment</h2>
                  
                  <div className="p-4 bg-muted text-center">
                    <p className="text-muted-foreground mb-2">Stripe Payment Integration</p>
                    <p className="text-sm text-muted-foreground">
                      Card payment will be available once Stripe is configured.
                    </p>
                  </div>

                  <div className="p-4 border border-border">
                    <p className="font-medium mb-2">Alternative Payment Methods:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• e-Transfer to: payments@triumphstridesstore.com</li>
                      <li>• Pay in person at pickup</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep('review')} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    onClick={handlePayment}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-border bg-background p-6 space-y-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              
              <div className="space-y-3 text-sm max-h-64 overflow-y-auto">
                {cartItems.map(({ productId, variantId, quantity, product, variant }) => (
                  <div key={`${productId}-${variantId}`} className="flex justify-between">
                    <span className="text-muted-foreground">
                      {product!.name} ({variant!.weight}) × {quantity}
                    </span>
                    <span>{formatPrice(getConvertedPrice(variant!.price)! * quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>
                    {formData.deliveryMethod === 'pickup' 
                      ? 'Free' 
                      : formatPrice(getConvertedPrice(10))}
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total ({currency.code})</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
