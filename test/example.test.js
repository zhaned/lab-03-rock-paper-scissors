// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
const test = QUnit.test;

test('an input of 0 should return \'rock\'', (expect) => {
    const expected = 'rock';
    const actual = getRandomThrow(0);

    expect.equal(actual, expected);
});

test('an input of 0 should return \'paper\'', (expect) => {
    const expected = 'paper';
    const actual = getRandomThrow(1);

    expect.equal(actual, expected);
});

test('an input of 0 should return \'scissor\'', (expect) => {
    const expected = 'scissor';
    const actual = getRandomThrow(2);

    expect.equal(actual, expected);
});

