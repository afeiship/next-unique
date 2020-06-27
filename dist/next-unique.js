/*!
 * name: @feizheng/next-unique
 * description: Unique for array based on next.
 * homepage: https://github.com/afeiship/next-unique
 * version: 1.0.1
 * date: 2020-06-27T05:16:51.431Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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

//# sourceMappingURL=next-unique.js.map
