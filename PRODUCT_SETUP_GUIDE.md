# Product Setup Guide - Triumphstridesstore

## 📁 Folder Structure for Images

```
public/
└── products/          ← Put all product images here
    ├── palmoil.jpg
    ├── fufu.jpg
    ├── your-new-product.jpg
    └── ...
```

## 🗄️ Database Setup

### Option 1: Initial Setup (First Time)

If you haven't set up your Supabase database yet:

1. **Go to your Supabase Dashboard** → SQL Editor
2. **Run migrations in order**:
   - `001_create_products_table.sql` - Creates the database tables
   - `002_seed_existing_products.sql` - Adds your current products
   - `004_update_product_images.sql` - Links real images to products
   - `005_add_missing_products.sql` - Adds products found in your images

### Option 2: Adding New Products (Ongoing)

**Method A: Using the Template File**
1. Add your product images to `public/products/`
2. Open `add_new_products.sql`
3. Copy the template and fill in your product details
4. Go to Supabase SQL Editor and paste your SQL
5. Run it!

**Method B: Direct SQL**
```sql
-- 1. Add the product
INSERT INTO products (id, name, category, description, used_for, featured) 
VALUES (
  'product-id',
  'Product Name',
  'Category',
  'Description here',
  'Used for making...',
  false
);

-- 2. Add image
INSERT INTO product_images (product_id, image_url, display_order) 
VALUES ('product-id', '/products/your-image.jpg', 0);

-- 3. Add variants (sizes/prices)
INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
VALUES 
  ('variant-1', 'product-id', '100g', 5.99, true),
  ('variant-2', 'product-id', '500g', 19.99, true);
```

## 📝 Categories Available

- `Flours` - Achi, Plantain, Wheat, Ogbono, etc.
- `Leaves` - Ugu, Bitter Leaf, Afang, Uziza, etc.
- `Spices` - Pepper soup spice, Habanero, etc.
- `Oils` - Palm oil, etc.
- `Grains` - Gari, Fufu, Semovita, etc.
- `Seafood/Fish` - Crayfish, Dried fish, Catfish, etc.
- `Others` - For products that don't fit above

## 🖼️ Image Guidelines

1. **Format**: JPG or PNG
2. **Size**: Ideally 800x800px or square aspect ratio
3. **Naming**: Use lowercase with hyphens (e.g., `palm-oil.jpg`)
4. **Location**: Must be in `public/products/` folder
5. **Reference in SQL**: `/products/your-image.jpg`

## ✅ Current Products with Images

Based on your existing images, these products are ready:
- ✅ Dehydrated Bitter Leaf
- ✅ Dehydrated Guava Leaf
- ✅ Dehydrated Soursop Leaf
- ✅ Dehydrated Ugu Leaf
- ✅ Dehydrated Uziza Leaf
- ✅ Dried Fish
- ✅ Dried Zobo (Hibiscus)
- ✅ Fufu
- ✅ Grinded Crayfish
- ✅ Ijebu Gari
- ✅ Ogbono Ground Seed
- ✅ Organic Wheat Flour
- ✅ Palm Oil
- ✅ Pepper Soup Spice
- ✅ Plantain Flour

## 🚀 Quick Start Example

Let's say you have images for new products in your Documents folder:

1. **Copy images to project**:
   ```
   Copy from: C:\Users\user\Documents\your-product-images\
   To: public/products/
   ```

2. **Open `add_new_products.sql`**

3. **Add your product** (example):
   ```sql
   INSERT INTO products (id, name, category, description, used_for, featured) 
   VALUES (
     'egusi-seeds',
     'Egusi Seeds (Ground)',
     'Flours',
     'Premium ground egusi (melon) seeds for authentic Nigerian soups.',
     'Essential for making Egusi soup, one of the most popular Nigerian dishes.',
     true
   );

   INSERT INTO product_images (product_id, image_url, display_order) 
   VALUES ('egusi-seeds', '/products/egusi.jpg', 0);

   INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
   VALUES 
     ('egusi-200g', 'egusi-seeds', '200g', 12.00, true),
     ('egusi-500g', 'egusi-seeds', '500g', 28.00, true);
   ```

4. **Run in Supabase SQL Editor**

## 🔧 Troubleshooting

**Images not showing?**
- Check that images are in `public/products/` folder
- Verify the image URL in SQL matches the filename exactly
- Make sure you've run the migration to update image URLs

**Need to update a product?**
```sql
UPDATE products 
SET name = 'New Name', price = 15.99 
WHERE id = 'product-id';
```

**Need to delete a product?**
```sql
DELETE FROM products WHERE id = 'product-id';
-- This will automatically delete associated images and variants
```

## 📞 Next Steps

After adding products via SQL:
1. Connect your React app to Supabase
2. Update `src/lib/data.ts` to fetch from database instead of hardcoded array
3. Test the shop page to see your new products!

Need help? Let me know which products you want to add!
