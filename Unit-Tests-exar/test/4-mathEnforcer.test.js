const { assert } = require('chai')
const mathEnforcer = require('../4-mathEnforcer')

describe('Test mathEnforcer',()=>{
    describe('addFive function', ()=>{
        it('Should return null result with non-number parameter', ()=>{
            assert.equal(mathEnforcer.addFive(null))
            assert.equal(mathEnforcer.addFive(undefined))
            assert.equal(mathEnforcer.addFive('1'))
            assert.equal(mathEnforcer.addFive(true))
            assert.equal(mathEnforcer.addFive(false))
        })
        it('Should return the provided number + 5', ()=>{
            assert.equal(mathEnforcer.addFive(5),10)
            assert.equal(mathEnforcer.addFive(-10),-5)
            assert.closeTo(mathEnforcer.addFive(1.4),6.4,0.1)
        })
    })
    describe('subtractTen function', ()=>{
        it('Should return null result with non-number parameter', ()=>{
            assert.equal(mathEnforcer.subtractTen(null))
            assert.equal(mathEnforcer.subtractTen(undefined))
            assert.equal(mathEnforcer.subtractTen('1'))
            assert.equal(mathEnforcer.subtractTen(true))
            assert.equal(mathEnforcer.subtractTen(false))
        })
        it('Should return the provided number - 10', ()=>{
            assert.equal(mathEnforcer.subtractTen(15),5)
            assert.equal(mathEnforcer.subtractTen(-5),-15)
            assert.closeTo(mathEnforcer.subtractTen(11.5),1.5,0.1)
        })
    } )
    describe('sum function', ()=>{
        it('Should return null when first argument is non-number', ()=>{
            assert.equal(mathEnforcer.sum(null,1),undefined)
            assert.equal(mathEnforcer.sum(undefined,1),undefined)
            assert.equal(mathEnforcer.sum('1',1),undefined)
            assert.equal(mathEnforcer.sum(true,1),undefined)
            assert.equal(mathEnforcer.sum(false,1),undefined)
        })
        it('Should return null when second argument is non-number', ()=>{
            assert.equal(mathEnforcer.sum(1,null),undefined)
            assert.equal(mathEnforcer.sum(1.2,undefined),undefined)
            assert.equal(mathEnforcer.sum(2,'1'),undefined)
            assert.equal(mathEnforcer.sum(5,true),undefined)
            assert.equal(mathEnforcer.sum(100,false),undefined)
        })
        it('Should return null when second argument is non-number', ()=>{
            assert.equal(mathEnforcer.sum(1,2),3)
            assert.closeTo(mathEnforcer.sum(1.2,3.3),4.6,0.1)
            assert.equal(mathEnforcer.sum(-5,-10),-15)

        })
        
    } )
})
