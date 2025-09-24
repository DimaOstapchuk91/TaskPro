import { useState } from 'react';
import BoardModal from '../modals/BoardModal/BoardModal';
import Modal from '../modals/Modal';

const NoBoardSelected = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);

  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <p className='text-xs leading-4 max-w-[335px] text-center text-text-theme/50 -tracking-[0.24px] md:max-w-[486px] md:text-sm md:leading-4.5 md:-tracking-[0.28px]'>
        Before starting your project, it is essential{' '}
        <button
          type='button'
          className='text-brand hover:text-hover'
          onClick={handleOpenCreateModal}
        >
          to create a board
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      <Modal isOpen={isOpenCreateModal} onClose={handleCloseCreateModal}>
        <BoardModal onClose={handleCloseCreateModal} mode={'create'} />
      </Modal>
    </div>
  );
};
export default NoBoardSelected;
