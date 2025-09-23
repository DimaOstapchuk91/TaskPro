import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Persistor,
} from 'redux-persist';
import { taskProApi } from './api/authApi';
import { resourcesApi } from './api/resourcesApi';

export const store = configureStore({
  reducer: {
    [taskProApi.reducerPath]: taskProApi.reducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware<{ serializableCheck: { ignoredActions: string[] } }>({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(taskProApi.middleware, resourcesApi.middleware),
});

export const persistor: Persistor = persistStore(store);

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
