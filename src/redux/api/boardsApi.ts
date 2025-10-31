import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';
import {
  Board,
  BoardRequest,
  BoardsResponse,
  GetAllBoardsResponse,
} from '../../types/boards.type';

export const boardsApi = createApi({
  reducerPath: 'boardsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Boards'],
  endpoints: builder => ({
    getAllBoards: builder.query<GetAllBoardsResponse, void>({
      query: () => ({
        url: 'boards',
        method: 'GET',
      }),
      providesTags: ['Boards'],
    }),
    getBoardById: builder.query<BoardsResponse, { boardId: number }>({
      query: boardId => ({
        url: `boards/${boardId}`,
        method: 'GET',
      }),
      providesTags: ['Boards'],
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
          method: 'PUT',
          body,
        }),
        invalidatesTags: (result, error, arg) => [
          { type: 'Boards', id: arg.boardId },
        ],
      }
    ),
    deleteBoard: builder.mutation<void, { boardId: number }>({
      query: ({ boardId }) => ({
        url: `boards/${boardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Boards', id: arg.boardId },
      ],
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
