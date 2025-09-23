import { useForm } from 'react-hook-form';
import sprite from '../../../assets/sprite.svg';
import { useGetResourcesQuery } from '../../../redux/api/resourcesApi';

interface BoardModalProps {
  onClose: () => void;
  mode: 'create' | 'edit';
}

interface BoardFormValues {
  boardTitle: string;
  boardIcon: string;
  boardBg: string;
}

const BoardModal = ({ onClose, mode }: BoardModalProps) => {
  const { data } = useGetResourcesQuery();
  const title = mode === 'create' ? 'New board' : 'Edit board';
  const buttonLabel = mode === 'create' ? 'Create' : 'Edit';

  // console.log(data);

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
    // resolver: yupResolver(),
    mode: 'onChange',
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
    <div className='p-6 bg-header max-w-[335px] w-full rounded-lg'>
      <h2 className='text-text-theme text-lg font-medium -tracking-[0.36px] mb-6'>
        {title}
      </h2>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li className='mb-6'>
            <label>
              <input
                className='px-4.5 py-3.5 text-sm text-text-theme -tracking-[0.28px] border border-brand rounded-lg w-full outline-none hover:border-hover focus:border-hover transition-all duration-300'
                type='text'
                {...register('boardTitle')}
              />
            </label>
          </li>
          <li>
            <p className='text-text-theme text-sm font-medium -tracking-[0.28px] mb-3.5'>
              Icons
            </p>
            <ul className='flex flex-wrap gap-2 mb-6'>
              {icons.map(icon => (
                <li key={icon}>
                  <label className='cursor-pointer group '>
                    <input
                      type='radio'
                      value={icon}
                      {...register('boardIcon', { required: true })}
                      className='hidden peer'
                    />
                    <span className='peer-checked:ring-1 ring-brand rounded-lg  inline-flex p-1'>
                      <svg
                        width='18'
                        height='18'
                        className='stroke-text-theme/60 fill-transparent group-hover:stroke-hover transition-all duration-300'
                      >
                        <use href={`${sprite}#${icon}`} />
                      </svg>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className='text-text-theme text-sm font-medium -tracking-[0.28px] mb-3.5'>
              Background
            </p>
            <ul className='flex flex-wrap gap-1 mb-10'>
              {data?.data?.map(icons => (
                <li key={icons.thumb?.id}>
                  <label className='cursor-pointer'>
                    <input
                      type='radio'
                      value={icons.name}
                      {...register('boardBg', { required: true })}
                      className='hidden peer'
                    />
                    <img
                      className='peer-checked:ring-2 ring-brand rounded-lg'
                      src={icons.thumb?.url}
                    />
                  </label>
                </li>
              ))}
            </ul>
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
