import {
  Board,
  BoardRequest,
  BoardsResponse,
  GetAllBoardsResponse,
} from '../../types/boards.type';
import { rootApi } from './rootApi';

export const boardsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllBoards: builder.query<GetAllBoardsResponse, void>({
      query: () => ({
        url: 'boards',
        method: 'GET',
      }),
      providesTags: ['Boards'],
    }),
    getBoardById: builder.query<BoardsResponse, number>({
      query: boardId => ({
        url: `boards/${boardId}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [
        { type: 'OneBoard', id: String(id) },
      ],
    }),

    createBoard: builder.mutation<Board, BoardRequest>({
      query: body => ({
        url: 'boards',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Boards'],
    }),
    editBoard: builder.mutation<Board, { boardId: number; body: BoardRequest }>(
      {
        query: ({ boardId, body }) => ({
          url: `boards/${boardId}`,
          method: 'PATCH',
          body,
        }),
        invalidatesTags: ['Boards'],
      }
    ),
    deleteBoard: builder.mutation<void, { boardId: number }>({
      query: ({ boardId }) => ({
        url: `boards/${boardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => {
        console.log('dell board', arg.boardId);
        return ['Boards'];
      },
    }),
  }),
});

export const {
  useGetAllBoardsQuery,
  useGetBoardByIdQuery,
  useCreateBoardMutation,
  useEditBoardMutation,
  useDeleteBoardMutation,
} = boardsApi;
