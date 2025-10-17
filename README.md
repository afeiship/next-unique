# next-unique
> Unique for array based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-unique
```

## usage
```js
import '@jswork/next-unique';

// Simple array
const array1 = [1, 2, 4, 5, 6, 7, 1, 2];
nx.unique(array1);
// => [1, 2, 4, 5, 6, 7]

// Object array with key
const array2 = [
  { id: 1, value: 'value1' },
  { id: 2, value: 'value2' },
  { id: 1, value: 'value1' }
];
nx.unique(array2, 'id');
// => [{ id: 1, value: 'value1' }, { id: 2, value: 'value2' }]

// Deep object array
const array3 = [
  { user: { info: { id: 1 }, name: 'John' } },
  { user: { info: { id: 2 }, name: 'Jane' } },
  { user: { info: { id: 1 }, name: 'Bob' } }
];
nx.unique(array3, 'user.info.id');
// => [{ user: { info: { id: 1 }, name: 'John' } }, { user: { info: { id: 2 }, name: 'Jane' } }]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-unique/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-unique
[version-url]: https://npmjs.org/package/@jswork/next-unique

[license-image]: https://img.shields.io/npm/l/@jswork/next-unique
[license-url]: https://github.com/afeiship/next-unique/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-unique
[size-url]: https://github.com/afeiship/next-unique/blob/master/dist/next-unique.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-unique
[download-url]: https://www.npmjs.com/package/@jswork/next-unique