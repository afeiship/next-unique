(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.unique = function (inArray, inIdKey) {
    var result = [];
    var map = {};
    inArray.forEach(function (value) {
      var mapKey = inIdKey ? nx.get(value, inIdKey) : value;
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
