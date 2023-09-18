import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home-page/home-page';
import { SignIn } from '../registration/SignIn/SignIn';
import { Registration } from '../registration/Registration/Registration';
import { ForgotPassword1 } from '../registration/ForgotPassword1/ForgotPassword1';
import { ForgotPassword2 } from '../registration/ForgotPassword2/ForgotPassword2';
import { NotFound404 } from '../NotFound404/NotFound404';
<<<<<<< HEAD
import { Profile } from '../registration/Profile/Profile'
import AppHeader from '../AppHeader/AppHeader'
=======
import AppHeader from '../AppHeader/AppHeader';
>>>>>>> 6fbcc458dcc26290beb65aee24e7bd3c7b77a11c
function App() {
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forgot-password' element={<ForgotPassword1 />} />
          <Route path='/reset-password' element={<ForgotPassword2 />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound404 />} />
=======
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword1 />} />
          <Route path="/reset-password" element={<ForgotPassword2 />} />
          <Route path="*" element={<NotFound404 />} />
>>>>>>> 6fbcc458dcc26290beb65aee24e7bd3c7b77a11c
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
