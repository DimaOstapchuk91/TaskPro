import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  NeedHelpValues,
  orderNeedHelpShema,
} from '../../../utils/formValidation';

interface NeedHelpProps {
  onClose: () => void;
}

const NeedHelpModal = ({ onClose }: NeedHelpProps) => {
  const { handleSubmit, register } = useForm<NeedHelpValues>({
    resolver: yupResolver(orderNeedHelpShema),
    mode: 'onSubmit',
  });

  console.log('test open');

  const handleHelpSubmit = (data: NeedHelpValues) => {
    console.log(data);
    onClose();
  };
  return (
    <div className='w-full p-8 bg-header max-w-[335px]  rounded-lg md:max-w-[350px]'>
      <h2 className='text-text-theme w-full text-lg font-medium -tracking-[0.36px] mb-6'>
        Need help?
      </h2>

      <form onSubmit={handleSubmit(handleHelpSubmit)}>
        <ul className='mb-6'>
          <li className='mb-3.5'>
            <label>
              <input
                className=' px-4.5 py-3.5 text-sm text-text-theme -tracking-[0.28px] border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                type='text'
                {...register('email')}
                placeholder='Email'
              />
            </label>
          </li>
          <li className=''>
            <label>
              <textarea
                className='px-4.5 py-3.5 h-30 text-sm text-text-theme -tracking-[0.28px]  resize-none border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                {...register('comment')}
                placeholder='Comment'
              />
            </label>
          </li>
        </ul>
        <button
          className='bg-brand !text-sm font-medium w-full rounded-lg p-3.5 text-text-dark hover:bg-hover'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default NeedHelpModal;
