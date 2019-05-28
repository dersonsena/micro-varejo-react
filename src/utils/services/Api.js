import Http from './Http'

/**
 * @typedef {Api}
 */
export default class Api {
  static base = '/v1'

  /**
   * @param {Http} http
   */
  constructor (http) {
    this._http = http
  }

  /**
   * @param {String} path
   * @param {Object} options
   * @param {Object} http
   * @return {this}
   */
  static build (path = '', options = {}) {
    const httpInstance = Http.build(Http.normalize(Api.base, path), options)
    return new this(httpInstance)
  }

  get http () {
    return this._http
  }
}
