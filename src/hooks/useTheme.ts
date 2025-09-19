import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'violet';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.body.classList.remove('light', 'violet');

    if (theme !== 'dark') {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
