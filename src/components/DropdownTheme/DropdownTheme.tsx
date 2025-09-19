import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const THEMES = ['Light', 'Dark', 'Violet'];

const DropdownTheme = () => {
  const [theme, setTheme] = useState<string>('Dark');

  return (
    <div className='flex items-center gap-1'>
      <Menu>
        <MenuButton className='flex items-center gap-1 !text-sm text-white/80 font-medium -tracking-[0.28px] stroke-white/80 hover:text-hover hover:stroke-hover'>
          Theme
          <svg width='16' height='16' className=' fill-transparent'>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </svg>
        </MenuButton>

        <MenuItems
          transition
          anchor='bottom'
          className='w-25 flex flex-col gap-1 items-start bg-text-dark origin-top-left rounded-lg  p-4.5 text-white/50 transition duration-300 ease-out z-10 [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0'
        >
          {THEMES.map(item => (
            <MenuItem key={item}>
              <button
                onClick={() => setTheme(item)}
                className={`hover:text-hover !text-sm -tracking-[0.28px]
                  ${
                    theme === item
                      ? 'text-label-green hover:text-label-green'
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
