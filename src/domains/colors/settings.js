/** @type {String} */
export const title = 'Cores'

/** @type {String} */
export const moduleRoute = '/entries/colors'

/** @type {Function} */
export const table = () => ({
  title,
  moduleRoute,
  filters: {
    name: '',
    status: ''
  },
});

/** @type {Function} */
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
