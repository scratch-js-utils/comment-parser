const equals = require("assert").strictEqual
const phin = require

module.exports = async function(id,page=1) {
  equals(typeof id,"number",new TypeError("Expected argument 1 to be a number"))
  // Now we do the request
  
  const res = await phin(`https://scratch.mit.edu/site-api/comments/project/${id}/?page=${page}`
  if (res.statusCode == 200) {} else 
