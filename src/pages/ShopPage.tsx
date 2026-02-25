import { useState, useMemo } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const lowestPrice = product.variants.reduce((min, v) => {
          if (v.price === null) return min;
          if (min === null) return v.price;
          return v.price < min ? v.price : min;
        }, null as number | null);
        
        if (lowestPrice !== null) {
          if (priceRange === 'under10' && lowestPrice >= 10) matchesPrice = false;
          if (priceRange === '10-20' && (lowestPrice < 10 || lowestPrice > 20)) matchesPrice = false;
          if (priceRange === '20-50' && (lowestPrice < 20 || lowestPrice > 50)) matchesPrice = false;
          if (priceRange === 'over50' && lowestPrice <= 50) matchesPrice = false;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => {
        const aPrice = a.variants.reduce((min, v) => v.price !== null && (min === null || v.price < min) ? v.price : min, null as number | null);
        const bPrice = b.variants.reduce((min, v) => v.price !== null && (min === null || v.price < min) ? v.price : min, null as number | null);
        if (aPrice === null) return 1;
        if (bPrice === null) return -1;
        return aPrice - bPrice;
      });
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => {
        const aPrice = a.variants.reduce((min, v) => v.price !== null && (min === null || v.price < min) ? v.price : min, null as number | null);
        const bPrice = b.variants.reduce((min, v) => v.price !== null && (min === null || v.price < min) ? v.price : min, null as number | null);
        if (aPrice === null) return 1;
        if (bPrice === null) return -1;
        return bPrice - aPrice;
      });
    } else if (sortBy === 'name-az') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-za') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  return (
    <div>
      {/* Header */}
      <section className="relative bg-foreground text-background py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 h-full">
            <img src="/products/palmoil(small).jpg" alt="" className="w-full h-full object-cover" />
            <img src="/products/fufu.jpg" alt="" className="w-full h-full object-cover" />
            <img src="/products/grindedcrayfish.jpg" alt="" className="w-full h-full object-cover" />
            <img src="/products/driedzobo.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/75 to-foreground/65" />
        </div>
        <div className="container-tight relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop African Foods</h1>
          <p className="text-background/90 max-w-2xl">
            Quality African ingredients delivered to your door in Calgary. 
            From flours and leaves to spices and oils.
          </p>
        </div>
      </section>

      <div className="container-tight py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm transition-colors",
                        selectedCategory === category 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under10', label: 'Under $10' },
                    { value: '10-20', label: '$10 - $20' },
                    { value: '20-50', label: '$20 - $50' },
                    { value: 'over50', label: 'Over $50' },
                  ].map(range => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm transition-colors",
                        priceRange === range.value 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted"
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search & Mobile Filter Toggle */}
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name-az">Name: A to Z</SelectItem>
                  <SelectItem value="name-za">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                className="lg:hidden"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Mobile Filters */}
            {showMobileFilters && (
              <div className="lg:hidden mb-6 p-4 border border-border bg-background space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "px-3 py-1.5 text-sm border transition-colors",
                          selectedCategory === category 
                            ? "bg-primary text-primary-foreground border-primary" 
                            : "border-border hover:bg-muted"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'under10', label: '<$10' },
                      { value: '10-20', label: '$10-$20' },
                      { value: '20-50', label: '$20-$50' },
                      { value: 'over50', label: '>$50' },
                    ].map(range => (
                      <button
                        key={range.value}
                        onClick={() => setPriceRange(range.value)}
                        className={cn(
                          "px-3 py-1.5 text-sm border transition-colors",
                          priceRange === range.value 
                            ? "bg-primary text-primary-foreground border-primary" 
                            : "border-border hover:bg-muted"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Active Filters */}
            {(selectedCategory !== 'All' || searchQuery || priceRange !== 'all') && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-sm">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-sm">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-sm">
                    {priceRange === 'under10' ? 'Under $10' : 
                     priceRange === '10-20' ? '$10-$20' :
                     priceRange === '20-50' ? '$20-$50' : 'Over $50'}
                    <button onClick={() => setPriceRange('all')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('all');
                    setSortBy('default');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
