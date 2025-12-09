import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import sprite from '../../assets/sprite.svg';
import clsx from 'clsx';

interface DropdownFilterProps {
  onSelect: (filter: string) => void;
}

const DropdownFilter = ({ onSelect }: DropdownFilterProps) => {
  const columns = ['High', 'Medium', 'Low', 'Without'];

  const handleClickFilter = (filter: string) => {
    onSelect(filter);
    console.log('Filter Data:', filter);
  };

  const getColorClass = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-label-green';
      case 'Medium':
        return 'bg-label-pink';
      case 'Low':
        return 'bg-label-violet';
      case 'Without':
        return 'bg-label-gray';
      default:
        return 'bg-label-violet';
    }
  };

  return (
    <Menu>
      <MenuButton
        className='flex items-center gap-1 stroke-text-theme/80 text-text-theme/80 hover:stroke-hover hover:text-hover '
        type='button'
      >
        <svg width='16' height='16' className='fill-transparent'>
          <use href={`${sprite}#icon-filter`}></use>
        </svg>
        Filters
      </MenuButton>
      <MenuItems
        transition
        anchor='bottom'
        className='-translate-x-4 w-[300px] flex flex-col gap-1 items-start bg-header rounded-lg shadow-[0_0_6px_var(--color-brand)]  p-6 text-white/50 transition duration-300 ease-out z-10 [--anchor-gap:--spacing(3)] focus:outline-none data-closed:scale-90 data-closed:opacity-10'
      >
        <h2 className='text-lg pb-3.5 font-medium -tracking-[0.36px] text-text-theme border-b border-text-theme/10 w-full mb-3.5'>
          Filters
        </h2>
        <div className='mb-3.5 w-full flex items-center justify-between'>
          <h3 className='text-sm font-medium -tracking-[0.28px] text-text-theme'>
            Label color
          </h3>
          <button
            className='text-text-theme/50 !text-xs -tracking-[0.24px] underline hover:text-hover'
            type='button'
          >
            Show all
          </button>
        </div>
        {columns.map((item, i) => (
          <MenuItem key={i}>
            <button
              onClick={() => handleClickFilter(item)}
              className='flex items-center gap-2 text-text-theme/50 hover:text-hover !text-sm -tracking-[0.28px]'
            >
              <span
                className={clsx(
                  'block w-3.5 h-3.5 rounded-full transition-all duration-300',
                  getColorClass(item)
                )}
              />
              {item}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
export default DropdownFilter;
