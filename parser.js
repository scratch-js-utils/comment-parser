const equals = require("assert").strictEqual;
const phin = require("phin")
const cheerio = require("cheerio")

module.exports = async function (id, page = 1) {
  equals(
    typeof id,
    "number",
    new TypeError("Expected argument 1 to be a number")
  );
  // Now we do the request

  const res = await phin(
    `https://scratch.mit.edu/site-api/comments/project/${id}/?page=${page}`
  );
  if (res.statusCode == 200) {
    $('div.comment[id^="comment-"]').each(function() {
      // `this` is the div
    });
  } else {
    throw new Error("A network error occured.");
  }
};
