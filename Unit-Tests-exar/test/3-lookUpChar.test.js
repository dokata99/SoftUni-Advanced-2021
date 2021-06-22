const { assert } = require('chai');

const lookupChar = require('../3-lookUpChar')

describe('Test 3-lookUpChar testing', ()=>{
    it('Should test for undefined string', () =>{

        assert.equal(lookupChar(1,1),undefined)
        assert.equal(lookupChar(undefined,10),undefined)
        assert.equal(lookupChar(null,10),undefined)
    })
    it('Should test for invalid index', ()=>{
        assert.equal(lookupChar('some',null), undefined)
        assert.equal(lookupChar('undefined',1.54), undefined)
        assert.equal(lookupChar('undefined','1'), undefined)
        assert.equal(lookupChar('undefined',undefined), undefined)

    })
    it('Should test for empty string and incorect index', () =>{
        assert.equal(lookupChar('some',4),"Incorrect index")
        assert.equal(lookupChar('some',5),"Incorrect index")
        assert.equal(lookupChar('some',-1),"Incorrect index")
    })

    it('Should test for char at specific index', () =>{
        assert.equal(lookupChar('some', 0),'s')
        assert.equal(lookupChar('opaa', 1),'p')
    })
})