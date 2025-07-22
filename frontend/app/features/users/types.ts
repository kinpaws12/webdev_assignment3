export type SideBarSection = 'User Information' | 'Event Bookings' | 'Calendar' | 'Chat Room';

export interface ProfileMainContentProps {
  section: SideBarSection;
}

export interface User {
  _id?: string,
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'USER' | 'ORGANIZER' |'ADMIN';
  status: 'Active' | 'Inactive';
  createdAt?: Date;
  updatedAt: Date;
  deleteAt: Date;
}

export interface UpdateAccountInfo {
  id: string,
  updateFields: {
    name?: string;
    email?: string;
    phone?: string;
  }
}

export type UpdateAccountSuccessPayload = Omit<User, 'createdAt'>;

export type DeleteAccountSuccessPayload = Pick<User, 'id' | 'name' | 'role' | 'deleteAt'>