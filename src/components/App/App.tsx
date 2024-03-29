import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from '../../pages/home-page/home-page';
import { Registration } from '../../pages/Registration/Registration';
import { ForgotPassword1 } from '../../pages/ForgotPassword1/ForgotPassword1';
import { ForgotPassword2 } from '../../pages/ForgotPassword2/ForgotPassword2';
import { NotFound404 } from '../NotFound404/NotFound404';
import { Profile } from '../../pages/Profile/Profile';
import AppHeader from '../AppHeader/AppHeader';
import { checkUserAuth } from '../../services/actions/register';
import { OnlyAuth, OnlyUnAuth } from '../ProtectedRoute/ProtectedRoute';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { getAllIngredients } from '../../services/actions/ingredients';
import { Feed } from '../Feed/Feed';
import { OrderHistory } from '../OrderHistory/OrderHistory';
import { FeedInfo } from '../FeedInfo/FeedInfo';
import { useDispatch } from '../../services/hooks/hooks';
import { SignIn } from '../../pages/SignIn/SignIn';

function App(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const background = location.state && location.state?.background;
  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getAllIngredients());
    dispatch(checkUserAuth());
  }, []);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<OnlyUnAuth component={<SignIn />} />} />
        <Route path="/registration" element={<OnlyUnAuth component={<Registration />} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword1 />} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ForgotPassword2 />} />} />
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile/orders" element={<OnlyAuth component={<OrderHistory />} />} />
        <Route path="/feed/:numberOrder" element={<FeedInfo />} />
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="/profile/orders/:numberOrder" element={<FeedInfo />} />
        <Route path="*" element={<NotFound404 />} />
        <Route
            path="/order"
            element={
              <Modal onClose={handleModalClose}>
                <OrderDetails />
              </Modal>
            }
          />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/profile/orders/:numberOrder"
            element={
              <OnlyAuth
                component={
                  <Modal onClose={handleModalClose}>
                    <FeedInfo />
                  </Modal>
                }
              />
            }
          />
          <Route
            path="/feed/:numberOrder"
            element={
              <Modal onClose={handleModalClose}>
                <FeedInfo />
              </Modal>
            }
          />
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={handleModalClose}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="/order"
            element={
              <Modal onClose={handleModalClose}>
                <OrderDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
