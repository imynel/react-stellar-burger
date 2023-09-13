import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home-page/home-page'
import { SignIn } from '../registration/SignIn/SignIn';
import { Registration } from '../registration/Registration/Registration';
import { ForgotPassword1 } from '../registration/ForgotPassword1/ForgotPassword1';
import { ForgotPassword2 } from '../registration/ForgotPassword2/ForgotPassword2';
import { NotFound404 } from '../NotFound404/NotFound404';
import AppHeader from '../AppHeader/AppHeader'
function App() {

  return (
    <>

      <BrowserRouter>
      <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forgot-password' element={<ForgotPassword1 />} />
          <Route path='/reset-password' element={<ForgotPassword2 />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
