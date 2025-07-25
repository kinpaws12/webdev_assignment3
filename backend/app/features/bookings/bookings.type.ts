import { Types } from 'mongoose';

export enum BookingStatus {
  Booked = 'BOOKED',
  Cancelled = 'CANCELLED',
  Waitlisted = 'WAITLISTED',
}

interface Booking {
  eventId: Types.ObjectId;
  userId: Types.ObjectId;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
}