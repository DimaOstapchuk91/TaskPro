import { Middleware, UnknownAction } from '@reduxjs/toolkit';
import { setIsLoggedOut } from '../slices/userSlice';
import { authApi } from '../api/authApi';
import { resourcesApi } from '../api/resourcesApi';
import { boardsApi } from '../api/boardsApi';
import { columnsApi } from '../api/columnsApi';
import { tasksApi } from '../api/tasksApi';

export const resetApiMiddleware: Middleware = store => next => action => {
  if ((action as UnknownAction).type === setIsLoggedOut.type) {
    [authApi, resourcesApi, boardsApi, columnsApi, tasksApi].forEach(api => {
      store.dispatch(api.util.resetApiState());
    });
  }

  return next(action);
};
