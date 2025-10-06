import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { orderTaskShema, TaskValues } from '../../../utils/formValidation';

interface TaskModalProps {
  onClose: () => void;
  mode: string;
}

const TaskModal = ({ onClose, mode }: TaskModalProps) => {
  const title = mode === 'create' ? 'Add card' : 'Edit card';

  const { handleSubmit, register } = useForm<TaskValues>({
    resolver: yupResolver(orderTaskShema),
    mode: 'onSubmit',
  });

  console.log('test open');

  const handleTaskSubmit = (data: TaskValues) => {
    console.log(data);
    onClose();
  };
  return (
    <div className='w-full p-8 bg-header max-w-[335px]  rounded-lg md:max-w-[350px]'>
      <h2 className='text-text-theme w-full text-lg font-medium -tracking-[0.36px] mb-6'>
        {title}
      </h2>

      <form onSubmit={handleSubmit(handleTaskSubmit)}>
        <ul className='mb-6'>
          <li className='mb-3.5'>
            <label>
              <input
                className=' px-4.5 py-3.5 text-sm text-text-theme -tracking-[0.28px] border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                type='text'
                {...register('title')}
                placeholder='Title'
              />
            </label>
          </li>
          <li className=''>
            <label>
              <textarea
                className='px-4.5 py-3.5 h-30 text-sm text-text-theme -tracking-[0.28px]  resize-none border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                {...register('description')}
                placeholder='Description'
              />
            </label>
          </li>
          <li className=''>
            <ul className='flex gap-3 items-center '>
              <li>
                <label>
                  <input
                    type='radio'
                    value='Low'
                    {...register('priority')}
                    className='hidden peer'
                  />
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-green peer-checked:shadow-[inset_0_0_0_2px_var(--color-label-green),inset_0_0_0_4px_white] cursor-pointer transition-all duration-300' />
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    value='Medium'
                    {...register('priority')}
                    className='hidden peer'
                  />
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-violet peer-checked:shadow-[inset_0_0_0_2px_var(--color-label-violet),inset_0_0_0_4px_white] cursor-pointer transition-all duration-300' />
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    value='High'
                    {...register('priority')}
                    className='hidden peer'
                  />
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-pink peer-checked:shadow-[inset_0_0_0_2px_var(--color-label-pink),inset_0_0_0_4px_white] cursor-pointer transition-all duration-300' />
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    value='Without'
                    {...register('priority')}
                    className='hidden peer'
                  />
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-gray peer-checked:shadow-[inset_0_0_0_2px_var(--color-label-gray),inset_0_0_0_4px_white] cursor-pointer transition-all duration-300' />
                </label>
              </li>
            </ul>
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
export default TaskModal;
