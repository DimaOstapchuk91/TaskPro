import { useEffect } from 'react';
import sprite from '../../assets/sprite.svg';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('noScroll');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('noScroll');
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed top-0 left-0 w-screen h-screen bg-brand/10 flex justify-center items-center z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className='relative w-full max-w-[335px] md:max-w-[350px] overflow-hidden'
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className='absolute group top-3.5 right-3.5 cursor-pointer'
              onClick={onClose}
            >
              <svg
                className='stroke-text-theme group-hover:stroke-hover transition-all duration-200'
                width={18}
                height={18}
              >
                <use href={`${sprite}#icon-close`} />
              </svg>
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot,
  );
};

export default Modal;
