import React, { useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home-page/home-page'
import { SignIn } from '../registration/SignIn/SignIn';
import { Registration } from '../registration/Registration/Registration';
import { ForgotPassword1 } from '../registration/ForgotPassword1/ForgotPassword1';
import { ForgotPassword2 } from '../registration/ForgotPassword2/ForgotPassword2';
import { NotFound404 } from '../NotFound404/NotFound404';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/forgot-password' element={<ForgotPassword1 />} />
        <Route path='/reset-password' element={<ForgotPassword2 />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
