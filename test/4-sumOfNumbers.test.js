const sum = require('../Unit Tests/4-sumOfNumbers')

const { assert } = require('chai')

describe('Test sum',() =>{
    it('Should test for array', ()=>{
        let input =[1,2,3]

        assert.isArray(input)
    })
    it('Return the sum', ()=>{
        let input =[1,2,3]
        let expected = 6
        let actual = sum(input)

        assert.equal(actual,expected)
    })
})