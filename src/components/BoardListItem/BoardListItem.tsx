import { NavLink, useMatch } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import Modal from '../modals/Modal';
import BoardModal from '../modals/BoardModal/BoardModal';

interface BoardTypes {
  id: string;
  title: string;
  icon: string;
}

interface BoardListItemProps {
  board: BoardTypes;
}

const BoardListItem = ({ board }: BoardListItemProps) => {
  const match = useMatch(`/home/${board.id}`);

  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const handleOpenEditModal = () => {
    setIsOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setIsOpenEditModal(false);
  };

  return (
    <li className='relative'>
      <NavLink
        className={({ isActive }) =>
          `group flex items-center gap-1 py-5 px-3.5 -mx-3.5 hover:bg-bg-dark transition-all duration-300 md:gap-2 md:-mx-6  ${
            isActive
              ? 'active bg-bg-dark  after:content-[""] after:absolute after:top-0 after:-right-3.5 after:w-1 after:h-full after:rounded-l after:bg-brand md:after:-right-6'
              : ''
          }`
        }
        to={`/home/${board.id}`}
      >
        <svg
          className='stroke-white opacity-40 group-[.active]:opacity-100 fill-transparent'
          width={18}
          height={18}
        >
          <use href={`${sprite}#${board.icon}`} />
        </svg>
        <p className='opacity-40 text-sm font-medium -tracking-[0.28px] group-[.active]:opacity-100'>
          {board.title}
        </p>
      </NavLink>
      {match && (
        <div className='absolute top-1/2 -translate-y-1/2 right-0 flex gap-2 '>
          <button
            className='opacity-40 hover:opacity-100  cursor-pointer transition-all duration-300'
            type='button'
            onClick={handleOpenEditModal}
          >
            <svg
              className='stroke-white fill-transparent hover:stroke-brand hover:drop-shadow-[0_0_6px_var(--color-brand)] transition-all duration-300'
              width={16}
              height={16}
            >
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button
            className='opacity-40 hover:opacity-100 cursor-pointer transition-all duration-300'
            type='button'
          >
            <svg
              className='stroke-white fill-transparent hover:stroke-error hover:drop-shadow-[0_0_6px_var(--color-error)]  transition-all duration-300'
              width={16}
              height={16}
            >
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      )}
      <Modal isOpen={isOpenEditModal} onClose={handleCloseEditModal}>
        <BoardModal onClose={handleCloseEditModal} mode={'edit'} />
      </Modal>
    </li>
  );
};
export default BoardListItem;
