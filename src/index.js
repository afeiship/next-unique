import nx from '@jswork/next';

nx.unique = function (inArray, inIdKey) {
  const result = [];
  const map = new Map();
  inArray.forEach(function (value) {
    const mapKey = inIdKey ? nx.get(value, inIdKey) : value;
    if (!map.has(mapKey)) {
      map.set(mapKey, true);
      result.push(value);
    }
  });
  return result;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.unique;
}

export default nx.unique;
