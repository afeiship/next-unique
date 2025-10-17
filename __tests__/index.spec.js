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

  test('unique empty array', () => {
    expect(nx.unique([])).toEqual([]);
  });

  test('unique array with only null values', () => {
    const arr = [null, null, null];
    expect(nx.unique(arr)).toEqual([null]);
  });

  test('unique array with only undefined values', () => {
    const arr = [undefined, undefined, undefined];
    expect(nx.unique(arr)).toEqual([undefined]);
  });

  test('unique array with null and undefined values', () => {
    const arr = [null, undefined, null, undefined];
    expect(nx.unique(arr)).toEqual([null, undefined]);
  });

  test('unique array with null/undefined/numbers', () => {
    const arr = [1, null, 2, undefined, 1, null];
    expect(nx.unique(arr)).toEqual([1, null, 2, undefined]);
  });

  test('unique mixed type array', () => {
    const arr = [1, '1', true, 1, '2', false, true, '1'];
    expect(nx.unique(arr)).toEqual([1, '1', true, '2', false]);
  });

  test('unique array of booleans', () => {
    const arr = [true, false, true, true, false, true];
    expect(nx.unique(arr)).toEqual([true, false]);
  });

  test('unique case sensitive strings', () => {
    const arr = ['a', 'A', 'b', 'B', 'a', 'B'];
    expect(nx.unique(arr)).toEqual(['a', 'A', 'b', 'B']);
  });

  test('unique object array with nested arrays', () => {
    const arr = [
      { id: 1, tags: ['a', 'b'] },
      { id: 2, tags: ['b', 'c'] },
      { id: 1, tags: ['d', 'e'] },
      { id: 3, tags: ['a', 'b'] }
    ];
    expect(nx.unique(arr, 'id')).toEqual([
      { id: 1, tags: ['a', 'b'] },
      { id: 2, tags: ['b', 'c'] },
      { id: 3, tags: ['a', 'b'] }
    ]);
  });

  test('unique object array with multiple nested levels', () => {
    const arr = [
      { user: { info: { id: 1 }, name: 'John' } },
      { user: { info: { id: 2 }, name: 'Jane' } },
      { user: { info: { id: 1 }, name: 'Bob' } },
      { user: { info: { id: 3 }, name: 'Alice' } }
    ];
    expect(nx.unique(arr, 'user.info.id')).toEqual([
      { user: { info: { id: 1 }, name: 'John' } },
      { user: { info: { id: 2 }, name: 'Jane' } },
      { user: { info: { id: 3 }, name: 'Alice' } }
    ]);
  });
});
