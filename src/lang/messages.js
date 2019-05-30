import ptBr from './pt-br';

/**
 * @param {String} locale
 * @returns {any}
 */
export default (locale) => {
  const messages = {
    'pt-br': ptBr
  }

  return messages[locale]
};
