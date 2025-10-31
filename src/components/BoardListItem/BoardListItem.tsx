import { NavLink, useMatch } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

import BoardModal from '../modals/BoardModal/BoardModal';
import ControlButtons from '../btn/ControlButtons/ControlButtons';
import { Board } from '../../types/boards.type';

interface BoardListItemProps {
  board: Board;
}

const BoardListItem = ({ board }: BoardListItemProps) => {
  const match = useMatch(`/home/${board.id}`);

  const handleDellBoard = async () => {
    console.log('Видаляємо дошку');
  };

  return (
    <li className='relative'>
      <NavLink
        className={({ isActive }) =>
          `group flex items-center gap-1 py-5 px-3.5 -mx-3.5 hover:bg-bg-dark transition-all duration-300 md:gap-2 md:-mx-6  ${
            isActive
              ? 'active bg-bg-dark  after:content-[""] after:absolute after:top-0 after:-right-3.5 after:w-1 after:h-full after:rounded-l after:bg-brand md:after:-right-6'
              : ''
          }`
        }
        to={`/home/${board.id}`}
      >
        <svg
          className='stroke-white opacity-40 group-[.active]:opacity-100 fill-transparent'
          width={18}
          height={18}
        >
          <use href={`${sprite}#${board.icons}`} />
        </svg>
        <p className='opacity-40 text-sm font-medium -tracking-[0.28px] group-[.active]:opacity-100'>
          {board.title}
        </p>
      </NavLink>
      {match && (
        <div className='absolute top-1/2 -translate-y-1/2 right-0 flex gap-2 '>
          <ControlButtons
            confirmAction={handleDellBoard}
            confirmTitle={'Delete Board?'}
            CreateModal={BoardModal}
          />
        </div>
      )}
    </li>
  );
};
export default BoardListItem;
