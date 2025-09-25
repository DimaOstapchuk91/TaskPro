import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  theme: 'light' | 'dark' | 'violet';
}

const initialState: AuthState = {
  accessToken: null,
  isLoggedIn: false,
  theme: 'dark',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    tokenReceived: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    setIsLoggedOut: state => {
      state.accessToken = null;
      state.isLoggedIn = false;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'violet'>) => {
      state.theme = action.payload;
    },
  },
});

export const { tokenReceived, setIsLoggedOut, setTheme } = userSlice.actions;

export const authReducer = userSlice.reducer;
