import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';
import Modal from '../../modals/Modal';
import ColumnModal from '../../modals/ColumnModal/ColumnModal';

interface AddColumnBtnProps {
  boardId: number;
}

const AddColumnBtn = ({ boardId }: AddColumnBtnProps) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  return (
    <>
      <button
        className='flex-none w-[335px] h-14 flex items-center justify-center gap-2 bg-header rounded-lg self-start'
        type='button'
        onClick={() => setIsOpenCreateModal(true)}
      >
        <span className='flex justify-center items-center rounded w-7 h-7 bg-brand'>
          <svg
            width='14'
            height='14'
            className='stroke-text-dark fill-transparent'
          >
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </span>
        <p className='text-sm text-text-theme'>Add another column</p>
      </button>
      <Modal isOpen={isOpenCreateModal} onClose={handleCloseCreateModal}>
        <ColumnModal
          onClose={handleCloseCreateModal}
          mode={'create'}
          boardId={boardId}
        />
      </Modal>
    </>
  );
};
export default AddColumnBtn;
