export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const PLACEHOLDER_IMAGE = 'https://picsum.photos/400/400';

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Chamomile Tea',
    description: 'Calming herbal tea blend for relaxation',
    price: 12.99,
    image: PLACEHOLDER_IMAGE,
    category: 'Teas'
  },
  {
    id: '2',
    name: 'Lavender Essential Oil',
    description: 'Pure essential oil for aromatherapy',
    price: 18.99,
    image: PLACEHOLDER_IMAGE,
    category: 'Essential Oils'
  },
  {
    id: '3',
    name: 'Natural Sleep Aid',
    description: 'Herbal supplement for better sleep',
    price: 24.99,
    image: PLACEHOLDER_IMAGE,
    category: 'Supplements'
  },
  {
    id: '4',
    name: 'Stress Relief Blend',
    description: 'Natural remedy for stress and anxiety',
    price: 29.99,
    image: PLACEHOLDER_IMAGE,
    category: 'Supplements'
  }
];