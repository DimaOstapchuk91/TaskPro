import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Persistor,
} from 'redux-persist';
import { authApi } from './api/authApi';
import { resourcesApi } from './api/resourcesApi';
import { authReducer } from './slices/userSlice';
import { boardsApi } from './api/boardsApi';
import { columnsApi } from './api/columnsApi';
import { tasksApi } from './api/tasksApi';
import { resetApiMiddleware } from './middleware/resetApi';

const persistUserConfig = {
  key: 'userData',
  storage,
  whitelist: ['accessToken', 'theme', 'isLoggedIn'],
};

const persistUserReducer = persistReducer(persistUserConfig, authReducer);

export const store = configureStore({
  reducer: {
    user: persistUserReducer,
    [authApi.reducerPath]: authApi.reducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
    [columnsApi.reducerPath]: columnsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware<{ serializableCheck: { ignoredActions: string[] } }>({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      resetApiMiddleware,
      authApi.middleware,
      resourcesApi.middleware,
      boardsApi.middleware,
      columnsApi.middleware,
      tasksApi.middleware
    ),
});

export const persistor: Persistor = persistStore(store);

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
