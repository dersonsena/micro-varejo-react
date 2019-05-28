import React from 'react';
import { title, moduleRoute } from './settings';
import MainLayout from '~/layout/MainLayout';

export const INDEX = moduleRoute;
export const CREATE = `${moduleRoute}/create`;
export const UPDATE = `${moduleRoute}/update/:id`;

export default [
  {
    path: INDEX,
    isPrivate: true,
    component: () => <h1>Colors - Index</h1>,
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
    component: () => <h1>Colors - CREATE</h1>,
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
    component: () => <h1>Colors - UPDATE</h1>,
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
