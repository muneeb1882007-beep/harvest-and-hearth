import { MenuItem, FarmPartner, Review } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Roasted Wild Mushroom Sourdough Toast',
    description: 'Freshly baked hearth sourdough, chive cashew ricotta, roasted chanterelles & oyster mushrooms, drizzled with white truffle oil.',
    price: 16,
    category: 'starters',
    tags: ['Vegan', 'Local Farm'],
    farmSource: 'Green Valley Organic Mushrooms & Valley Hearth Bakery',
    imageEmoji: '🍄',
    calories: 420,
    featured: true
  },
  {
    id: 'm2',
    name: 'Charred Heirloom Pumpkin Soup',
    description: 'Slow-roasted Hokkaido pumpkin, coconut cream, toasted pumpkin seed brittle, crispy sage, and warm spice oil.',
    price: 14,
    category: 'starters',
    tags: ['Vegan', 'GF', 'Local Farm'],
    farmSource: 'Sunburst Heirloom Farms (8 miles away)',
    imageEmoji: '🥣',
    calories: 310
  },
  {
    id: 'm3',
    name: '12-Hour Braised Heritage Pork Shoulder',
    description: 'Pasture-raised farm pork shoulder, caramelized apple & cider reduction, served over creamy wood-smoked stone-ground polenta.',
    price: 32,
    category: 'mains',
    tags: ['GF', 'Local Farm'],
    farmSource: 'Heritage Pastures Livestock Co.',
    imageEmoji: '🍖',
    calories: 840,
    featured: true
  },
  {
    id: 'm4',
    name: 'Wood-Fired Cedar Plank Pacific Salmon',
    description: 'Wild salmon roasted on aromatic cedar, accompanied by maple mustard glaze, hearth-charred root vegetables, and wilted kale.',
    price: 34,
    category: 'mains',
    tags: ['GF', 'Local Farm'],
    farmSource: 'Riverbend Sustainable Catch & Oakridge Organics',
    imageEmoji: '🐟',
    calories: 680,
    featured: true
  },
  {
    id: 'm5',
    name: 'Cast-Iron Truffle & Squash Gnocchi',
    description: 'House-made potato and buttercup squash gnocchi, brown butter, crispy fried sage, aged Gruyère cheese, and toasted walnuts.',
    price: 28,
    category: 'mains',
    tags: ['Vegetarian', 'Local Farm'],
    farmSource: 'Mountain View Dairy & Organic Potato Co-op',
    imageEmoji: '🥟',
    calories: 720
  },
  {
    id: 'm6',
    name: 'Warm Orchard Apple & Cinnamon Galette',
    description: 'Honeycrisp apples baked in flaky butter crust, topped with house-made bourbon vanilla bean gelato and dark caramel.',
    price: 14,
    category: 'bakery',
    tags: ['Vegetarian', 'Local Farm'],
    farmSource: 'Riverbend Apple Orchard & Creamery',
    imageEmoji: '🥧',
    calories: 510,
    featured: true
  },
  {
    id: 'm7',
    name: 'Hearth Wood-Fired Sourdough Boule',
    description: 'Naturally leavened 36-hour sourdough loaf served warm with cultured sea salt farm butter & roasted garlic bulb.',
    price: 10,
    category: 'bakery',
    tags: ['Vegetarian', 'Local Farm'],
    farmSource: 'Valley Hearth Bakery & Mountain View Creamery',
    imageEmoji: '🍞',
    calories: 380
  },
  {
    id: 'm8',
    name: 'Smoked Spiced Apple Cider & Bourbon',
    description: 'Freshly pressed warm apple cider, charred cinnamon stick, smoked maple syrup, and small-batch Kentucky bourbon.',
    price: 15,
    category: 'drinks',
    tags: ['GF', 'Local Farm'],
    farmSource: 'Orchard Hill Cidery',
    imageEmoji: '🍹',
    calories: 210
  },
  {
    id: 'm9',
    name: 'Wild Rosemary & Blackberry Botanical Tonic',
    description: 'Muddled wild blackberries, garden rosemary syrup, fresh lemon juice, sparkling spring water.',
    price: 9,
    category: 'drinks',
    tags: ['Vegan', 'GF', 'Local Farm'],
    farmSource: 'Harvest & Hearth Kitchen Garden',
    imageEmoji: '🍷',
    calories: 90
  }
];

export const FARM_PARTNERS: FarmPartner[] = [
  {
    id: 'f1',
    name: 'Sunburst Organic Produce',
    distance: '6 miles away',
    produces: 'Heirloom Squash, Tomatoes & Leafy Greens',
    description: 'Family-run pesticide-free farm utilizing regenerative soil practices for over three generations.',
    imageEmoji: '🚜'
  },
  {
    id: 'f2',
    name: 'Heritage Pastures Livestock',
    distance: '14 miles away',
    produces: 'Pasture-Raised Heritage Meats & Poultry',
    description: 'Ethical free-range farming with 100% grass-fed rotation grazing.',
    imageEmoji: '🐄'
  },
  {
    id: 'f3',
    name: 'Riverbend Apple Orchard',
    distance: '18 miles away',
    produces: 'Honeycrisp Apples, Pears & Raw Honey',
    description: 'Sustainably cultivated fruit orchards providing fresh press juices and honeycombs.',
    imageEmoji: '🍎'
  },
  {
    id: 'f4',
    name: 'Mountain View Artisan Dairy',
    distance: '22 miles away',
    produces: 'Cultured Farm Butter, Cream & Aged Cheeses',
    description: 'Small batch creamery producing rich butter and raw milk cheeses daily.',
    imageEmoji: '🧀'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Elena Vance',
    role: 'Food Critic & Local Resident',
    rating: 5,
    comment: 'The 12-hour braised pork shoulder paired with wood-smoked polenta is pure magic. You can taste the genuine farm-to-table care in every bite!',
    date: '2 days ago'
  },
  {
    id: 'r2',
    author: 'Marcus Brody',
    role: 'Verified Diner',
    rating: 5,
    comment: 'Cozy hearth atmosphere, incredibly friendly staff, and the sourdough galette is unmissable. Highly recommend reserving in advance!',
    date: '1 week ago'
  },
  {
    id: 'r3',
    author: 'Sarah Jenkins',
    role: 'Local Foodie',
    rating: 5,
    comment: 'Love knowing exactly which farm my food came from. The roasted wild mushroom toast is hands down the best starter in town.',
    date: '2 weeks ago'
  }
];
