import type { EventProperties } from '~/types/events';

// Mock data for testing the calendar
export const mockEvents: EventProperties[] = [
  {
    id: 1,
    title: 'NYC Music Fest',
    date: new Date('2025-03-10'),
    time: '10:00 AM',
    location: 'Central Park, NYC',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    description: 'A fantastic music festival featuring top artists from around the world.',
    category: 'Music',
    price: 75,
    isFeatured: true,
    isActive: true,
    isDeleted: false,
  },
  {
    id: 2,
    title: 'Picasso & Modern Art Exhibit',
    date: new Date('2025-03-12'),
    time: '3:00 PM',
    location: 'ABC Gallery, Paris',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Exclusive exhibition featuring works by Picasso and other modern artists.',
    category: 'Art',
    price: 25,
    isFeatured: false,
    isActive: true,
    isDeleted: false,
  },
  {
    id: 3,
    title: 'Global Tech Innovators Summit',
    date: new Date('2025-03-15'),
    time: '9:00 AM',
    location: 'Innovation Hub, New York',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Join tech leaders and innovators for a day of insights and networking.',
    category: 'Technology',
    price: 150,
    isFeatured: true,
    isActive: true,
    isDeleted: false,
  },
  {
    id: 4,
    title: 'Retro Night',
    date: new Date('2025-03-16'),
    time: '7:00 PM',
    location: 'Country Club, New York',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    description: 'A night of classic hits and retro vibes.',
    category: 'Entertainment',
    price: 45,
    isFeatured: false,
    isActive: true,
    isDeleted: false,
  },
  {
    id: 5,
    title: 'Yoga Workshop',
    date: new Date('2025-03-20'),
    time: '6:00 AM',
    location: 'Wellness Center, Brooklyn',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    description: 'Start your day with a rejuvenating yoga session.',
    category: 'Wellness',
    price: 30,
    isFeatured: false,
    isActive: true,
    isDeleted: false,
  },
  {
    id: 6,
    title: 'Food & Wine Festival',
    date: new Date('2025-03-22'),
    time: '2:00 PM',
    location: 'Downtown Plaza, Manhattan',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    description: 'Sample the best food and wine from local restaurants and wineries.',
    category: 'Food & Drink',
    price: 85,
    isFeatured: true,
    isActive: true,
    isDeleted: false,
  },
];

export class CalendarService {
  // Get all events
  static async getEvents(): Promise<EventProperties[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockEvents;
  }

  // Get events for a specific month
  static async getEventsForMonth(year: number, month: number): Promise<EventProperties[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
  }

  // Get events for a specific date
  static async getEventsForDate(date: Date): Promise<EventProperties[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  }

  // Get upcoming events (next 30 days)
  static async getUpcomingEvents(): Promise<EventProperties[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    const today = new Date();
    const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    
    return mockEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= thirtyDaysFromNow;
    });
  }

  // Search events by title or category
  static async searchEvents(query: string): Promise<EventProperties[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const lowerQuery = query.toLowerCase();
    
    return mockEvents.filter(event => 
      event.title.toLowerCase().includes(lowerQuery) ||
      event.category.toLowerCase().includes(lowerQuery) ||
      event.location.toLowerCase().includes(lowerQuery)
    );
  }
} 