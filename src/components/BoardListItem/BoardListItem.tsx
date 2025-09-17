import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

interface BoardTypes {
  id: string;
  title: string;
  icon: string;
}

interface BoardListItemProps {
  board: BoardTypes;
}

const BoardListItem = ({ board }: BoardListItemProps) => {
  return (
    <li className='relative'>
      <NavLink
        className={({ isActive }) =>
          `group flex items-center gap-1 py-5 px-3.5 -mx-3.5 hover:bg-bg-dark transition-all duration-300 md:gap-2 md:-mx-6  ${
            isActive
              ? 'active bg-bg-dark  after:content-[""] after:absolute after:top-0 after:-right-3.5 after:w-1 after:h-full after:rounded-l after:bg-label-green md:after:-right-6'
              : ''
          }`
        }
        to={`/home/${board.id}`}
      >
        <svg
          className='stroke-white opacity-40 group-[.active]:opacity-100'
          width={18}
          height={18}
        >
          <use href={`${sprite}#${board.icon}`} />
        </svg>
        <p className='opacity-40 text-sm font-medium -tracking-[0.28px] group-[.active]:opacity-100'>
          {board.title}
        </p>
      </NavLink>
      <div className='absolute top-1/2 -translate-y-1/2 right-0 flex gap-2 '>
        <button
          className='opacity-40 hover:opacity-100  cursor-pointer transition-all duration-300'
          type='button'
        >
          <svg
            className='stroke-white hover:stroke-label-green hover:drop-shadow-[0_0_6px_#BEDBB0] transition-all duration-300'
            width={16}
            height={16}
          >
            <use href={`${sprite}#icon-pencil`} />
          </svg>
        </button>
        <button
          className='opacity-40 hover:opacity-100 cursor-pointer transition-all duration-300'
          type='button'
        >
          <svg
            className='stroke-white fill-transparent hover:stroke-error hover:drop-shadow-[0_0_6px_#EF2447]  transition-all duration-300'
            width={16}
            height={16}
          >
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </button>
      </div>
    </li>
  );
};
export default BoardListItem;
