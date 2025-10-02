import { useLoggedOutMutation } from '../../../redux/api/authApi';
import sprite from '../../../assets/sprite.svg';
import { useState } from 'react';
import Modal from '../../modals/Modal';
import { useDispatch } from 'react-redux';
import { setIsLoggedOut } from '../../../redux/slices/userSlice';
import ConfirmModal from '../../modals/ConfirmModal/ConfirmModal';

const LoggOutBtn = () => {
  const [loggedOut] = useLoggedOutMutation();
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  const handleLoggedOut = async () => {
    try {
      await loggedOut().unwrap();

      setIsOpenConfirmModal(false);

      dispatch(setIsLoggedOut());
    } catch (error) {
      console.log('Щось пішло не так ', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpenConfirmModal(true)}
        className='flex items-center ml-2.5 mb-2.5 !text-sm font-medium gap-3.5 stroke-label-green hover:text-hover hover:stroke-hover md:ml-0 md:mb-0'
        type='button'
      >
        <svg width='32' height='32' className='fill-transparent'>
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
        Log out
      </button>
      <Modal isOpen={isOpenConfirmModal} onClose={handleCloseConfirmModal}>
        <ConfirmModal
          title={'You want to leave?'}
          action={handleLoggedOut}
          onClose={handleCloseConfirmModal}
        />
      </Modal>
    </>
  );
};
export default LoggOutBtn;
