export default [
  {
    isOpen: false,
    isActive: false,
    icon: 'sidenav-icon ion ion-md-speedometer',
    text: 'Dashboard',
    to: '/'
  },
  {
    isOpen: true,
    isActive: true,
    icon: 'sidenav-icon ion ion-ios-albums',
    text: 'Cadastros',
    items: [
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-list',
        text: 'Categorias Produto',
        to: '/entries/product-categories'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-paint-brush',
        text: 'Cores',
        to: '/entries/colors'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-tie',
        text: 'Fornecedores',
        to: '/entries/suppliers'
      },
      {
        isActive: true,
        icon: 'sidenav-icon fas fa-store',
        text: 'Lojas',
        to: '/entries/stores'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-tshirt',
        text: 'Produtos',
        to: '/entries/products'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-ruler-combined',
        text: 'Tamanhos',
        to: '/entries/sizes'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-tie',
        text: 'Vendedores',
        to: '/entries/sellers'
      },
    ]
  },
  { divider: true },
  {
    isOpen: false,
    isActive: false,
    icon: 'sidenav-icon fas fa-cogs',
    text: 'Sistema',
    items: [
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-circle',
        text: 'Usuários',
        to: '/system/users'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-cog',
        text: 'Configurações',
        to: '/system/settings'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-sign-out-alt',
        text: 'Sair',
        to: '/logout'
      },
    ]
  }
];
