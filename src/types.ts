export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'bakery' | 'drinks';
  tags: ('Vegan' | 'Vegetarian' | 'GF' | 'Local Farm')[];
  farmSource: string;
  imageEmoji: string;
  calories?: number;
  featured?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'Hearth Dining Room' | 'Covered Garden Patio' | 'Chef\'s Counter';
  notes?: string;
}

export interface FarmPartner {
  id: string;
  name: string;
  distance: string;
  produces: string;
  description: string;
  imageEmoji: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}
