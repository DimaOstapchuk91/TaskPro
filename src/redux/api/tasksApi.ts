import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../services/configApti';
import { Task, TaskRequest } from '../../types/task.type';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Boards', 'Columns', 'Tasks'],
  endpoints: builder => ({
    createTask: builder.mutation<
      Task,
      {
        boardId: number;
        columnId: number;
        body: TaskRequest;
      }
    >({
      query: ({ boardId, columnId, body }) => ({
        url: `boards/${boardId}/columns/${columnId}/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Boards', id: arg.boardId },
      ],
    }),
    editTask: builder.mutation<
      Task,
      {
        boardId: number;
        columnId: number;
        taskId: number;
        body: TaskRequest;
      }
    >({
      query: ({ boardId, columnId, taskId, body }) => ({
        url: `boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Boards', id: arg.boardId },
      ],
    }),
    deleteTask: builder.mutation<
      void,
      { boardId: number; columnId: number; taskId: number }
    >({
      query: ({ boardId, columnId, taskId }) => ({
        url: `boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Boards', id: arg.boardId },
      ],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
