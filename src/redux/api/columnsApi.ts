import { ColumnRequest } from '../../types/culumn.type';
import { rootApi } from './rootApi';

export const columnsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    createColumn: builder.mutation<
      ColumnRequest,
      { boardId: number; title: string }
    >({
      query: ({ boardId, title }) => ({
        url: `boards/${boardId}/columns`,
        method: 'POST',
        body: { title },
      }),

      invalidatesTags: (result, error, arg) => {
        console.log('id column api', arg);
        console.log('result column api', result);
        return [{ type: 'OneBoard', id: String(arg.boardId) }];
      },
    }),
    editColumn: builder.mutation<
      ColumnRequest,
      { boardId: number; columnId: number; title: string }
    >({
      query: ({ boardId, columnId, title }) => ({
        url: `boards/${boardId}/columns/${columnId}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: (result, error, arg) => {
        console.log('id column api', arg);
        return [{ type: 'OneBoard', id: String(arg.boardId) }];
      },
    }),
    deleteColumn: builder.mutation<void, { boardId: number; columnId: number }>(
      {
        query: ({ boardId, columnId }) => ({
          url: `boards/${boardId}/columns/${columnId}`,
          method: 'DELETE',
        }),
        invalidatesTags: (result, error, arg) => [
          { type: 'OneBoard', id: String(arg.boardId) },
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
