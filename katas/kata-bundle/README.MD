# Kata Bundle

This project contains a set of katas to help practice TDD development as well sharpen coding skills.

## Current Katas

- addOne : Add one to each value in an array.
- countHorses : Iterate through a semi complex object and count and sum the number of objects in an array in one of the child properties.
- stringToNATOPhotnetic : Map characters in a string to a string value.

## Getting Started
- Install modules
```
    npm install
```
- Choose tests to run by navigating to the test directory, selecting a ____.test.js file, then removing the 'x' in front of the describe method of a suite of tests you wish to run.
```
    xdescribe('blah blah blah', () => {...})
    // becomes
    describe('blah blah blah', () => {...})
```

- Run tests
```
    npm run test
```
- Navigate to the 'katas' folder and write code within the function body to make the tests pass.