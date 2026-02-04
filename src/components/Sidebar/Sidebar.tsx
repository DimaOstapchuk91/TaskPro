import Logo from '../Logo/Logo';

import BoardList from '../BoardList/BoardList';

import AddBoardBtn from '../btn/AddBoardBtn/AddBoardBtn';
import LoggOutBtn from '../btn/LoggOutBtn/LoggOutBtn';
import NeedHelp from '../NeedHelp/NeedHelp';

const Sidebar = () => {
  return (
    <aside className='w-full flex flex-col justify-between max-w-[225px] p-3.5 h-screen bg-bg sticky top-0 md:max-w-[260px] md:p-6'>
      <div>
        <Logo />
        <p className='text-xs mb-2 -tracking-[0.24px] opacity-50'>My boards</p>
        <AddBoardBtn />
        <nav>
          <BoardList />
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
