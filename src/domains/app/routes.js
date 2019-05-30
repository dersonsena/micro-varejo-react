import { title, moduleRoute } from './settings';
import MainLayout from '~/layout/MainLayout';
import DashboardPage from './pages/DashboardPage';

export const DASHBOARD = moduleRoute;

export default [
  {
    path: DASHBOARD,
    isPrivate: true,
    component: DashboardPage,
    layout: MainLayout,
    meta: {
      breadcrumb: [
        { text: title, href: '#' }
      ]
    }
  }
];
