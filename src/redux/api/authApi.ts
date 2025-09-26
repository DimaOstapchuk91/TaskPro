import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';

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

type LoginQuery = Pick<AuthRequest, 'email' | 'password'>;

export interface LoginResponce {
  data: { accessToken: string };
}

export const taskProApi = createApi({
  reducerPath: 'taskProApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: builder => ({
    getUserById: builder.query<GetUserRequest, void>({
      query: () => ({
        url: 'auth/profile',
        method: 'GET',
      }),
    }),
    registerUser: builder.mutation<AuthRequest, Partial<AuthRequest>>({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation<LoginResponce, Partial<LoginQuery>>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    loggedOut: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLoggedOutMutation,
} = taskProApi;
