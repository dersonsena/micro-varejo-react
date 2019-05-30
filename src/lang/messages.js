import ptBr from './pt-br';
import en from './en';

/**
 * @param {String} locale
 * @returns {any}
 */
export default (locale) => {
  const messages = {
    'pt-br': ptBr,
    en
  }

  return messages[locale]
};
