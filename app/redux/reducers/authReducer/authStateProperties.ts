import type { User, SignupValues, LoginValues } from "~/features/auth/types/auth_types";

export default interface AuthState {
    pendingSignup?: SignupValues; //form data to be sent
    pendingLogin?: LoginValues;

    currentUsers: User | null;
    jwtToken: string | null;
    
    loading: boolean;
    error: string | null;
}