import React from 'react';
import LoginLayout from '~/layout/LoginLayout';
import LoginPage from './pages/LoginPage';

export const LOGIN = '/login';
export const FORGOT_PASSWORD = '/forgot-password';

export default [
  {
    path: LOGIN,
    layout: LoginLayout,
    component: LoginPage,
    meta: {}
  },
  {
    path: FORGOT_PASSWORD,
    layout: LoginLayout,
    component: () => <h1>Esqueci minha Senha</h1>,
    meta: {}
  }
];
