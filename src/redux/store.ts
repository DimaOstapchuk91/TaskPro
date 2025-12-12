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

import { resetApiMiddleware } from './middleware/resetApi';
import { rootApi } from './api/rootApi';

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
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware<{ serializableCheck: { ignoredActions: string[] } }>({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      resourcesApi.middleware,
      rootApi.middleware,
      resetApiMiddleware
    ),
});

export const persistor: Persistor = persistStore(store);

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
