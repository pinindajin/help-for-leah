const expect = require('chai').expect;
const addOne = require('../app').addOne;

xdescribe('addOne()', () => {
    it('the output SHOULD be an array', () => {
        // arrange
        const input = [4, 5, 3];

        // act
        const result = addOne(input);

        // assert
        expect(Array.isArray(result)).to.be.true;
    });
    it('all elements in the output array SHOULD be a number', () => {
        // arrange
        const input = [5, 8, 33];

        // act
        const result = addOne(input);

        // assert
        result.forEach(v => {
            expect(typeof(v)).to.equal('number');
        });
    });
    it('an input array of whole integers SHOULD PASS', () => {
        // arrange
        const input = [4, 5, 2, 6, 3];
        const expected = '56374';
        const expectedLength = 5;

        // act
        const result = addOne(input);
        const resultString = result.join('');

        // assert
        expect(resultString).to.equal(expected);
        expect(result.length).to.equal(expectedLength);
    });
    it('an array with 1 value SHOULD PASS', () => {
        // arrange
        const input = [6];
        const expected = 7;
        const expectedLength = 1;

        // act
        const result = addOne(input);
        const resultString = result[0];

        // assert
        expect(resultString).to.equal(expected);
        expect(result.length).to.equal(expectedLength);
    });
    it('an empty input array SHOULD return an empty array', () => {
        // arrange
        const input = [];
        const expected = [];

        // act
        const result = addOne(input);

        // assert
        expect(result.length).to.equal(expected.length);
    });
    it('an input array that includes a non string value SHOULD throw an error', () => {
        // arrange
        const input = [6, 4, 7, 'Pickachu'];
        const expected = 'Error - Invalid Argument: a non number value was provided in input array.';
        let result = 'No Error thrown';

        // act
        try {
            const result = addOne(input);
        }
        catch(e) {
            result = e.message;
        }
        
        // assert
        expect(result).to.equal(expected);
    });
});