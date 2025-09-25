import sprite from '../../assets/sprite.svg';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import useTheme from '../../hooks/useTheme';
import { setTheme } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

type Theme = 'light' | 'dark' | 'violet';

const DropdownTheme = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const Themes = ['Light', 'Dark', 'Violet'];

  return (
    <div className='flex items-center gap-1'>
      <Menu>
        <MenuButton className='flex items-center gap-1 !text-sm text-text-theme/80 font-medium -tracking-[0.28px] stroke-text-theme/80 hover:text-hover hover:stroke-hover'>
          Theme
          <svg width='16' height='16' className=' fill-transparent'>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </svg>
        </MenuButton>

        <MenuItems
          transition
          anchor='bottom'
          className='w-25 flex flex-col gap-1 items-start bg-header origin-top-left rounded-lg shadow-[0_0_6px_var(--color-brand)]  p-4.5 text-white/50 transition duration-300 ease-out z-10 [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0'
        >
          {Themes.map(item => (
            <MenuItem key={item}>
              <button
                onClick={() => {
                  console.log('cleck menu', item.toLowerCase());
                  dispatch(setTheme(item.toLowerCase() as Theme));
                }}
                className={`text-text-theme hover:text-hover !text-sm -tracking-[0.28px]
                  ${
                    theme === item.toLowerCase()
                      ? '!text-brand hover:text-hover'
                      : ''
                  }`}
              >
                {item}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
export default DropdownTheme;
