import flowerpot from '../../../assets/img/flowerpot.png';

interface LoggOutModalProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const ConfirmModal = ({
  title,
  onConfirm,
  onCancel,
  isLoading = false,
}: LoggOutModalProps) => {
  return (
    <div className='w-full p-8 bg-header max-w-[335px]  rounded-lg md:max-w-[350px]'>
      <h2 className='text-text-theme text-center w-full text-lg font-medium -tracking-[0.36px] mb-6'>
        {title}
      </h2>
      <img
        className='mb-6 mx-auto'
        src={flowerpot}
        alt='flowerpot img'
        width={54}
        height={78}
      />
      <div className='flex justify-center gap-8'>
        <button
          onClick={onConfirm}
          disabled={isLoading}
          className='bg-error/80 font-medium py-2 px-8 rounded-lg !text-sm hover:bg-error focus:bg-error'
        >
          Yes
        </button>
        <button
          onClick={onCancel}
          disabled={isLoading}
          className='bg-brand/80 font-medium py-2 px-8 rounded-lg !text-sm hover:bg-hover focus:bg-hover'
        >
          No
        </button>
      </div>
    </div>
  );
};
export default ConfirmModal;
