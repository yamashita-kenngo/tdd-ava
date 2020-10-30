const test = require('ava');
const assert = require('assert');

const greeting = guest => `Hello, ${guest}!`;

test('greeting()', t => {
    t.is(greeting('ava'), 'Hello, ava!');
});