/*!
 * name: @jswork/next-unique
 * description: Unique for array based on next.
 * homepage: https://github.com/afeiship/next-unique
 * version: 1.0.0
 * date: 2020-11-21 08:41:03
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.unique = function (inArray, inIdKey) {
    var result = [];
    var map = {};
    inArray.forEach(function (value) {
      var mapKey = inIdKey ? value[inIdKey] : value;
      var mapValue = map[mapKey];
      if (!mapValue) {
        map[mapKey] = true;
        result.push(value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.unique;
  }
})();
