const equals = require("assert").strictEqual
const phin = require

module.exports = function(id) {
  equals(typeof id,"number",new TypeError("Expected argument 1 to be a number"))
  // Now we do the request
  