-- ============================================
-- QUICK GUIDE: How to Add New Products
-- ============================================
-- 
-- 1. Add your product images to: public/products/
-- 2. Copy the template below and fill in your product details
-- 3. Run this SQL in your Supabase SQL Editor
--
-- ============================================

-- TEMPLATE: Copy this for each new product
-- ============================================
/*
-- Step 1: Insert the product
INSERT INTO products (id, name, category, description, used_for, featured) 
VALUES (
  'your-product-id',           -- Unique ID (lowercase, use hyphens)
  'Your Product Name',         -- Display name
  'Category',                  -- One of: Flours, Leaves, Spices, Oils, Grains, Seafood/Fish, Others
  'Product description here.', -- Detailed description
  'What this product is used for.', -- Usage information
  false                        -- Set to true for featured products
);

-- Step 2: Add product image(s)
INSERT INTO product_images (product_id, image_url, display_order) 
VALUES ('your-product-id', '/products/your-image.jpg', 0);
-- Add more images if needed:
-- ('your-product-id', '/products/your-image-2.jpg', 1);

-- Step 3: Add product variants (sizes/prices)
INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
VALUES 
  ('variant-id-1', 'your-product-id', '100g', 5.99, true),
  ('variant-id-2', 'your-product-id', '500g', 20.99, true);
-- If price varies (like "Per piece"), set price to NULL
*/

-- ============================================
-- ADD YOUR NEW PRODUCTS BELOW
-- ============================================

-- Example 1: Adding Jollof Rice Mix
INSERT INTO products (id, name, category, description, used_for, featured) 
VALUES (
  'jollof-rice-mix',
  'Jollof Rice Spice Mix',
  'Spices',
  'Authentic West African jollof rice seasoning blend with the perfect mix of spices.',
  'Makes preparing delicious jollof rice easy. Just add to your rice, tomatoes, and protein for an authentic taste.',
  true
);

INSERT INTO product_images (product_id, image_url, display_order) 
VALUES ('jollof-rice-mix', '/products/jollof-spice.jpg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
VALUES 
  ('jollof-150g', 'jollof-rice-mix', '150g', 8.00, true),
  ('jollof-300g', 'jollof-rice-mix', '300g', 14.00, true);

-- ============================================
-- Example 2: Adding Yam Flour
INSERT INTO products (id, name, category, description, used_for, featured) 
VALUES (
  'yam-flour',
  'Yam Flour (Elubo)',
  'Flours',
  'Premium quality yam flour made from carefully selected yams.',
  'Perfect for making Amala, a smooth and elastic swallow that pairs wonderfully with Ewedu, Gbegiri, and other soups.',
  false
);

INSERT INTO product_images (product_id, image_url, display_order) 
VALUES ('yam-flour', '/products/yam-flour.jpg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
VALUES 
  ('yam-1kg', 'yam-flour', '1kg', 12.00, true),
  ('yam-2kg', 'yam-flour', '2kg', 22.00, true);

-- ============================================
-- NOW ADD YOUR OWN PRODUCTS BELOW:
-- ============================================


