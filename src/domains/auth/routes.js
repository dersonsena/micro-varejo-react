import LoginLayout from '~/layout/LoginLayout';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

/** @type {String} */
export const LOGIN = '/login';

/** @type {String} */
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
    component: ForgotPasswordPage,
    meta: {}
  }
];
