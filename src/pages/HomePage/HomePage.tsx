import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
// import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {
  return (
    <section className='w-full h-screen flex overflow-hidden'>
      <div className='hidden max-w-[260px]  xl:flex flex-shrink-0'>
        <Sidebar />
      </div>
      <div className='flex-1 relative flex flex-col'>
        <Header />
        <div className='flex-1 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
