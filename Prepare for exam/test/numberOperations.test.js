const numberOperations = require("../numberOperations")

const { assert } = require('chai')

describe('Should test numberOperations', () => {
    describe('Shoud test powNumber function', () => {
        it('Should test powNumber return pow number', () => {
            assert.equal(numberOperations.powNumber(5), 25)
            assert.equal(numberOperations.powNumber(2), 4)
        })
    })
    describe('Shoud test numberChecker function', () => {
        it('Should test non number provided', () => {
            assert.throw(() => numberOperations.numberChecker(undefined), 'The input is not a number!')
            assert.throw(() => numberOperations.numberChecker('text'), 'The input is not a number!')
        })
        it('Should test non number provided', () => {
            assert.throw(() => numberOperations.numberChecker(undefined), 'The input is not a number!')
            assert.throw(() => numberOperations.numberChecker('text'), 'The input is not a number!')
        })
        it('Should test for lower than 100!', () => {
            assert.equal(numberOperations.numberChecker(50), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(2.5), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(-10), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker('5'), 'The number is lower than 100!')
        })
        it('Should test for greater than 100!', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker(120), 'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker(100.50), 'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker('150'), 'The number is greater or equal to 100!')

        })
    })
    describe('Should test sumArrays function', () => {
        it('Should test for array1 longer than array2', () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2], [1, 2, 3, 4]), [2, 4, 3, 4]);
            assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 4, 5]), [4, 6, 5]);
        })

        it('Should test for array2 longer than array1', () => {
            assert.deepEqual(numberOperations.sumArrays([1], [3])[4]);
            assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 2]), [4, 4]);
            assert.deepEqual(numberOperations.sumArrays([1000, 3000], [1000, 5000]), [2000, 8000]);
        })
    })
})
