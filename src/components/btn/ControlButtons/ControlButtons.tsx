import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';
import Modal from '../../modals/Modal';
import ConfirmModal from '../../modals/ConfirmModal/ConfirmModal';

interface ControlButtonsProps {
  CreateModal: React.ComponentType<{
    onClose: () => void;
    mode: 'create' | 'edit';
    id?: number;
  }>;
  confirmTitle: string;
  confirmAction: () => void;
  id?: number;
}

const ControlButtons = ({
  CreateModal,
  confirmTitle,
  confirmAction,
  id,
}: ControlButtonsProps) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  return (
    <>
      <button
        className=''
        type='button'
        onClick={() => setIsOpenCreateModal(true)}
      >
        <svg
          className='stroke-text-theme/50 fill-transparent hover:stroke-brand hover:drop-shadow-[0_0_6px_var(--color-brand)] transition-all duration-300'
          width={16}
          height={16}
        >
          <use href={`${sprite}#icon-pencil`} />
        </svg>
      </button>
      <button
        className=''
        type='button'
        onClick={() => setIsOpenConfirmModal(true)}
      >
        <svg
          className='stroke-text-theme/50 fill-transparent hover:stroke-error hover:drop-shadow-[0_0_6px_var(--color-error)]  transition-all duration-300'
          width={16}
          height={16}
        >
          <use href={`${sprite}#icon-trash`} />
        </svg>
      </button>
      <Modal isOpen={isOpenCreateModal} onClose={handleCloseCreateModal}>
        <CreateModal onClose={handleCloseCreateModal} mode={'edit'} id={id} />
      </Modal>
      <Modal isOpen={isOpenConfirmModal} onClose={handleCloseConfirmModal}>
        <ConfirmModal
          title={confirmTitle}
          action={confirmAction}
          onClose={handleCloseConfirmModal}
        />
      </Modal>
    </>
  );
};
export default ControlButtons;
