import Api from '~/utils/services/Api';
import { storeUserToken } from '~/utils/auth';

/**
 * @typedef AuthService
 */
export default class AuthService extends Api {
  /**
   * @param {String} email
   * @param {String} password
   * @returns {Promise}
   */
  login (email, password) {
    return this.http
      .post(`/auth/email-password`, { email, password })
      .then(response => {
        storeUserToken(response.data.token);
        return response;
      });
  }
}
