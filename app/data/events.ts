export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  icon: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Photography Workshop',
    description: 'Hands-on workshop covering advanced photography techniques',
    date: 'March 15, 2024',
    time: '10:00 AM - 2:00 PM',
    icon: '📸'
  },
  {
    id: '2',
    title: 'Web Dev Conference',
    description: 'Annual conference featuring the latest web technologies',
    date: 'April 5, 2024',
    time: '9:00 AM - 6:00 PM',
    icon: '💻'
  },
  {
    id: '3',
    title: 'Data Science Summit',
    description: 'Expert talks on AI, ML, and data analytics',
    date: 'April 20, 2024',
    time: '10:00 AM - 5:00 PM',
    icon: '📊'
  }
];