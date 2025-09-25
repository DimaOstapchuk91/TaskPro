import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slectors/userSelectors';

const useTheme = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.classList.remove('light', 'violet');

    if (theme !== 'dark') {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return { theme };
};

export default useTheme;
