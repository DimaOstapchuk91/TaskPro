import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import ScreensPage from './pages/ScreensPage/ScreensPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/home'
          element={
            <PrivateRoute component={HomePage} redirectTo='/auth/login' />
          }
        >
          <Route index element={<ScreensPage />} />
          <Route path=':boardId' element={<ScreensPage />} />
        </Route>
        <Route
          path='/welcome'
          element={
            <RestrictedRoute component={WelcomePage} redirectTo='/home' />
          }
        />
        <Route
          path='/auth/:id'
          element={<RestrictedRoute component={AuthPage} redirectTo='/home' />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
