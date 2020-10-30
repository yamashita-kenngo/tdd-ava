const test = require('ava');
const fizzBuzz = require('./index');
test('fizzBuzz()', t => {
    t.is(fizzBuzz(1), '1');
    t.is(fizzBuzz(15), 'FizzBuzz');
    t.is(fizzBuzz(30), 'FizzBuzz');
});