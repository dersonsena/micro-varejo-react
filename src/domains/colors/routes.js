import { title, moduleRoute } from './settings';
import MainLayout from '~/layout/MainLayout';
import ColorsPage from './pages/ColorsPage';
import ColorsForm from './pages/ColorsForm';

export const INDEX = moduleRoute;
export const CREATE = `${moduleRoute}/create`;
export const UPDATE = `${moduleRoute}/update/:id`;

export default [
  {
    path: INDEX,
    isPrivate: true,
    component: ColorsPage,
    layout: MainLayout,
    meta: {
      breadcrumb: [
        { text: title, href: '#' },
        { text: 'Consulta de Dados', active: true }
      ]
    }
  },
  {
    path: CREATE,
    isPrivate: true,
    component: ColorsForm,
    layout: MainLayout,
    meta: {
      scope: 'create',
      breadcrumb: [
        { text: title, href: '#' },
        { text: 'Consulta de Dados', to: { name: `${moduleRoute}-index` } },
        { text: 'Adicionando Dados', active: true }
      ]
    }
  },
  {
    path: UPDATE,
    isPrivate: true,
    component: ColorsForm,
    layout: MainLayout,
    meta: {
      scope: 'edit',
      breadcrumb: [
        { text: title, href: '#' },
        { text: 'Consulta de Dados', to: { name: `${moduleRoute}-index` } },
        { text: 'Editando dados', active: true }
      ]
    }
  }
];
