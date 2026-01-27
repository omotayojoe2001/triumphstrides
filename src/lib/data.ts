import { Product, Service, Track, PastShow, CurrencyConfig } from './types';

export const currencies: CurrencyConfig[] = [
  { code: 'CAD', symbol: 'CA$', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.74 },
  { code: 'EUR', symbol: '€', rate: 0.68 },
  { code: 'GBP', symbol: '£', rate: 0.58 },
  { code: 'NGN', symbol: '₦', rate: 1100 },
];

export const products: Product[] = [
  {
    id: 'achi-flour',
    name: 'Achi Flour',
    category: 'Flours',
    description: 'Premium quality Achi flour, finely ground from the Achi seed. A staple thickening agent in Nigerian cuisine.',
    usedFor: 'Used to thicken soups like Oha, Egusi, and Ogbono. Adds a rich, nutty flavor and silky texture to traditional dishes.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'achi-100g', weight: '100g', price: 3, inStock: true },
      { id: 'achi-200g', weight: '200g', price: 5, inStock: true },
    ],
    featured: true,
  },
  {
    id: 'dehydrated-afang',
    name: 'Dehydrated Afang',
    category: 'Leaves',
    description: 'Premium dehydrated Afang leaves, carefully processed to preserve nutrients and authentic flavor.',
    usedFor: 'Essential for preparing the famous Afang soup, a delicacy from the Efik and Ibibio people of Nigeria.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'afang-150g', weight: '150g', price: 10, inStock: true },
    ],
    featured: true,
  },
  {
    id: 'dehydrated-bitter-leaf',
    name: 'Dehydrated Bitter Leaf',
    category: 'Leaves',
    description: 'Traditionally processed bitter leaf, washed and dehydrated for convenience without losing its distinctive taste.',
    usedFor: 'Used in Bitter Leaf soup (Ofe Onugbu), Ndole, and various medicinal preparations.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'bitter-150g', weight: '150g', price: 10, inStock: true },
    ],
  },
  {
    id: 'dehydrated-guava-leaf',
    name: 'Dehydrated Guava Leaf',
    category: 'Leaves',
    description: 'Natural guava leaves, carefully dehydrated to preserve their beneficial properties.',
    usedFor: 'Popular for making herbal tea with potential health benefits including blood sugar management.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'guava-150g', weight: '150g', price: 12, inStock: true },
    ],
  },
  {
    id: 'dehydrated-sage-leaf',
    name: 'Dehydrated Sage Leaf',
    category: 'Leaves',
    description: 'Aromatic sage leaves, naturally dried to maintain their essential oils and flavor.',
    usedFor: 'Used in cooking, herbal teas, and traditional remedies. Adds earthy, savory notes to dishes.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'sage-150g', weight: '150g', price: 10, inStock: true },
    ],
  },
  {
    id: 'dehydrated-soursop-leaf',
    name: 'Dehydrated Soursop Leaf',
    category: 'Leaves',
    description: 'Premium soursop leaves, carefully harvested and dehydrated for maximum potency.',
    usedFor: 'Traditionally used for herbal tea preparations. Known in folk medicine for various wellness applications.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'soursop-150g', weight: '150g', price: 12, inStock: true },
    ],
  },
  {
    id: 'dehydrated-ugu-leaf',
    name: 'Dehydrated Ugu Leaf',
    category: 'Leaves',
    description: 'Fluted pumpkin leaves (Ugu), dehydrated to preserve their rich nutrients and vibrant color.',
    usedFor: 'A versatile vegetable used in many Nigerian soups and stews. Rich in iron and vitamins.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'ugu-150g', weight: '150g', price: 10, inStock: true },
    ],
    featured: true,
  },
  {
    id: 'dehydrated-oziza-leaf',
    name: 'Dehydrated Oziza Leaf',
    category: 'Leaves',
    description: 'Authentic Oziza leaves, known for their unique peppery flavor and aromatic properties.',
    usedFor: 'Essential for pepper soup and other traditional dishes. Adds a distinctive warm, spicy note.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'oziza-150g', weight: '150g', price: 10, inStock: true },
    ],
  },
  {
    id: 'dried-catfish',
    name: 'Dried Catfish',
    category: 'Seafood/Fish',
    description: 'Premium quality dried catfish, traditionally smoked for authentic African cuisine.',
    usedFor: 'Perfect for soups, stews, and traditional recipes. Adds rich, smoky flavor to dishes.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'catfish-unit', weight: 'Per piece', price: null, inStock: true },
    ],
  },
  {
    id: 'fufu',
    name: 'Fufu',
    category: 'Grains',
    description: 'Ready-to-prepare fufu flour, made from the finest quality cassava and plantain.',
    usedFor: 'A beloved West African staple, served with various soups and stews. Just add water and cook.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'fufu-2kg', weight: '2kg', price: 20, inStock: true },
    ],
    featured: true,
  },
  {
    id: 'habanero',
    name: 'Habanero Pepper',
    category: 'Spices',
    description: 'Dried and ground habanero pepper, bringing authentic heat to your dishes.',
    usedFor: 'Add fiery heat to soups, stews, and sauces. A little goes a long way!',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'habanero-150g', weight: '150g', price: 7, inStock: true },
    ],
  },
  {
    id: 'ijebu-gari',
    name: 'Ijebu Gari',
    category: 'Grains',
    description: 'Premium Ijebu-style gari, known for its fine texture and distinctive sour taste.',
    usedFor: 'Enjoy as a snack with groundnuts and sugar, or prepare Eba to accompany soups.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'gari-1kg', weight: '1kg', price: 9, inStock: true },
      { id: 'gari-3kg', weight: '3kg', price: 18, inStock: true },
    ],
  },
  {
    id: 'natural-gray-fish',
    name: 'Natural Rounded Gray Fish',
    category: 'Seafood/Fish',
    description: 'Premium quality dried gray fish, perfect for adding depth to your cooking.',
    usedFor: 'Essential for authentic Nigerian soups and stews. Provides umami-rich flavor.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'grayfish-450g', weight: '450g', price: 20, inStock: true },
      { id: 'grayfish-900g', weight: '900g', price: 40, inStock: true },
    ],
  },
  {
    id: 'organic-wheat-flour',
    name: 'Organic Wheat Flour',
    category: 'Flours',
    description: 'Premium organic wheat flour, perfect for baking and cooking.',
    usedFor: 'Ideal for making swallow, baking bread, pastries, and various recipes.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'wheat-unit', weight: 'Per bag', price: null, inStock: true },
    ],
  },
  {
    id: 'palm-oil',
    name: 'Palm Oil',
    category: 'Oils',
    description: 'Pure, unrefined red palm oil sourced from quality palm fruits.',
    usedFor: 'The heart of West African cooking. Essential for jollof rice, stews, and soups.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'palmoil-1l', weight: '1L', price: 9, inStock: true },
      { id: 'palmoil-2l', weight: '2L', price: 18, inStock: true },
      { id: 'palmoil-4l', weight: '4L', price: 36, inStock: true },
    ],
    featured: true,
  },
  {
    id: 'pepper-soup-spice',
    name: 'Pepper Soup Spice',
    category: 'Spices',
    description: 'Authentic blend of spices for the perfect pepper soup every time.',
    usedFor: 'Makes preparing pepper soup effortless. Just add to your meat or fish stock.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'peppersoup-100g', weight: '100g', price: 2.5, inStock: true },
      { id: 'peppersoup-200g', weight: '200g', price: 5, inStock: true },
    ],
  },
  {
    id: 'plantain-flour',
    name: 'Plantain Flour',
    category: 'Flours',
    description: 'Pure plantain flour, ground from ripe plantains for natural sweetness.',
    usedFor: 'Great for making Amala, baking, or as a healthy flour alternative.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'plantain-1kg', weight: '1kg', price: 10, inStock: true },
      { id: 'plantain-3kg', weight: '3kg', price: 30, inStock: true },
    ],
  },
  {
    id: 'semovita',
    name: 'Semovita',
    category: 'Grains',
    description: 'Premium semolina-based flour for preparing smooth, stretchy swallow.',
    usedFor: 'Prepare delicious semovita swallow to enjoy with your favorite Nigerian soups.',
    images: ['/placeholder.svg'],
    variants: [
      { id: 'semo-unit', weight: 'Per pack', price: null, inStock: true },
    ],
  },
];

