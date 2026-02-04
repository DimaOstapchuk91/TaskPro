import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';
import Modal from '../../modals/Modal';
import ConfirmModal from '../../modals/ConfirmModal/ConfirmModal';

interface ControlButtonsProps {
  CreateModal: React.ComponentType<{
    onClose: () => void;
    mode: 'create' | 'edit';
  }>;
  confirmTitle: string;
  confirmAction: () => Promise<void>;
  isLoading?: boolean;
}

const ControlButtons = ({
  CreateModal,
  confirmTitle,
  confirmAction,
  isLoading = false,
}: ControlButtonsProps) => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  const handleConfirm = async () => {
    try {
      await confirmAction();
      setIsOpenConfirmModal(false);
    } catch (error) {
      console.log(error);
    }
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
        <CreateModal onClose={handleCloseCreateModal} mode={'edit'} />
      </Modal>
      <Modal isOpen={isOpenConfirmModal} onClose={handleCloseConfirmModal}>
        <ConfirmModal
          title={confirmTitle}
          onConfirm={handleConfirm}
          onCancel={handleCloseConfirmModal}
          isLoading={isLoading}
        />
      </Modal>
    </>
  );
};
export default ControlButtons;
