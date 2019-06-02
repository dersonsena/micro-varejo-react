import ApiBaseServices from '~/utils/services/ApiBaseServices'

export default class ColorsService extends ApiBaseServices {
  /**
   * @type {String}
   */
  static resource = '/entries/colors'

  constructor () {
    super(ColorsService.resource)
  }
}
