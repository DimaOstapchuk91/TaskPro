import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';

export interface User {
  id: number;
  name: string;
  email: string;
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
    registerUser: builder.mutation<User, Partial<User>>({
      query: body => ({
        url: 'auth',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.query<User, Partial<User>>({
      query: body => ({
        url: 'auth',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserQuery,
} = taskProApi;
