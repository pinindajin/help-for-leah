const assert = require('assert');
const addOne = require('../app').addOne;

describe('addOne()', () => {
    it('an input array of whole integers', () => {
        // arrange
        const input = [4, 5, 2, 6, 3];
        const expected = '56374';

        // act
        const result = addOne(input).join('');

        // assert
        assert(input === expected);
    });
});