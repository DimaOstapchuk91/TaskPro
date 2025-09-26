import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from '../store';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { setIsLoggedOut, tokenReceived } from '../slices/userSlice';

import { Mutex } from 'async-mutex';

interface RefreshResponse {
  data: {
    accessToken: string;
  };

  message: string;
  secure: boolean;
  status: number;
}

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      console.log('1. Спрацювала функція рефрешу');
      const release = await mutex.acquire();
      try {
        console.log('2. Зайшли в трай');
        const refreshResult = await baseQuery(
          { url: 'auth/refresh', method: 'POST' },
          api,
          extraOptions
        );

        console.log('3. Лог після refreshResult', refreshResult);

        if (
          refreshResult.data &&
          typeof refreshResult.data === 'object' &&
          'accessToken' in (refreshResult.data as RefreshResponse).data
        ) {
          // store the new token
          console.log('4. спрацював рефреш, в помилку не впав');
          const { accessToken } = (refreshResult.data as RefreshResponse).data;

          api.dispatch(tokenReceived({ accessToken }));
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(setIsLoggedOut());
        }
        console.log('5. спрацював рефреш, поза іф');
      } finally {
        console.log('6. Виключаєм блок Finally');
        release();
      }
    } else {
      await mutex.waitForUnlock();
      console.log('7. спрацював елс');
      result = await baseQuery(args, api, extraOptions);
    }
  }

  if (result.error && result.error.status === 500) {
    let retries = 0;
    while (retries < 3 && result.error) {
      retries++;
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
