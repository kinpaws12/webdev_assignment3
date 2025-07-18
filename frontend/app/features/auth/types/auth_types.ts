export interface SignupValues {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: string;
  confirmPassword: string;
  receiveUpdates?: boolean;
};

export interface LoginValues {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export interface LoginSuccessPayload {
  user:  User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  createdAt: Date;
  loginTime: string; // TO-DO: add to user model
  // current account status
  status: 'pending' | 'Active' | 'suspended';
  // permission level
  role: 'USER' | 'ORGANIZER' |'ADMIN';
}

export interface AuthFormProps {
  mode: 'signup' | 'login';
}


