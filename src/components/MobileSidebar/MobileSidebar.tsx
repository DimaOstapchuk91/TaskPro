import { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import Sidebar from '../Sidebar/Sidebar';

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileSidebar = ({ isOpen, setIsOpen }: MobileSidebarProps) => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const swipeThreshold = 150;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    console.log('Touch Start X:', e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
    console.log('Touch Move X:', e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > swipeThreshold) {
      setIsOpen(false);
    }

    console.log('Touch End X:', touchEndX);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className=''>
        <svg width='24' height='24' className='stroke-white'>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>
      <div
        className={`fixed z-20 inset-0 left-[225px] transition-opacity duration-300 md:left-[260px] ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 transform z-10 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Sidebar />
      </div>
    </>
  );
};

export default MobileSidebar;
