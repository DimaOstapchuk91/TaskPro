import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import DropdownTheme from '../DropdownTheme/DropdownTheme';
import MobileSidebar from '../MobileSidebar/MobileSidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='w-full px-6 py-4.5 bg-header flex justify-between items-center'>
      <div className=' xl:hidden'>
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className='w-full flex justify-end gap-3.5'>
        <DropdownTheme />
        <div className='flex items-center gap-2'>
          <p className='text-sm text-text-theme font-medium -tacking-[0.28px]'>
            User Name
          </p>
          <button
            className='relative bg-bg-dark w-8 h-8 rounded-lg flex justify-center items-end hover:shadow-[0_2px_6px_var(--color-brand)]'
            type='button'
          >
            <svg
              width='24'
              height='24'
              className='stroke-text-dark fill-text-dark'
            >
              <use href={`${sprite}#icon-user`}></use>
            </svg>
            <span className='absolute -bottom-1 bg-brand w-3 h-3 rounded-[4px] flex justify-center items-center'>
              <svg
                width='8'
                height='8'
                className='stroke-bg-light fill-transparent'
              >
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
