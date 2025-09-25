import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/slectors/userSelectors';

interface PrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

export const RestrictedRoute = ({
  component: Component,
  redirectTo,
}: PrivateRouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
