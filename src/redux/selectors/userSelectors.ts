export const selectIsLoggedIn = (state: { user: { isLoggedIn: boolean } }) =>
  state.user.isLoggedIn;

export const selectTheme = (state: {
  user: { theme: 'light' | 'dark' | 'violet' };
}) => state.user.theme;
