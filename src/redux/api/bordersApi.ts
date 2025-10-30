import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';

export type IconType =
  | 'icon-star'
  | 'icon-container'
  | 'icon-puzzle'
  | 'icon-project'
  | 'icon-colors'
  | 'icon-hexagon'
  | 'icon-lightning'
  | 'icon-loading';

export type Board = {
  id: number;
  owner_id: number;
  title: string;
  icons: IconType;
  background: string;
  created_at: string;
  updated_at: string;
};

export type BoardRequest = Omit<
  Board,
  'id' | 'owner_id' | 'created_at' | 'updated_at'
> & {
  background?: string;
};

export interface Task {
  id: number;
  column_id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low' | 'Without';
  deadline: string;
  created_at: string;
  updated_at: string;
}

export interface BoardsResponse {
  id: number;
  title: string;
  columns: {
    id: number;
    title: string;
    tasks: Task[];
  }[];
}

export const boardsApi = createApi({
  reducerPath: 'boardsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Boards'],
  endpoints: builder => ({
    getAllBoards: builder.query<Board[], void>({
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
