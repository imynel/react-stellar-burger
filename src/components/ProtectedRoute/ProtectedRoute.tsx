import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from '../../services/hooks/hooks';

type Props = {
  onlyUnAuth?: boolean
  component: JSX.Element
}

const ProtectedRoute = ({ onlyUnAuth = false, component}: Props): JSX.Element | null => {
  const isAuthCheck = useSelector((store) => store.registerReducer.isAuthCheck);
  const user = useSelector((store) => store.registerReducer.user);

  const location = useLocation();
  
  if (!isAuthCheck) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  
  return component;
};

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({ component }: Props): JSX.Element => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
