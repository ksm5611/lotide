// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle
};

// Can export a number (not common, but JS won't stop me!)
// Can export an object (quite common!)
// Can export a function (we did this for all our functions)


// const _ = require('./index')