const test = require('ava');

const greeting = guest => `Hello, ${guest}!`;

test('greeting()', t => {
    t.is(greeting('ava'), 'Hello, ava!');
});