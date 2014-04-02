var global = require('component-global');

var nativeIsFinite = global.isFinite;
var nativeIsNaN = global.isNaN;

/**
 * Checks if `value` is, or can be coerced to, a finite number.
 *
 * Note: This is not the same as native `isFinite` which will return true for
 * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
 * @api public
 */
function isFinite(value) {
  return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
}

module.exports = isFinite;