import Logo from '../Logo/Logo';

import BoardList from '../BoardList/BoardList';

import AddBoardBtn from '../btn/AddBoardBtn/AddBoardBtn';
import LoggOutBtn from '../btn/LoggOutBtn/LoggOutBtn';
import NeedHelp from '../NeedHelp/NeedHelp';

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
        <AddBoardBtn />
        <nav>
          <BoardList mokedBoards={mokedBoards} />
        </nav>
      </div>
      <div>
        <NeedHelp />
        <LoggOutBtn />
      </div>
    </aside>
  );
};
export default Sidebar;