export const services: Service[] = [
  {
    id: 'ranch-service',
    title: 'Ranch Service for Busy Professionals',
    description: 'We help manage ranch-related tasks and support services, giving busy professionals peace of mind knowing their property is well-maintained.',
    whoFor: 'Professionals, families, and property owners who need reliable ranch management assistance.',
    includes: [
      'Property oversight and maintenance coordination',
      'Regular check-ins and status reports',
      'Task management and scheduling',
      'Emergency response coordination',
    ],
    icon: 'Tractor',
    cta: 'Get Started',
    ctaAction: 'ranch-service',
  },
  {
    id: 'daycare',
    title: 'Daycare (Ages 0-4)',
    description: 'Safe, nurturing childcare for infants and toddlers ages 0-4 years. We offer flexible options to meet your family\'s needs.',
    whoFor: 'Parents and guardians of children ages 0 to 4 years who need quality childcare.',
    includes: [
      'On-site care at our facility',
      'Home service option available',
      'Supervised sleepover care with clear safety protocols',
      'Developmental activities and learning',
      'Nutritious meals and snacks',
    ],
    icon: 'Baby',
    cta: 'Book a Tour',
    ctaAction: 'daycare',
  },
  {
    id: 'event-catering',
    title: 'Event Catering & Cooking',
    description: 'Authentic African cuisine catering for your special occasions. From intimate gatherings to large celebrations.',
    whoFor: 'Anyone hosting events including birthdays, parties, weddings, corporate functions, and family gatherings.',
    includes: [
      'Custom menu planning',
      'Fresh, quality ingredients',
      'Professional cooking and presentation',
      'Delivery and setup options',
      'Various cuisine options available',
    ],
    icon: 'ChefHat',
    cta: 'Request Quote',
    ctaAction: 'catering',
  },
  {
    id: 'event-coverage',
    title: 'Event Coverage & Support',
    description: 'We support events with coordination and on-ground assistance, ensuring everything runs smoothly.',
    whoFor: 'Event organizers and hosts who need reliable support staff and coordination.',
    includes: [
      'On-site coordination',
      'Guest assistance',
      'Logistics support',
      'Setup and breakdown help',
    ],
    icon: 'Camera',
    cta: 'Learn More',
    ctaAction: 'event-coverage',
  },
  {
    id: 'event-planning',
    title: 'Event Organizing & Planning',
    description: 'Full-service event planning to bring your vision to life. From concept to execution, we handle the details.',
    whoFor: 'Individuals and organizations looking for professional event planning services.',
    includes: [
      'Concept development',
      'Vendor coordination',
      'Timeline management',
      'Budget planning',
      'Day-of coordination',
    ],
    icon: 'CalendarDays',
    cta: 'Plan an Event',
    ctaAction: 'event-planning',
  },
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    description: 'Professional cleaning services for homes and event venues. Leave the cleanup to us.',
    whoFor: 'Homeowners, renters, and event hosts needing thorough cleaning services.',
    includes: [
      'Residential cleaning',
      'Deep cleaning options',
      'Post-event venue cleanup',
      'Regular maintenance cleaning',
    ],
    icon: 'Sparkles',
    cta: 'Book Cleaning',
    ctaAction: 'cleaning',
  },
  {
    id: 'sophia-music',
    title: 'Sophia Music',
    description: 'Live musical performances for your events. Bring the energy and soul of African music to your celebration.',
    whoFor: 'Anyone looking to add live music to their events - weddings, corporate functions, parties, and more.',
    includes: [
      'Live vocal performances',
      'Custom setlist options',
      'Various event types',
      'Professional quality sound',
    ],
    icon: 'Music',
    cta: 'View Sophia Music',
    ctaAction: 'sophia-music',
  },
];

