import Logo from '../Logo/Logo';
import sprite from '../../assets/sprite.svg';
import BoardList from '../BoardList/BoardList';
import flowerpot from '../../assets/img/flowerpot.png';

const Sidebar = () => {
  const mokedBoards = [
    { id: '1', title: 'Board 1', icon: 'icon-project' },
    { id: '2', title: 'Board 2', icon: 'icon-puzzle' },
    { id: '3', title: 'Board 3', icon: 'icon-star' },
  ];

  return (
    <aside className='w-full flex flex-col justify-between max-w-[225px] p-3.5 h-screen bg-bg sticky top-0 md:max-w-[260px] md:p-6'>
      <div>
        <Logo />
        <p className='text-xs mb-2 -tracking-[0.24px] opacity-50'>My boards</p>
        <div className='flex py-3.5 mb-10 justify-between w-full border-y border-white/10 '>
          <p className='max-w-[76px] text-sm font-medium -tracking-[0.28px]'>
            Create a new board
          </p>
          <button
            className='w-10 h-9 flex justify-center items-center bg-label-green rounded-[6px] hover:bg-hover'
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
      </div>
      <div>
        <div className='p-3.5 mb-6 bg-bg-dark rounded-lg md:p-5'>
          <img
            className='mb-3.5'
            src={flowerpot}
            alt='flowerpot img'
            width={54}
            height={78}
          />
          <p className='text-xs mb-4.5 -tracking-[0.24px] leading-4 md:text-sm md:liding-5 md:-tracking-[0.28px]'>
            If you need help with
            <br />
            <span className='text-label-green'>TaskPro</span>, check out our
            support resources or reach out to our customer support team.
          </p>
          <button
            className='flex !text-xs -tracking-[0.24px] stroke-white items-center gap-2 hover:text-hover hover:stroke-hover hover:drop-shadow-[0_0_6px_#BEDBB0]'
            type='button'
          >
            <svg width='20' height='20' className='fill-transparent'>
              <use href={`${sprite}#icon-help`}></use>
            </svg>
            Need help?
          </button>
        </div>
        <button
          className='flex items-center ml-2.5 mb-2.5 !text-sm font-medium gap-3.5 stroke-label-green hover:text-hover hover:stroke-hover hover:drop-shadow-[0_0_6px_#BEDBB0] md:ml-0 md:mb-0'
          type='button'
        >
          <svg width='32' height='32' className='fill-transparent'>
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
          Log out
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
