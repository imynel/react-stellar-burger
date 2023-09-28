import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
  const isAuthCheck = useSelector((store) => store.registerReducer.isAuthCheck);
  const user = useSelector((store) => store.registerReducer.user);

  const location = useLocation();

  if (!isAuthCheck) {
    console.log(isAuthCheck);
    return null;
  }

  if (onlyUnAuth && user) {
    console.log(isAuthCheck);
    const { from } = location.state || { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    console.log(isAuthCheck);
    return <Navigate to="/login" state={{ from: location }} />;
  }
  console.log(isAuthCheck);
  return component;
};

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({ component }) => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
