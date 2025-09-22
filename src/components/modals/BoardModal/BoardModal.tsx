import { useForm } from 'react-hook-form';
import sprite from '../../../assets/sprite.svg';

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
  const title = mode === 'create' ? 'New board' : 'Edit board';
  const buttonLabel = mode === 'create' ? 'Create' : 'Edit';

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

  const onSubmit = (data: BoardFormValues): void => {
    console.log(data);
    onClose();
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <label>
              <input type='text' {...register('boardTitle')} />
            </label>
          </li>
          <li>
            <ul>
              {icons.map(icon => (
                <li key={icon}>
                  <label className='cursor-pointer'>
                    <input
                      type='radio'
                      value={icon}
                      {...register('boardIcon', { required: true })}
                      className='hidden peer'
                    />
                    <span className='peer-checked:ring-2 ring-brand rounded p-2 inline-flex'>
                      <svg width='24' height='24'>
                        <use href={`${sprite}#${icon}`} />
                      </svg>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <label>
              <input
                type='radio'
                value={icons}
                {...register('boardBg', { required: true })}
                className='hidden peer'
              />
            </label>
          </li>
        </ul>
        <button type='submit'>{buttonLabel}</button>
      </form>
    </div>
  );
};
export default BoardModal;
