import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const taskProApi = createApi({
  reducerPath: 'taskProApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => 'auth',
      providesTags: ['User'],
    }),
    getUserById: builder.query<User, number>({
      query: id => `auth/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: body => ({
        url: 'auth',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation } =
  taskProApi;
