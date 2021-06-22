const { assert } = require('chai')

const isOddOrEven = require('../2-evenOrOdd')

describe('Test 2-isOddOrEven',() =>{
    it('Should test for undefined',()=>{
        assert.equal(isOddOrEven(1),undefined)
        assert.equal(isOddOrEven(null),undefined)
        assert.equal(isOddOrEven(undefined),undefined)
        assert.equal(isOddOrEven(-100),undefined)
        assert.equal(isOddOrEven(1.2),undefined)
    })

    it('Should test for even',()=>{
        assert.equal(isOddOrEven('11'),'even')
        assert.equal(isOddOrEven('Kaka'),'even')
    })

    it('Should test for Odd',()=>{
        assert.equal(isOddOrEven('1'),'odd')
        assert.equal(isOddOrEven('Kak'),'odd')
    })
})