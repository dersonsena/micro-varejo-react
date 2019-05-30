import messages from './messages';
import { lang } from '~/_config/settings';
import { get } from '~/utils';

/**
 * @type {String}
 */
let locale = lang();

/**
 * @param {String} newLocale
 */
export const setLocale = (newLocale) => {
  locale = newLocale;
};

/**
 * @returns {String}
 */
export const getLocale = () => {
  return locale;
};

/**
 * @param {String} path
 * @param {String} fallback
 * @returns {*}
 */
export default (path, fallback = '') => {
  return get(messages(locale), path, fallback);
};
