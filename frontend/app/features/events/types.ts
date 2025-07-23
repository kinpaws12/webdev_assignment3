export type SeatStatus = "available" | "vip" | "booked" | "selected";

export interface TheEvent {
  id: string,
  title: string;
  description?: string;
  imageUrl?: string;
  category: string;
  date: Date;
  location: string;
  capacity?: number;
  costs: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
  organizer: string;
  createdAt: Date;
  updatedAt: Date
}

// All events
export type Events = TheEvent[];

// Create
export type CreateEventBody = Omit<TheEvent, 'id' | 'createdAt' | 'updatedAt' | 'status'>;
// Update
export type UpdateAnEvent = {
  id: string,
  updateFields: Omit<TheEvent, 'id' | 'createdAt' | 'updatedAt' | 'organizer'>
}
export type UpdatedEvent = TheEvent
// Delete
export type DeletedEvent = Pick<TheEvent, 'id' | 'title'>;

export interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  onClick?: (title: string) => void;
} 
