// features/usr_auth/service/authApi.ts
import { env } from "~/config/env";
import type { SignupValues, LoginValues } from "../types/auth_types";

export async function signup(formData: SignupValues) {
  const res = await fetch(`${env.VITE_API_BASE_URL}${env.VITE_API_PREFIX}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) 
    throw new Error(`Signup failed (${res.status})`);
  return res.json();
}

export async function login(formData: LoginValues) {
  const res = await fetch(`${env.VITE_API_BASE_URL}${env.VITE_API_PREFIX}/auth/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) 
    throw new Error(`Login failed (${res.status})`);
  
  return res.json();
}