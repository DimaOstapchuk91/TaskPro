import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import sprite from '../../assets/sprite.svg';

const DropdownProgres = () => {
  const progresColumn = ['To Do', 'In Progres', 'Done'];

  const handleClickProgres = (data: string) => {
    console.log(data);
  };
  return (
    <Menu>
      <MenuButton
        className='opacity-40 hover:opacity-100  cursor-pointer transition-all duration-300'
        type='button'
      >
        <svg
          className='stroke-white fill-transparent hover:stroke-brand hover:drop-shadow-[0_0_6px_var(--color-brand)] transition-all duration-300'
          width={16}
          height={16}
        >
          <use href={`${sprite}#icon-arrow-circle-right`} />
        </svg>
      </MenuButton>
      <MenuItems
        className='absolute -left-36 w-[135px] flex flex-col gap-1 items-start bg-header rounded-lg shadow-[0_0_6px_var(--color-brand)] p-4.5 text-white/50 z-10
        transition-all duration-300 ease-out
        data-[closed]:opacity-0 data-[closed]:scale-50 data-[closed]:translate-y-[-24px]
        data-[open]:opacity-100 data-[open]:scale-100 data-[open]:translate-y-0'
      >
        {progresColumn.map((item, i) => (
          <MenuItem key={i}>
            <button
              onClick={() => handleClickProgres(item)}
              className='group w-full flex items-center justify-between text-text-theme/50 hover:text-hover !text-sm -tracking-[0.28px]'
            >
              {item}
              <svg
                className='stroke-white fill-transparent group-hover:stroke-brand group-hover:drop-shadow-[0_0_6px_var(--color-brand)] transition-all duration-300'
                width={16}
                height={16}
              >
                <use href={`${sprite}#icon-arrow-circle-right`} />
              </svg>
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
export default DropdownProgres;
