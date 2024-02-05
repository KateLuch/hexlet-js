import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

// if (capitalize('hello') !== 'Hello') {
//     throw new Error ('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//     throw new Error ('Функция работает неверно!');
// }

console.log('Все тесты пройдены!');
