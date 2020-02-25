(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.unique = function(inArray, inIdKey) {
    var result = [];
    var map = {};
    nx.each(inArray, function(_, value) {
      var mapKey = inIdKey ? value[inIdKey] : value;
      var mapValue = map[mapKey];
      if (!mapValue) {
        result.push(value);
        map[mapKey] = true;
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.unique;
  }
})();
