export default [
  {
    isOpen: false,
    isActive: false,
    icon: 'sidenav-icon ion ion-md-speedometer',
    text: 'Dashboard'
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
        text: 'Categorias Produto'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-paint-brush',
        text: 'Cores'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-tie',
        text: 'Fornecedores'
      },
      {
        isActive: true,
        icon: 'sidenav-icon fas fa-store',
        text: 'Lojas'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-tshirt',
        text: 'Produtos'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-ruler-combined',
        text: 'Tamanhos'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-tie',
        text: 'Vendedores'
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
        text: 'Usuários'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-cog',
        text: 'Configurações'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-sign-out-alt',
        text: 'Sair'
      },
    ]
  }
];
