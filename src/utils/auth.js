/**
 * @type {String}
 */
const USER_TOKEN_NAME = 'user-token';

/**
 * @type {Boolean}
 */
export const isAuthenticated = () => !!localStorage.getItem(USER_TOKEN_NAME);

/**
 * @type {String}
 */
export const getUserToken = () => localStorage.getItem(USER_TOKEN_NAME);
