export type SeatStatus = "available" | "vip" | "booked" | "selected";

export const enum EventStatus {
  Pending     = 'PENDING',
  Approved    = 'APPROVED',
  Rejected    = 'REJECTED',
  Confirmed   = 'CONFIRMED',
  Cancelled   = 'CANCELLED',
  Booked      = 'BOOKED',
  Waitlisted  = 'WAITLISTED',
}

export const enum EventBookingStatus {

}

export interface TheEvent {
  _id: string,
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

/** Organizer object as returned by the populated query */
export interface OrganizerLite {
  _id: string;
  name: string;
}

export interface UserEvent extends Omit<TheEvent, "id" | "organizer"> {
  _id: string;
  organizer_id: OrganizerLite;
  __v?: number;
}

export type UserEvents = UserEvent[];


// All events
export type Events = TheEvent[];

// Create
export type CreateEventBody = Omit<TheEvent, '_id' | 'createdAt' | 'updatedAt' | 'status'>;
// Update
export type UpdateAnEvent = {
  _id: string,
  updateFields: Omit<TheEvent, '_id' | 'createdAt' | 'updatedAt' | 'organizer'>
}
export type UpdatedEvent = TheEvent
// Delete
export type DeletedEvent = Pick<TheEvent, '_id' | 'title'>;

export interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  onClick?: (title: string) => void;
} 
