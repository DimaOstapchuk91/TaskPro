import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
// import ScreensPage from '../ScreensPage/ScreensPage';

const HomePage = () => {
  return (
    <div className='flex gap-10'>
      <Sidebar />
      <div className='flex flex-col'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
