export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'creative',
    name: 'Creative',
    description: 'Photography, Design, and Art',
    icon: '🎨'
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Programming and Development',
    icon: '💻'
  },
  {
    id: 'data',
    name: 'Data',
    description: 'Data Science and Analytics',
    icon: '📊'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Digital Marketing and Growth',
    icon: '📈'
  },
  {
    id: 'design',
    name: 'Design',
    description: 'UI/UX and Product Design',
    icon: '✨'
  }
];