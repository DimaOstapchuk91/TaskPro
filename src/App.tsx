import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import ScreensPage from './pages/ScreensPage/ScreensPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/auth/:id' element={<AuthPage />} />
        <Route path='/home/:boardId' element={<ScreensPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
