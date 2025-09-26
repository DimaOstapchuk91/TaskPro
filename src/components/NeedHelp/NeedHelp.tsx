import sprite from '../../assets/sprite.svg';
import flowerpot from '../../assets/img/flowerpot.png';
import Modal from '../modals/Modal';
import { useState } from 'react';
import NeedHelpModal from '../modals/NeedHelpModal/NeedHelpModal';

const NeedHelp = () => {
  const [isOpenHelpModal, setIsOpenHelpModal] = useState<boolean>(false);

  console.log(isOpenHelpModal);

  const handleCloseHelpModal = () => {
    setIsOpenHelpModal(false);
  };
  return (
    <div className='p-3.5 mb-6 bg-bg-dark rounded-lg md:p-5'>
      <img
        className='mb-3.5'
        src={flowerpot}
        alt='flowerpot img'
        width={54}
        height={78}
      />
      <p className='text-xs mb-4.5 -tracking-[0.24px] leading-4 md:text-sm md:liding-5 md:-tracking-[0.28px]'>
        If you need help with
        <br />
        <span className='text-label-green'>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>
      <button
        onClick={() => setIsOpenHelpModal(true)}
        className='flex !text-xs -tracking-[0.24px] stroke-white items-center gap-2 hover:text-hover hover:stroke-hover '
        type='button'
      >
        <svg width='20' height='20' className='fill-transparent'>
          <use href={`${sprite}#icon-help`}></use>
        </svg>
        Need help?
      </button>
      <Modal isOpen={isOpenHelpModal} onClose={handleCloseHelpModal}>
        <NeedHelpModal onClose={handleCloseHelpModal} />
      </Modal>
    </div>
  );
};
export default NeedHelp;
