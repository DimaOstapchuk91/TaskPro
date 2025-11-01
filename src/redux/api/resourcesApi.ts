import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Background } from '../../types/boards.type';

type Cloudinaryresponse = {
  data: Background[];
  message: string;
  status: number;
};

export const resourcesApi = createApi({
  reducerPath: 'resource',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Resource'],
  endpoints: builder => ({
    getResources: builder.query<Cloudinaryresponse, void>({
      query: () => 'resources/icons',
      providesTags: ['Resource'],
    }),
  }),
});

export const { useGetResourcesQuery } = resourcesApi;
