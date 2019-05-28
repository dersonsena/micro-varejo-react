/**
 * @type {String}
 */
export const USER_TOKEN_NAME = 'user-token';

/**
 * @type {Boolean}
 */
export const isAuthenticated = () => !!localStorage.getItem(USER_TOKEN_NAME);

/**
 * @param {String} token
 * @type {Function}
 */
export const storeUserToken = (token) => localStorage.setItem(USER_TOKEN_NAME, token);

/**
 * @type {String}
 */
export const getUserToken = () => localStorage.getItem(USER_TOKEN_NAME);
