import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CloudinaryData {
  id: string;
  filename: string;
  url: string;
}

type CloudinaryBack = {
  name: string;
  desk?: CloudinaryData;
  tab?: CloudinaryData;
  mob?: CloudinaryData;
  thumb?: CloudinaryData;
};

type Cloudinaryresponse = {
  data: CloudinaryBack[];
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
