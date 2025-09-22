import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import Modal from '../modals/Modal';
import BoardModal from '../modals/BoardModal/BoardModal';

const AddBoardBtn = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);

  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };
  return (
    <div className='flex py-3.5 mb-10 justify-between w-full border-y border-white/10 '>
      <p className='max-w-[76px] text-sm font-medium -tracking-[0.28px]'>
        Create a new board
      </p>
      <button
        className='w-10 h-9 flex justify-center items-center bg-brand rounded-[6px] hover:bg-hover'
        type='button'
        onClick={handleOpenCreateModal}
      >
        <svg width='20' height='20' className='stroke-text-dark'>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </button>
      <Modal isOpen={isOpenCreateModal} onClose={handleCloseCreateModal}>
        <BoardModal onClose={handleCloseCreateModal} mode={'create'} />
      </Modal>
    </div>
  );
};
export default AddBoardBtn;
