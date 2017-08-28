var assert = require('assert');
var nx = require('../node_modules/next-js-core2/dist/next-js-core2');
require('../src/next-unique');

describe('src/next-unique', function () {
  it('unique simple array', function () {
    var array1 = [1,2,4,5,6,7,1,2];
    assert.deepEqual([1,2,4,5,6,7], nx.unique( array1 ));
  });


  it('unique object array', function () {
    var array2 = [
      {
        id:1,
        value:'value1'
      },
      {
        id:2,
        value:'value2'
      },
      {
        id:3,
        value:'value3'
      },
      {
        id:1,
        value:'value1'
      }
    ];

    var resKeys = [1,2,3];
    var resValues = ['value1','value2','value3'];
    var result = nx.unique (array2,'id');

    assert.deepEqual(result.map(item=>item.id), resKeys);
  });
});
