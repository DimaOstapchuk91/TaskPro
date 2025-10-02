import { yupResolver } from '@hookform/resolvers/yup';
import { ColumnValues, orderColumnShema } from '../../../utils/formValidation';
import { useForm } from 'react-hook-form';
import sprite from '../../../assets/sprite.svg';

interface ColumnModalProps {
  onClose: () => void;
  mode: string;
}

const ColumnModal = ({ onClose, mode }: ColumnModalProps) => {
  const title = mode === 'create' ? 'Add column' : 'Edit column';

  const { handleSubmit, register } = useForm<ColumnValues>({
    resolver: yupResolver(orderColumnShema),
    mode: 'onSubmit',
  });

  const handleColumnSubmit = (data: ColumnValues): void => {
    console.log(data);
    onClose();
  };
  return (
    <div className='w-full p-8 bg-header max-w-[335px]  rounded-lg md:max-w-[350px]'>
      <h2 className='text-text-theme w-full text-lg font-medium -tracking-[0.36px] mb-6'>
        {title}
      </h2>

      <form onSubmit={handleSubmit(handleColumnSubmit)}>
        <div className='mb-6'>
          <label>
            <input
              className='px-4.5 py-3.5 !text-sm text-text-theme -tracking-[0.28px] border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
              type='text'
              {...register('columnTitle')}
              placeholder='Title'
            />
          </label>
        </div>

        <button
          className='flex items-center justify-center gap-2  bg-brand !text-sm font-medium w-full rounded-lg p-3.5 text-text-dark hover:bg-hover'
          type='submit'
        >
          <span className='flex justify-center items-center rounded w-7 h-7 bg-text-dark'>
            <svg
              width='14'
              height='14'
              className='stroke-text-theme fill-transparent'
            >
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
          Add
        </button>
      </form>
    </div>
  );
};
export default ColumnModal;
