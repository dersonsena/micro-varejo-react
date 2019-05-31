import lang from '~/lang';

export default [
  {
    isOpen: false,
    isActive: false,
    icon: 'sidenav-icon ion ion-md-speedometer',
    text: lang('app.sidebarNav.dashboard'),
    to: '/'
  },
  {
    isOpen: false,
    isActive: false,
    icon: 'sidenav-icon ion ion-ios-albums',
    text: lang('app.sidebarNav.entries'),
    items: [
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-list',
        text: lang('app.sidebarNav.productCategories'),
        to: '/entries/product-categories'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-paint-brush',
        text: lang('app.sidebarNav.colors'),
        to: '/entries/colors'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-tie',
        text: lang('app.sidebarNav.suppliers'),
        to: '/entries/suppliers'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-store',
        text: lang('app.sidebarNav.stores'),
        to: '/entries/stores'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-tshirt',
        text: lang('app.sidebarNav.products'),
        to: '/entries/products'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-ruler-combined',
        text: lang('app.sidebarNav.sizes'),
        to: '/entries/sizes'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-tie',
        text: lang('app.sidebarNav.sellers'),
        to: '/entries/sellers'
      },
    ]
  },
  { divider: true },
  {
    isOpen: false,
    isActive: false,
    icon: 'sidenav-icon fas fa-cogs',
    text: lang('app.sidebarNav.system'),
    items: [
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-user-circle',
        text: lang('app.sidebarNav.users'),
        to: '/system/users'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-cog',
        text: lang('app.sidebarNav.settings'),
        to: '/system/settings'
      },
      {
        isActive: false,
        icon: 'sidenav-icon fas fa-sign-out-alt',
        text: lang('app.sidebarNav.logout'),
        to: '/logout'
      },
    ]
  }
];
