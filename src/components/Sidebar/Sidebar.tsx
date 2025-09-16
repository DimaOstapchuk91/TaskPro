import Logo from '../Logo/Logo';
import sprite from '../../assets/sprite.svg';
import BoardList from '../BoardList/BoardList';

const Sidebar = () => {
  const mokedBoards = [
    { id: '1', title: 'Board 1', icon: 'icon-project' },
    { id: '2', title: 'Board 2', icon: 'icon-puzzle' },
    { id: '3', title: 'Board 3', icon: 'icon-star' },
  ];

  return (
    <aside className='w-full max-w-[225px] p-3.5 h-screen bg-bg sticky top-0'>
      <Logo />
      <p className='text-xs mb-2 -tracking-[0.24px] opacity-50'>My boards</p>
      <div className='flex py-3.5 mb-10 justify-between w-full border-y border-white/10 '>
        <p className='max-w-[76px] text-sm font-medium -tracking-[0.28px]'>
          Create a new board
        </p>
        <button
          className='w-10 h-9 flex justify-center items-center bg-label-green rounded-[6px]'
          type='button'
        >
          <svg width='20' height='20' className='stroke-bg'>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </button>
      </div>
      <nav>
        <BoardList mokedBoards={mokedBoards} />
      </nav>
    </aside>
  );
};
export default Sidebar;
