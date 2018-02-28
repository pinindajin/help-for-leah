/*
    This file exists to expose the kata methods as a single module for testing or other use. Ignore for kata practice.
*/

const addOne = require('./katas/addOne');
const stringToNATOPhonetic = require('./katas/stringToNATOPhonetic');
const countHorses = require('./katas/countHorses');

module.exports = {
    addOne: addOne,
    stringToNATOPhonetic: stringToNATOPhonetic,
    countHorses: countHorses
}
