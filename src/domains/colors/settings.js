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
