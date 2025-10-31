import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';
import {
  AuthRequest,
  GetUserRequest,
  LoginQuery,
  LoginResponce,
} from '../../types/user.type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: builder => ({
    getUserById: builder.query<GetUserRequest, void>({
      query: () => ({
        url: 'auth/profile',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    registerUser: builder.mutation<AuthRequest, AuthRequest>({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),

    loginUser: builder.mutation<LoginResponce, LoginQuery>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
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
} = authApi;
