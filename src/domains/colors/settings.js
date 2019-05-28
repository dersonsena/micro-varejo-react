export const title = 'Cores'
export const moduleRoute = '/entries/colors'

export const table = () => ({
  title,
  moduleRoute,
  filters: {
    name: '',
    status: ''
  },
});

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
