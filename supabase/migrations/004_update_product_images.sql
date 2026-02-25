-- Update existing products with actual image URLs
-- This replaces the placeholder.svg with real product images

-- Update Dehydrated Bitter Leaf
UPDATE product_images SET image_url = '/products/dehydratedbitterleaf.jpg' 
WHERE product_id = 'dehydrated-bitter-leaf';

-- Update Dehydrated Guava Leaf
UPDATE product_images SET image_url = '/products/dehydratedguava.jpg' 
WHERE product_id = 'dehydrated-guava-leaf';

-- Update Dehydrated Soursop Leaf
UPDATE product_images SET image_url = '/products/dehydratedsourspop.jpg' 
WHERE product_id = 'dehydrated-soursop-leaf';

-- Update Dehydrated Ugu Leaf
UPDATE product_images SET image_url = '/products/dehydratedugu.jpg' 
WHERE product_id = 'dehydrated-ugu-leaf';

-- Update Dehydrated Oziza Leaf
UPDATE product_images SET image_url = '/products/dehydrateduziza.jpg' 
WHERE product_id = 'dehydrated-oziza-leaf';

-- Update Dried Catfish (using dried fish image)
UPDATE product_images SET image_url = '/products/driedfish.jpg' 
WHERE product_id = 'dried-catfish';

-- Update Fufu
UPDATE product_images SET image_url = '/products/fufu.jpg' 
WHERE product_id = 'fufu';

-- Update Ijebu Gari
UPDATE product_images SET image_url = '/products/ijebugarri.jpg' 
WHERE product_id = 'ijebu-gari';

-- Update Natural Rounded Gray Fish (using grinded crayfish)
UPDATE product_images SET image_url = '/products/grindedcrayfish.jpg' 
WHERE product_id = 'natural-gray-fish';

-- Update Organic Wheat Flour
UPDATE product_images SET image_url = '/products/organicwheatflour.jpg' 
WHERE product_id = 'organic-wheat-flour';

-- Update Palm Oil
UPDATE product_images SET image_url = '/products/palmoil(small).jpg' 
WHERE product_id = 'palm-oil';

-- Update Pepper Soup Spice
UPDATE product_images SET image_url = '/products/peppersoupspice.jpg' 
WHERE product_id = 'pepper-soup-spice';

-- Update Plantain Flour
UPDATE product_images SET image_url = '/products/plantainflour.jpg' 
WHERE product_id = 'plantain-flour';
