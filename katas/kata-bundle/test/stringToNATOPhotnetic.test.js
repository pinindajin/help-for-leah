const expect = require('chai').expect;
const stringToNATOPhonetic = require('../app').stringToNATOPhonetic;

xdescribe('stringToNATOPhonetic()', () => {
    it('an input of type string that contains a non alphabetic character SHOULD fail', () => {
        // arrange
        const input = 'tue%j';
        const expected = 'Error - Invalid Argument: a non string alphabetic character was provided in the input string.';

        // act
        const result = stringToNATOPhonetic(input);

        // assert
        expect(result).to.equal(expected);
    });
    it('an input that is a non string value SHOULD throw an error', () => {
        // arrange
        const input = 77;
        const expected = 'Error - Invalid Argument: a non string value was provided as the input.';
        let result = 'No Error thrown';

        // act
        try {
            const result = stringToNATOPhonetic(input);
        }
        catch(e) {
            result = e.message;
        }
        
        // assert
        expect(result).to.equal(expected);
    });
    it('the output SHOULD be a string', () => {
        // arrange
        const input = 'thry';
        const expected = 'string';

        // act
        const result = addOne(input);

        // assert
        expect(typeof(result)).to.equal(expected);
    });
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