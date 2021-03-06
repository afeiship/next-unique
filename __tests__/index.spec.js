(function () {
  require('../src');

  describe('api.basic test', () => {
    test('unique simple array', function () {
      var array1 = [1, 2, 4, 5, 6, 7, 1, 2];
      expect([1, 2, 4, 5, 6, 7]).toEqual(nx.unique(array1));
    });

    test('unique: append & unique', function () {
      var arr1 = [1, 2, 4, 5, 6, 7, 1, 2];
      var arr2 = [2, 4, 5];
      var result = [].concat(arr2, arr1);
      expect([2, 4, 5, 1, 6, 7]).toEqual(nx.unique(result));
    });

    test('unique object array', function () {
      var array2 = [
        {
          id: 1,
          value: 'value1'
        },
        {
          id: 2,
          value: 'value2'
        },
        {
          id: 3,
          value: 'value3'
        },
        {
          id: 1,
          value: 'value1'
        }
      ];

      var resKeys = [1, 2, 3];
      var result = nx.unique(array2, 'id');

      expect(result.map((item) => item.id)).toEqual(resKeys);
    });

    test('uniq object by deepth key', () => {
      const arr = [
        { name: 'fz', value: { key: 1 } },
        { name: 'fz', value: { key: 2 } },
        { name: 'fz', value: { key: 3 } },
        { name: 'fz', value: { key: 1 } }
      ];

      const result = nx.unique(arr, 'value.key');
      expect(result).toEqual([
        { name: 'fz', value: { key: 1 } },
        { name: 'fz', value: { key: 2 } },
        { name: 'fz', value: { key: 3 } }
      ]);

    });
  });
})();