export const sophiaTracks: Track[] = [
  {
    id: 'track-1',
    title: 'African Sunrise',
    coverImage: '/placeholder.svg',
    audioUrl: '',
    duration: '4:32',
  },
  {
    id: 'track-2',
    title: 'Homeland Dreams',
    coverImage: '/placeholder.svg',
    audioUrl: '',
    duration: '3:45',
  },
  {
    id: 'track-3',
    title: 'Joy of Lagos',
    coverImage: '/placeholder.svg',
    audioUrl: '',
    duration: '5:12',
  },
  {
    id: 'track-4',
    title: 'Calgary Nights',
    coverImage: '/placeholder.svg',
    audioUrl: '',
    duration: '4:08',
  },
];

export const sophiaShows: PastShow[] = [
  {
    id: 'show-1',
    eventName: 'Calgary African Festival',
    city: 'Calgary, AB',
    date: 'August 2024',
    photos: ['/placeholder.svg'],
  },
  {
    id: 'show-2',
    eventName: 'Community Unity Celebration',
    city: 'Edmonton, AB',
    date: 'July 2024',
    photos: ['/placeholder.svg'],
  },
  {
    id: 'show-3',
    eventName: 'Heritage Day Concert',
    city: 'Calgary, AB',
    date: 'June 2024',
    photos: ['/placeholder.svg'],
  },
];

export const categories = [
  'All',
  'Flours',
  'Leaves',
  'Spices',
  'Oils',
  'Grains',
  'Seafood/Fish',
  'Others',
];

export const faqs = [
  {
    question: 'Do you offer delivery in Calgary?',
    answer: 'Yes! We offer delivery throughout Calgary and surrounding areas. Delivery fees vary based on location. You can also choose pickup from our location.',
  },
  {
    question: 'How do I book catering for my event?',
    answer: 'Simply fill out our catering request form with your event details, and our team will get back to you within 24 hours with a custom quote.',
  },
  {
    question: 'What ages do you accept for daycare?',
    answer: 'Our daycare service accepts children from 0 to 4 years old. We offer on-site care, home service, and supervised sleepover options with strict safety protocols.',
  },
  {
    question: 'How can I book Sophia for my event?',
    answer: 'Visit our Sophia Music page and fill out the booking form with your event details. We\'ll respond with availability and pricing within 48 hours.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards through Stripe and e-Transfer. All payments are processed securely.',
  },
  {
    question: 'Can I return products if I\'m not satisfied?',
    answer: 'Due to the nature of food products, returns are limited. Please contact us within 24 hours of receiving your order if there are any issues.',
  },
];
