const CustomAPIError = require('../errors/custom-error')
const{StatusCodes} = require('http-status-codes');
class unauthorized extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode=StatusCodes.UNAUTHORIZED
      
    }
  }
  
  module.exports = unauthorized