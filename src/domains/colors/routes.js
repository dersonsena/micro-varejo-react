import React from 'react';
import { title, moduleRoute } from './settings';

export default [
  {
    path: moduleRoute,
    private: true,
    component: () => <h1>Colors - Index</h1>,
    meta: {
      breadcrumb: [
        { text: title, href: '#' },
        { text: 'Consulta de Dados', active: true }
      ]
    }
  },
  {
    path: `${moduleRoute}/create`,
    private: true,
    component: () => <h1>Colors - CREATE</h1>,
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
    path: `${moduleRoute}/update/:id`,
    private: true,
    component: () => <h1>Colors - UPDATE</h1>,
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
