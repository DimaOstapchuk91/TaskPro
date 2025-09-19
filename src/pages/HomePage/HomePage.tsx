import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
// import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {
  return (
    <section className='w-full flex'>
      <div className='w-full max-w-[260px] hidden xl:flex'>
        <Sidebar />
      </div>
      <div className='w-full flex flex-col'>
        <Header />
        <Outlet />
      </div>
    </section>
  );
};

export default HomePage;
