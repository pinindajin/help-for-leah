const expect = require('chai').expect;
const stringToNATOPhonetic = require('../app').stringToNATOPhonetic;

describe('stringToNATOPhonetic()', () => {
    it('input string of tyah SHOULD PASS', () => {
        // arrange
        const input = 'tyah';
        const expected = 'tangoyankeealfahotel';

        // act
        const result = stringToNATOPhonetic(input);

        // assert
        expect(result).to.equal(expected);
    });
});