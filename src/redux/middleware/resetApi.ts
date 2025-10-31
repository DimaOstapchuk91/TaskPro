import { Middleware, UnknownAction } from '@reduxjs/toolkit';
import { setIsLoggedOut } from '../slices/userSlice';
import { authApi } from '../api/authApi';
import { resourcesApi } from '../api/resourcesApi';
import { boardsApi } from '../api/boardsApi';
import { columnsApi } from '../api/columnsApi';
import { tasksApi } from '../api/tasksApi';

export const resetApiMiddleware: Middleware = store => next => action => {
  if ((action as UnknownAction).type === setIsLoggedOut.type) {
    store.dispatch(authApi.util.resetApiState());
    store.dispatch(resourcesApi.util.resetApiState());
    store.dispatch(boardsApi.util.resetApiState());
    store.dispatch(columnsApi.util.resetApiState());
    store.dispatch(tasksApi.util.resetApiState());
  }

  return next(action);
};
