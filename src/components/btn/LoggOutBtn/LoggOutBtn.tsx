import { useLoggedOutMutation } from '../../../redux/api/authApi';
import sprite from '../../../assets/sprite.svg';

const LoggOutBtn = () => {
  const [loggedOut] = useLoggedOutMutation();
  return (
    <>
      <button
        onClick={() => loggedOut()}
        className='flex items-center ml-2.5 mb-2.5 !text-sm font-medium gap-3.5 stroke-label-green hover:text-hover hover:stroke-hover md:ml-0 md:mb-0'
        type='button'
      >
        <svg width='32' height='32' className='fill-transparent'>
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
        Log out
      </button>
    </>
  );
};
export default LoggOutBtn;
