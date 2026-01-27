import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const { addItem, getConvertedPrice, formatPrice } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === productId);
  
  const [selectedVariantId, setSelectedVariantId] = useState(product?.variants[0]?.id || '');
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const selectedVariant = product?.variants.find(v => v.id === selectedVariantId);
  
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="container-tight py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedVariant || !selectedVariant.inStock) return;
    
    addItem(product.id, selectedVariant.id, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedVariant.weight}) x ${quantity}`,
    });
  };

  const convertedPrice = selectedVariant ? getConvertedPrice(selectedVariant.price) : null;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-tight py-4 border-b border-border">
        <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Shop
        </Link>
      </div>

      <div className="container-tight py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted">
              <img 
                src={product.images[selectedImage] || '/placeholder.svg'} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-20 shrink-0 bg-muted",
                      selectedImage === index && "ring-2 ring-primary"
                    )}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-foreground">
              {formatPrice(convertedPrice)}
            </div>

            {/* Stock Status */}
            <div>
              {selectedVariant?.inStock ? (
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  <span className="h-2 w-2 bg-primary mr-2"></span>
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center text-sm text-destructive font-medium">
                  <span className="h-2 w-2 bg-destructive mr-2"></span>
                  Out of Stock
                </span>
              )}
            </div>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="space-y-2">
                <Label>Select Size/Weight</Label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={cn(
                        "px-4 py-2 border text-sm font-medium transition-colors",
                        selectedVariantId === variant.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-foreground"
                      )}
                    >
                      {variant.weight}
                      {variant.price && ` - ${formatPrice(getConvertedPrice(variant.price))}`}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <Label>Quantity</Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Note */}
            <div className="space-y-2">
              <Label>Special Note (optional)</Label>
              <Textarea
                placeholder="e.g., Please pack extra carefully"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
              />
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              disabled={!selectedVariant?.inStock || selectedVariant?.price === null}
              className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>

            {/* Description */}
            <div className="pt-6 border-t border-border space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What it's used for</h3>
                <p className="text-muted-foreground">{product.usedFor}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;
