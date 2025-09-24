import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  theme: 'light' | 'dark' | 'violet';
}

const initialState: AuthState = {
  accessToken: null,
  theme: 'dark',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    tokenReceived: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    loggedOut: state => {
      state.accessToken = null;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'violet'>) => {
      state.theme = action.payload;
    },
  },
});

export const { tokenReceived, loggedOut, setTheme } = userSlice.actions;

export const authReducer = userSlice.reducer;
