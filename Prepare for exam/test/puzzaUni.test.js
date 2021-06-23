const { assert } = require('chai')
const pizzUni = require('../1.3 - pizzaUni')

describe('Test', ()=>{
    describe('Should test makeAnOrder', ()=>{
        it('Should test for no pizza provided', ()=>{
            let obj = {
            }
            assert.throw(()=>pizzUni.makeAnOrder(obj), 'You must order at least 1 Pizza to finish the order.')
        })
        it('Should test for only pizza provided', ()=>{
            let obj = {
                orderedPizza: 'Peperoni'

            }
            assert.equal(pizzUni.makeAnOrder(obj) , `You just ordered ${obj.orderedPizza}`)
        })
        it('Should test for pizza and drink provided', ()=>{
            let obj = {
                orderedPizza: 'Peperoni',
                orderedDrink: 'Pepsi'
            }
            assert.equal(pizzUni.makeAnOrder(obj) , `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`)
        })
    })
    describe('Should test getRemainingWork', ()=>{
        it('Should test for not ready pizza', ()=>{
            let pizzaArr = [
                {
                    pizzaName:'Peperoni',
                    status:'not ready'
                },{
                    pizzaName:'Peperoni',
                    status:'not ready'
                } 
            ]

            let pizzaNames = `Peperoni, Peperoni`
            
            assert.equal(pizzUni.getRemainingWork(pizzaArr), `The following pizzas are still preparing: ${pizzaNames}.`)
        })
        
        it('Should test for ready pizza', ()=>{
            let pizzaArr = [
                {
                    pizzaName:'Peperoni',
                    status:'ready'
                },{
                    pizzaName:'Peperoni',
                    status:'ready'
                } 
            ]            
            assert.equal(pizzUni.getRemainingWork(pizzaArr), `All orders are complete!`)
        })
    })
    describe('Should test orderType',()=>{
        it('Should test for Carry Out',()=>{
            let typeOfOrder = 'Carry Out'
            let totalSum = 10

            assert.closeTo(pizzUni.orderType(totalSum, typeOfOrder),9,0.1)
        })
        it('Should test for Delivery',()=>{
            let typeOfOrder = 'Delivery'
            let totalSum = 10

            assert.equal(pizzUni.orderType(totalSum, typeOfOrder),10)
        })  
    })
})