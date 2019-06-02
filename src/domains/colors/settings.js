/** @type {String} */
export const title = 'Cores';

/** @type {String} */
export const moduleRoute = '/entries/colors';

/** @type {Object} */
export const table = () => ({
  title,
  moduleRoute,
  filters: {
    name: '',
    status: ''
  },
  rows: [],
  fields: [
    {
      key: 'name',
      label: 'Nome',
      thClass: 'text-nowrap',
      tdClass: 'align-middle py-3'
    },
    {
      key: 'abbreviation',
      label: 'Sigla',
      thClass: 'text-nowrap text-center',
      thStyle: { width: '100px' },
      tdClass: 'align-middle py-3 text-center'
    },
    {
      key: 'status',
      label: 'Status',
      thClass: 'text-nowrap text-center',
      tdClass: 'align-middle py-3 text-center',
      thStyle: { width: '110px' },
      formatter: (value, key, item) => {
        return (value === 1 ? 'Ativo' : 'Inativo')
      }
    },
    {
      key: 'actions',
      label: ' ',
      thClass: 'text-nowrap',
      tdClass: 'text-nowrap align-middle text-center py-3 text-center',
      thStyle: { width: '180px' },
    }
  ]
});

/** @type {Object} */
export const form = () => ({
  title,
  moduleRoute,
  record: {
    id: '',
    name: '',
    abbreviation: '',
    status: true
  }
});
