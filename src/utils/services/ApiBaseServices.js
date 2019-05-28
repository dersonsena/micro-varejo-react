import Api from './Api'
import queryString from 'query-string'

export default class ApiBaseServices extends Api {
  /**
   * @type {String}
   */
  static resource = ''

  /**
   * @type {String}
   */
  primaryKeyColumn = 'id'

  /**
   * @param {Object} http
   * @param {String} resource
   * @param {Object} options
   */
  constructor (resource) {
    const http = Api.build(resource).http
    super(http)
  }

  /**
   * @return {this}
   */
  static build () {
    return new this(this.resource)
  }

  /**
   * @param {Object} parameters
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  search (parameters = {}) {
    let stringParams = ''
    const params = {}

    for (let fieldName in parameters) {
      params[`filter[${fieldName}]`] = parameters[fieldName]
      stringParams = '?' + queryString.stringify(params)
    }

    return this.http.get(`${stringParams}`)
      .then(response => response)
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  create (record) {
    return this.http.post('', record)
  }

  /**
   * @param {String|Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  read (record) {
    return this.http.get(`/${this.extractId(record)}`)
  }

  /**
   * @param {Number} id
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  fetchById (id) {
    return this.http.get(`/${id}`)
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  update (record) {
    return this.http.put(`/${this.extractId(record)}`, record)
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  delete (record) {
    return this.http.delete(`/${this.extractId(record)}`)
  }

  /**
   * @param {String|Object} record
   * @returns {String}
   */
  extractId (record) {
    if (typeof record === 'object') {
      return record[this.primaryKeyColumn]
    }

    return String(record)
  }
}
