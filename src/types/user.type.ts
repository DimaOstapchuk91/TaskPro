export interface User {
  id: number;
  name: string;
  email: string;
  avatar_url: string | null;
  theme: string;
}

export interface AuthRequest {
  name: string;
  email: string;
  password: string;
}

export type GetUserRequest = {
  data: User;
  message: string;
  status: number;
};

export type LoginQuery = Pick<AuthRequest, 'email' | 'password'>;

export interface LoginResponce {
  data: { accessToken: string };
}
