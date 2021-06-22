const isSymmetric = require('../Unit Tests/5-isSymmetric')
const {assert} = require('chai')

describe('Test it is symmetric functionality', () => {
    it('Should test for IsArray', ()=>{

        let input = [1,2,3,2,1]

        assert.isArray(input)
    })
    it('Should test for symmetric', ()=>{

        let input = [1,2,3,2,1]

        let expected = true

        let actual = isSymmetric(input)

        assert.equal(actual, expected)
    })

    it('Should test for types', ()=>{

        let input = ['1',1]

        let expected = false

        let actual = isSymmetric(input)

        assert.equal(actual, expected)
    })

    it('Should test for strings', ()=>{

        let input = ['1','2','3','2','1']

        let expected = true

        let actual = isSymmetric(input)

        assert.equal(actual, expected)
    })

    it('Should test text', ()=>{
        
        assert.equal(isSymmetric(null), false)
    })
    
    
})