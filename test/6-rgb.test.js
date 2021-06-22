const rgb = require('../Unit Tests/6-Rgb')

const { assert } = require('chai')

describe('Testing rgb function', ()=>{
    it('Should test for range', ()=>{
        let red = -10
        let green = -20
        let blue = 400

        let expected = undefined
        let actual = rgb(red,green,blue)

        assert.equal(actual, expected)
    })

    it('Should test for color', ()=>{
        let red = 255
        let green = 158
        let blue = 170

        let expected = '#FF9EAA'
        let actual = rgb(red,green,blue)

        assert.equal(actual, expected)
    })

    it('Should test for invalid type', ()=>{
        let red = 'text'
        let green = -20
        let blue = 400

        let expected = undefined
        let actual = rgb(red,green,blue)

        assert.equal(actual, expected)
    })


})