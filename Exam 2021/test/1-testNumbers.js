const { assert } = require('chai')

const testNumbers = require('../solution-3/testNumbers')

describe("Tests …", function () {
    describe("Test sumNumbers …", function () {
        it("Test if first is not number", function () {
            assert.equal(testNumbers.sumNumbers('1', 2.5), undefined)
            assert.equal(testNumbers.sumNumbers('1.2', 2), undefined)
            assert.equal(testNumbers.sumNumbers('text', 2), undefined)
            assert.equal(testNumbers.sumNumbers(false, 2), undefined)
            assert.equal(testNumbers.sumNumbers(undefined, 2), undefined)
        });

        it("Test if second is not number", function () {
            assert.equal(testNumbers.sumNumbers(1, '1'), undefined)
            assert.equal(testNumbers.sumNumbers(1.2, '1.2'), undefined)
            assert.equal(testNumbers.sumNumbers(-1, 'text'), undefined)
            assert.equal(testNumbers.sumNumbers(10, false), undefined)
            assert.equal(testNumbers.sumNumbers(15, undefined), undefined)
        });

        it("Test if numbers are provided", function () {
            assert.equal(testNumbers.sumNumbers(1, 1), 2.00)
            assert.equal(testNumbers.sumNumbers(1.2, 1.2), 2.40)
            assert.equal(testNumbers.sumNumbers(-1, 2), 1.00)
            assert.equal(testNumbers.sumNumbers(10, -5), 5.00)
            assert.equal(testNumbers.sumNumbers(-5, -5), -10.00)
        });
    });
    describe("Test numberChecker …", function () {
        it("Test if not number is provided ", function () {
            assert.throw(() =>testNumbers.numberChecker('text'),'The input is not a number!')
            assert.throw(() =>testNumbers.numberChecker(undefined),'The input is not a number!')
            
        });

        it("Test if even number is provided ", function () {
            assert.equal(testNumbers.numberChecker('2'),'The number is even!')
            assert.equal(testNumbers.numberChecker('4'),'The number is even!')
            assert.equal(testNumbers.numberChecker(6),'The number is even!')
            
        });

        it("Test if odd number is provided ", function () {
            assert.equal(testNumbers.numberChecker('1'),'The number is odd!')
            assert.equal(testNumbers.numberChecker('3'),'The number is odd!')
            assert.equal(testNumbers.numberChecker(6.5),'The number is odd!')
            
        });


    });

    describe("Test averageSumArray …", function () {
        it("Test if array is provided ", function () {
            assert.equal(testNumbers.averageSumArray([1,1,1]),1)
            assert.equal(testNumbers.averageSumArray([1,2,3]),2)
            assert.closeTo(testNumbers.averageSumArray([1.5,5.5,4.5]),3.83,0.1)

            
        });

       

    });

});
