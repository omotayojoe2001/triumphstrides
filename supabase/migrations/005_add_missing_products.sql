-- Add products that exist in images but not in the current product list

-- Dried Zobo (Hibiscus)
INSERT INTO products (id, name, category, description, used_for, featured) 
VALUES (
  'dried-zobo',
  'Dried Zobo (Hibiscus)',
  'Leaves',
  'Premium quality dried hibiscus flowers (Zobo), rich in antioxidants and vitamin C.',
  'Perfect for making refreshing Zobo drink (hibiscus tea). Can be served hot or cold with natural sweeteners and spices.',
  true
);

INSERT INTO product_images (product_id, image_url, display_order) 
VALUES ('dried-zobo', '/products/driedzobo.jpg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
VALUES 
  ('zobo-200g', 'dried-zobo', '200g', 8.00, true),
  ('zobo-500g', 'dried-zobo', '500g', 18.00, true);

-- Ogbono Ground Seed
INSERT INTO products (id, name, category, description, used_for, featured) 
VALUES (
  'ogbono-ground-seed',
  'Ogbono Ground Seed',
  'Flours',
  'Finely ground Ogbono (African bush mango) seeds, essential for authentic Nigerian cuisine.',
  'Perfect for making the classic Ogbono soup, known for its unique draw and rich flavor. A must-have for traditional African cooking.',
  true
);

INSERT INTO product_images (product_id, image_url, display_order) 
VALUES ('ogbono-ground-seed', '/products/ogbonogroundseed.jpg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
VALUES 
  ('ogbono-150g', 'ogbono-ground-seed', '150g', 12.00, true),
  ('ogbono-300g', 'ogbono-ground-seed', '300g', 22.00, true);

-- Grinded Crayfish
INSERT INTO products (id, name, category, description, used_for, featured) 
VALUES (
  'grinded-crayfish',
  'Grinded Crayfish',
  'Seafood/Fish',
  'Premium quality dried and ground crayfish, a cornerstone of authentic West African cuisine.',
  'Essential seasoning for soups, stews, jollof rice, and traditional dishes. Adds rich umami flavor and seafood depth.',
  true
);

INSERT INTO product_images (product_id, image_url, display_order) 
VALUES ('grinded-crayfish', '/products/grindedcrayfish.jpg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) 
VALUES 
  ('crayfish-200g', 'grinded-crayfish', '200g', 15.00, true),
  ('crayfish-500g', 'grinded-crayfish', '500g', 35.00, true),
  ('crayfish-1kg', 'grinded-crayfish', '1kg', 65.00, true);
