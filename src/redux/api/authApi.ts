import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthRequest {
  name: string;
  email: string;
  password: string;
}

type LoginQuery = Pick<AuthRequest, 'email' | 'password'>;

export interface LoginResponce {
  data: { accessToken: string };
}

export const taskProApi = createApi({
  reducerPath: 'taskProApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: builder => ({
    getUserById: builder.query<User, number>({
      query: id => `auth/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
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
  }),
});

export const {
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = taskProApi;
