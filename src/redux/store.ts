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
import { taskProApi } from './api/authApi';
import { resourcesApi } from './api/resourcesApi';
import { authReducer } from './slices/userSlice';

const persistUserConfig = {
  key: 'userData',
  storage,
  whitelist: ['accessToken', 'theme', 'isLoggedIn'],
};

const persistUserReducer = persistReducer(persistUserConfig, authReducer);

export const store = configureStore({
  reducer: {
    user: persistUserReducer,
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
