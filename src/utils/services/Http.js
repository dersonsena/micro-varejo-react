import HTTP from '~/_config/http';

/**
 * @typedef {Http}
 */
export default class Http {
  /**
   * @param {String} path
   * @param {Object} options
   * @param {Object} http
   */
  constructor (path, options, http = null) {
    this.path = path
    this.http = http || HTTP
  }

  /**
   * @param {String} path
   * @param {Object} options
   */
  static build (path, options) {
    return new this(path, options)
  }

  /**
   * @param {Object} response
   * @returns {Object}
   */
  static then (response) {
    let responseFallback = {}

    if (!response) {
      return responseFallback
    }

    responseFallback.headers = response.headers

    if (typeof response.data === 'string') {
      responseFallback.data = JSON.parse(response.data)
    }

    return responseFallback
  }

  /**
   * @param {String} start
   * @param {String} end
   * @returns {String}
   */
  static normalize (start, end) {
    const slash = (end.indexOf('?', 0) !== -1 ? '' : '/')
    return (`${start}${slash}${end}`.replace(/([^:]\/)\/+/g, '$1')).replace(/\/$/, '')
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  get (url) {
    return this.http
      .get(this.constructor.normalize(this.path, url))
      .then(this.constructor.then)
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  post (url, data) {
    return this.http
      .post(this.constructor.normalize(this.path, url), data)
      .then(this.constructor.then)
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  put (url, data) {
    return this.http
      .put(this.constructor.normalize(this.path, url), data)
      .then(this.constructor.then)
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  patch (url, data) {
    return this.http
      .patch(this.constructor.normalize(this.path, url), data)
      .then(this.constructor.then)
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  delete (url) {
    return this.http
      .delete(this.constructor.normalize(this.path, url))
      .then(this.constructor.then)
  }
}
