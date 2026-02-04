import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { orderTaskShema, TaskValues } from '../../../utils/formValidation';
import sprite from '../../../assets/sprite.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import {
  useCreateTaskMutation,
  useEditTaskMutation,
} from '../../../redux/api/tasksApi';

interface TaskModalProps {
  onClose: () => void;
  mode: string;
  taskId?: number;
  boardId: number;
  columnId: number;
}

const TaskModal = ({
  onClose,
  mode,
  taskId,
  boardId,
  columnId,
}: TaskModalProps) => {
  const title = mode === 'create' ? 'Add card' : 'Edit card';
  const buttonText = mode === 'create' ? 'Add' : 'Edit';

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [createTask, { isLoading: isCreating }] = useCreateTaskMutation();
  const [editTask, { isLoading: isEditing }] = useEditTaskMutation();

  const isSubmitting = isCreating || isEditing;

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

  const { handleSubmit, register, control, watch } = useForm<TaskValues>({
    resolver: yupResolver(orderTaskShema),
    mode: 'onSubmit',
  });

  const priority = watch('priority');
  console.log('WATCH PRIORITY:', priority);

  const handleTaskSubmit = async (data: TaskValues) => {
    console.log(['test body', columnId, boardId, taskId, data]);

    try {
      if (mode === 'create') {
        await createTask({
          boardId: boardId,
          columnId: columnId,
          body: data,
        }).unwrap();

        onClose();
      } else if (
        mode === 'edit' &&
        boardId !== undefined &&
        taskId !== undefined
      ) {
        await editTask({ boardId, columnId, taskId, body: data }).unwrap();

        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-full p-8 bg-header max-w-[335px]  rounded-lg md:max-w-[350px]'>
      <h2 className='text-text-theme w-full text-lg font-medium -tracking-[0.36px] mb-6'>
        {title}
      </h2>

      <form onSubmit={handleSubmit(handleTaskSubmit)}>
        <ul className='mb-10'>
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
          <li className='mb-6'>
            <label>
              <textarea
                className='px-4.5 py-3.5 h-30 text-sm text-text-theme -tracking-[0.28px]  resize-none border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                {...register('description')}
                placeholder='Description'
              />
            </label>
          </li>
          <li className='mb-3.5'>
            <h3 className='mb-1 text-[12px] -tracking-[0.24px] text-text-theme/50'>
              Label color
            </h3>
            <ul className='flex gap-2 items-center  '>
              <li>
                <label>
                  <input
                    type='radio'
                    value='High'
                    {...register('priority')}
                    className='hidden peer'
                  />
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-green peer-checked:shadow-[inset_0_0_0_1px_var(--color-label-green),inset_0_0_0_3px_var(--color-background)] cursor-pointer transition-all duration-300' />
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    value='Low'
                    {...register('priority')}
                    className='hidden peer'
                  />
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-violet peer-checked:shadow-[inset_0_0_0_1px_var(--color-label-violet),inset_0_0_0_3px_var(--color-background)] cursor-pointer transition-all duration-300' />
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
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-pink peer-checked:shadow-[inset_0_0_0_1px_var(--color-label-pink),inset_0_0_0_3px_var(--color-background)] cursor-pointer transition-all duration-300' />
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
                  <span className='block w-3.5 h-3.5 rounded-full bg-label-gray peer-checked:shadow-[inset_0_0_0_1px_var(--color-label-gray),inset_0_0_0_3px_var(--color-background)] cursor-pointer transition-all duration-300' />
                </label>
              </li>
            </ul>
          </li>
          <li className='relative'>
            <h3 className='mb-1 text-[12px] -tracking-[0.24px] text-text-theme/50'>
              Deadline
            </h3>
            <Controller
              control={control}
              name='deadline'
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={date => {
                    if (date) {
                      setSelectedDate(date);
                      field.onChange(date);
                    }
                  }}
                  minDate={new Date()}
                  placeholderText='Select a deadline'
                  className=''
                  dateFormat='dd.MM.yyyy'
                  shouldCloseOnSelect
                  customInput={
                    <button
                      type='button'
                      className='flex items-center gap-2 text-[14px] font-medium text-color-brand hover:text-color-brand-hover transition-colors duration-200'
                    >
                      <span className='text-brand'>
                        {selectedDate.toDateString() ===
                        new Date().toDateString()
                          ? `Today, ${selectedDate.toLocaleString('en-US', {
                              month: 'long',
                              day: 'numeric',
                            })}`
                          : formatDate(selectedDate)}
                      </span>
                      <svg
                        width='12'
                        height='12'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        className='text-brand'
                      >
                        <path d='M2 4l4 4 4-4' />
                      </svg>
                    </button>
                  }
                />
              )}
            />
          </li>
        </ul>
        <button
          className='flex items-center justify-center gap-2 bg-brand !text-sm font-medium w-full rounded-lg p-3.5 text-text-dark hover:bg-hover'
          type='submit'
          disabled={isSubmitting}
        >
          {' '}
          <span className='flex justify-center items-center rounded w-7 h-7 bg-text-dark'>
            <svg
              width='14'
              height='14'
              className='stroke-text-theme fill-transparent'
            >
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
          {buttonText}
        </button>
      </form>
    </div>
  );
};
export default TaskModal;
