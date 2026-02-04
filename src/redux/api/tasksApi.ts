import { Task } from '../../types/task.type';
import { TaskValues } from '../../utils/formValidation';
import { rootApi } from './rootApi';

export const tasksApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    createTask: builder.mutation<
      Task,
      {
        boardId: number;
        columnId: number;
        body: TaskValues;
      }
    >({
      query: ({ boardId, columnId, body }) => ({
        url: `boards/${boardId}/columns/${columnId}/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'OneBoard', id: String(arg.boardId) },
      ],
    }),
    editTask: builder.mutation<
      Task,
      {
        boardId: number;
        columnId: number;
        taskId: number;
        body: TaskValues;
      }
    >({
      query: ({ boardId, columnId, taskId, body }) => ({
        url: `boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'OneBoard', id: String(arg.boardId) },
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
        { type: 'OneBoard', id: String(arg.boardId) },
      ],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
