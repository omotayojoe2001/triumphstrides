-- Insert existing products from data.ts
-- Note: Update image URLs to match your actual image files in public/products/

-- Achi Flour
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('achi-flour', 'Achi Flour', 'Flours', 'Premium quality Achi flour, finely ground from the Achi seed. A staple thickening agent in Nigerian cuisine.', 'Used to thicken soups like Oha, Egusi, and Ogbono. Adds a rich, nutty flavor and silky texture to traditional dishes.', true);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('achi-flour', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('achi-100g', 'achi-flour', '100g', 3.00, true),
('achi-200g', 'achi-flour', '200g', 5.00, true);

-- Dehydrated Afang
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dehydrated-afang', 'Dehydrated Afang', 'Leaves', 'Premium dehydrated Afang leaves, carefully processed to preserve nutrients and authentic flavor.', 'Essential for preparing the famous Afang soup, a delicacy from the Efik and Ibibio people of Nigeria.', true);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dehydrated-afang', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('afang-150g', 'dehydrated-afang', '150g', 10.00, true);

-- Dehydrated Bitter Leaf
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dehydrated-bitter-leaf', 'Dehydrated Bitter Leaf', 'Leaves', 'Traditionally processed bitter leaf, washed and dehydrated for convenience without losing its distinctive taste.', 'Used in Bitter Leaf soup (Ofe Onugbu), Ndole, and various medicinal preparations.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dehydrated-bitter-leaf', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('bitter-150g', 'dehydrated-bitter-leaf', '150g', 10.00, true);

-- Dehydrated Guava Leaf
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dehydrated-guava-leaf', 'Dehydrated Guava Leaf', 'Leaves', 'Natural guava leaves, carefully dehydrated to preserve their beneficial properties.', 'Popular for making herbal tea with potential health benefits including blood sugar management.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dehydrated-guava-leaf', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('guava-150g', 'dehydrated-guava-leaf', '150g', 12.00, true);

-- Dehydrated Sage Leaf
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dehydrated-sage-leaf', 'Dehydrated Sage Leaf', 'Leaves', 'Aromatic sage leaves, naturally dried to maintain their essential oils and flavor.', 'Used in cooking, herbal teas, and traditional remedies. Adds earthy, savory notes to dishes.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dehydrated-sage-leaf', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('sage-150g', 'dehydrated-sage-leaf', '150g', 10.00, true);

-- Dehydrated Soursop Leaf
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dehydrated-soursop-leaf', 'Dehydrated Soursop Leaf', 'Leaves', 'Premium soursop leaves, carefully harvested and dehydrated for maximum potency.', 'Traditionally used for herbal tea preparations. Known in folk medicine for various wellness applications.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dehydrated-soursop-leaf', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('soursop-150g', 'dehydrated-soursop-leaf', '150g', 12.00, true);

-- Dehydrated Ugu Leaf
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dehydrated-ugu-leaf', 'Dehydrated Ugu Leaf', 'Leaves', 'Fluted pumpkin leaves (Ugu), dehydrated to preserve their rich nutrients and vibrant color.', 'A versatile vegetable used in many Nigerian soups and stews. Rich in iron and vitamins.', true);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dehydrated-ugu-leaf', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('ugu-150g', 'dehydrated-ugu-leaf', '150g', 10.00, true);

-- Dehydrated Oziza Leaf
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dehydrated-oziza-leaf', 'Dehydrated Oziza Leaf', 'Leaves', 'Authentic Oziza leaves, known for their unique peppery flavor and aromatic properties.', 'Essential for pepper soup and other traditional dishes. Adds a distinctive warm, spicy note.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dehydrated-oziza-leaf', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('oziza-150g', 'dehydrated-oziza-leaf', '150g', 10.00, true);

-- Dried Catfish
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('dried-catfish', 'Dried Catfish', 'Seafood/Fish', 'Premium quality dried catfish, traditionally smoked for authentic African cuisine.', 'Perfect for soups, stews, and traditional recipes. Adds rich, smoky flavor to dishes.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('dried-catfish', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('catfish-unit', 'dried-catfish', 'Per piece', NULL, true);

-- Fufu
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('fufu', 'Fufu', 'Grains', 'Ready-to-prepare fufu flour, made from the finest quality cassava and plantain.', 'A beloved West African staple, served with various soups and stews. Just add water and cook.', true);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('fufu', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('fufu-2kg', 'fufu', '2kg', 20.00, true);

-- Habanero Pepper
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('habanero', 'Habanero Pepper', 'Spices', 'Dried and ground habanero pepper, bringing authentic heat to your dishes.', 'Add fiery heat to soups, stews, and sauces. A little goes a long way!', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('habanero', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('habanero-150g', 'habanero', '150g', 7.00, true);

-- Ijebu Gari
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('ijebu-gari', 'Ijebu Gari', 'Grains', 'Premium Ijebu-style gari, known for its fine texture and distinctive sour taste.', 'Enjoy as a snack with groundnuts and sugar, or prepare Eba to accompany soups.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('ijebu-gari', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('gari-1kg', 'ijebu-gari', '1kg', 9.00, true),
('gari-3kg', 'ijebu-gari', '3kg', 18.00, true);

-- Natural Rounded Gray Fish
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('natural-gray-fish', 'Natural Rounded Gray Fish', 'Seafood/Fish', 'Premium quality dried gray fish, perfect for adding depth to your cooking.', 'Essential for authentic Nigerian soups and stews. Provides umami-rich flavor.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('natural-gray-fish', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('grayfish-450g', 'natural-gray-fish', '450g', 20.00, true),
('grayfish-900g', 'natural-gray-fish', '900g', 40.00, true);

-- Organic Wheat Flour
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('organic-wheat-flour', 'Organic Wheat Flour', 'Flours', 'Premium organic wheat flour, perfect for baking and cooking.', 'Ideal for making swallow, baking bread, pastries, and various recipes.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('organic-wheat-flour', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('wheat-unit', 'organic-wheat-flour', 'Per bag', NULL, true);

-- Palm Oil
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('palm-oil', 'Palm Oil', 'Oils', 'Pure, unrefined red palm oil sourced from quality palm fruits.', 'The heart of West African cooking. Essential for jollof rice, stews, and soups.', true);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('palm-oil', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('palmoil-1l', 'palm-oil', '1L', 9.00, true),
('palmoil-2l', 'palm-oil', '2L', 18.00, true),
('palmoil-4l', 'palm-oil', '4L', 36.00, true);

-- Pepper Soup Spice
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('pepper-soup-spice', 'Pepper Soup Spice', 'Spices', 'Authentic blend of spices for the perfect pepper soup every time.', 'Makes preparing pepper soup effortless. Just add to your meat or fish stock.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('pepper-soup-spice', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('peppersoup-100g', 'pepper-soup-spice', '100g', 2.50, true),
('peppersoup-200g', 'pepper-soup-spice', '200g', 5.00, true);

-- Plantain Flour
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('plantain-flour', 'Plantain Flour', 'Flours', 'Pure plantain flour, ground from ripe plantains for natural sweetness.', 'Great for making Amala, baking, or as a healthy flour alternative.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('plantain-flour', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('plantain-1kg', 'plantain-flour', '1kg', 10.00, true),
('plantain-3kg', 'plantain-flour', '3kg', 30.00, true);

-- Semovita
INSERT INTO products (id, name, category, description, used_for, featured) VALUES
('semovita', 'Semovita', 'Grains', 'Premium semolina-based flour for preparing smooth, stretchy swallow.', 'Prepare delicious semovita swallow to enjoy with your favorite Nigerian soups.', false);

INSERT INTO product_images (product_id, image_url, display_order) VALUES
('semovita', '/placeholder.svg', 0);

INSERT INTO product_variants (id, product_id, weight, price, in_stock) VALUES
('semo-unit', 'semovita', 'Per pack', NULL, true);
