import { Resolver, useForm } from 'react-hook-form';
import sprite from '../../../assets/sprite.svg';
import { useGetResourcesQuery } from '../../../redux/api/resourcesApi';
import Loader from '../../Loader/Loader';
import {
  BoardFormValues,
  orderBoardSchema,
} from '../../../utils/formValidation';
import { yupResolver } from '@hookform/resolvers/yup';

interface BoardModalProps {
  onClose: () => void;
  mode: 'create' | 'edit';
}

const BoardModal = ({ onClose, mode }: BoardModalProps) => {
  const { data, isLoading } = useGetResourcesQuery();
  const title = mode === 'create' ? 'New board' : 'Edit board';
  const buttonLabel = mode === 'create' ? 'Create' : 'Edit';

  // console.log(isLoading);

  const icons = [
    'icon-star',
    'icon-container',
    'icon-puzzle',
    'icon-project',
    'icon-colors',
    'icon-hexagon',
    'icon-lightning',
    'icon-loading',
  ];

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BoardFormValues>({
    resolver: yupResolver(
      orderBoardSchema
    ) as unknown as Resolver<BoardFormValues>,
    mode: 'onSubmit',
  });

  const onSubmit = (result: BoardFormValues): void => {
    const selectedBg = result?.boardBg
      ? data?.data.find(bg => bg.name === result.boardBg)
      : null;

    const formData = {
      title: result.boardTitle,
      icon: result.boardIcon,
      bg: selectedBg || null,
    };
    console.log(formData);
    onClose();
  };

  return (
    <div className='w-full p-6 bg-header max-w-[335px]  rounded-lg md:max-w-[350px]'>
      <h2 className='text-text-theme w-full text-lg font-medium -tracking-[0.36px] mb-6'>
        {title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li className='mb-6'>
            <label className='relative block'>
              <input
                className='px-4.5 py-3.5 text-sm text-text-theme -tracking-[0.28px] border border-brand rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                type='text'
                {...register('boardTitle')}
              />
              {errors.boardTitle && (
                <p className='absolute -top-4 right-0 text-error text-[10px] ml-3 font-medium leading-3 -tracking-[0.3px] opacity-40'>
                  {errors.boardTitle.message}
                </p>
              )}
            </label>
          </li>
          <li>
            <p className='text-text-theme text-sm font-medium -tracking-[0.28px] mb-3.5'>
              Icons
            </p>
            <ul className='flex flex-wrap gap-2 mb-6 relative'>
              {icons.map(icon => (
                <li key={icon}>
                  <label className='cursor-pointer group '>
                    <input
                      type='radio'
                      value={icon}
                      {...register('boardIcon', { required: true })}
                      className='hidden peer'
                    />
                    <span className='peer-checked:shadow-[0_0_8px_var(--color-brand)] peer-checked:stroke-hover ring-brand rounded-lg  inline-flex p-1 stroke-text-theme/60'>
                      <svg
                        width='18'
                        height='18'
                        className=' fill-transparent group-hover:stroke-hover hover:drop-shadow-[0_0_6px_var(--color-brand)] peer-checked:stroke-hover  transition-all duration-300'
                      >
                        <use href={`${sprite}#${icon}`} />
                      </svg>
                    </span>
                  </label>
                </li>
              ))}
              {errors.boardIcon && (
                <p className='absolute -top-7 right-0 text-error text-[10px] ml-3 font-medium leading-3 -tracking-[0.3px] opacity-40'>
                  {errors.boardIcon.message}
                </p>
              )}
            </ul>
          </li>
          <li>
            <p className='text-text-theme text-sm font-medium -tracking-[0.28px] mb-3.5'>
              Background
            </p>
            {isLoading ? (
              <div className='w-full h-15 mb-10'>
                <Loader />
              </div>
            ) : (
              <ul className='flex flex-wrap gap-1 mb-10'>
                <li>
                  <label>
                    <input
                      type='radio'
                      value=''
                      {...register('boardBg')}
                      className='hidden peer'
                    />
                    <span className='flex justify-center bg-brand/20 items-center w-7 h-7 peer-checked:shadow-[0_0_8px_var(--color-brand)] peer-checked:stroke-hover ring-brand rounded-lg  stroke-text-theme/20 cursor-pointer'>
                      <svg
                        width='18'
                        height='18'
                        className=' fill-transparent group-hover:stroke-hover hover:drop-shadow-[0_0_6px_var(--color-brand)]  transition-all duration-300'
                      >
                        <use href={`${sprite}#icon-image`} />
                      </svg>
                    </span>
                  </label>
                </li>
                {data?.data?.map(icons => (
                  <li key={icons.thumb?.id}>
                    <label className='cursor-pointer group'>
                      <input
                        type='radio'
                        value={icons.name}
                        {...register('boardBg', { required: true })}
                        className='hidden peer'
                      />
                      <img
                        className='peer-checked:ring-2 peer-checked:shadow-[0_0_8px_var(--color-brand)] peer-checked:scale-110  group-hover:ring-2 group-hover:scale-110 ring-brand rounded-lg transition-all duration-300'
                        src={icons.thumb?.url}
                      />
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <button
          className='group w-full p-2.5 bg-brand rounded-lg flex items-center justify-center gap-2'
          type='submit'
        >
          <span className='flex justify-center items-center rounded w-7 h-7 bg-text-theme group-hover:bg-hover transition duration-300'>
            <svg
              width='14'
              height='14'
              className='stroke-text-dark fill-transparent'
            >
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
          <p className='text-sm text-text-theme group-hover:text-hover font-medium -tacking-[0.28px] transition duration-300'>
            {buttonLabel}
          </p>
        </button>
      </form>
    </div>
  );
};
export default BoardModal;
