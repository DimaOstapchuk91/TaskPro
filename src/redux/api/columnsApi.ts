import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';
import { Column } from '../../types/culumn.type';

export const columnsApi = createApi({
  reducerPath: 'columnsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Boards', 'Columns'],
  endpoints: builder => ({
    createColumn: builder.mutation<Column, { boardId: number; title: string }>({
      query: ({ boardId, title }) => ({
        url: `boards/${boardId}/columns`,
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Boards', id: arg.boardId },
      ],
    }),
    editColumn: builder.mutation<
      Column,
      { boardId: number; columnId: number; title: string }
    >({
      query: ({ boardId, columnId, title }) => ({
        url: `boards/${boardId}/columns/${columnId}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Boards', id: arg.boardId },
      ],
    }),
    deleteColumn: builder.mutation<void, { boardId: number; columnId: number }>(
      {
        query: ({ boardId, columnId }) => ({
          url: `boards/${boardId}/columns/${columnId}`,
          method: 'DELETE',
        }),
        invalidatesTags: (result, error, arg) => [
          { type: 'Boards', id: arg.boardId },
        ],
      }
    ),
  }),
});

export const {
  useCreateColumnMutation,
  useEditColumnMutation,
  useDeleteColumnMutation,
} = columnsApi;
