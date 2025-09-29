import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <section className='h-screen flex'>
      <div className='hidden xl:flex w-[260px] flex-shrink-0'>
        <Sidebar />
      </div>

      <div className='flex-1 w-full h-full relative flex flex-col overflow-hidden'>
        <Header />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
