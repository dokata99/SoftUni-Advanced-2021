class Restaurant {

    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney)
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(inputArr) {

        let result = []
        for (const line of inputArr) {
            let [productName, productQuantity, productTotalPrice] = line.split(' ')

            productTotalPrice = Number(productTotalPrice)
            productQuantity = Number(productQuantity)
            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0
                }
                this.budgetMoney -= productTotalPrice
                this.stockProducts[productName] += productQuantity
                result.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                result.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
        return result.join('\n')

    }

    addToMenu(meal, productsArr, price) {

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {}
            for (const line of productsArr) {
                let [productName, productQuantity] = line.split(' ')

                productQuantity = Number(productQuantity)
                if (!this.menu[meal].hasOwnProperty(productName)) {
                    this.menu[meal][productName] = 0
                }
                this.menu[meal][productName] += productQuantity

            }
            price = Number(price)
            this.menu[meal].price = price

            let objLength = Object.keys(this.menu)

            if (objLength.length == 1) {
                return `Great idea! Now with the ${meal} we have ${objLength.length} meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${objLength.length} meals in the menu, other ideas?`
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {

        let result = []
        let menuLength = Object.keys(this.menu)
        if (menuLength.length <= 0) {
            return `Our menu is not ready yet, please come later..."`
        } else {
            for (const key in this.menu) {
                result.push(`${key} - $ ${this.menu[key].price}`)
            }
            return result.join('\n')
        }


    }
    makeTheOrder(meal) {
        if (!this.menu[meal]) return (`There is not ${meal} yet in our menu, do you want to order something else?`)
    
        //check for products          
        let ingredientsNeeded = Object.entries(this.menu[meal])
        ingredientsNeeded.pop()
        for (let line of ingredientsNeeded) { 
            let [product, quantity] = line
            if (this.stockProducts[product] < quantity || !this.stockProducts[product]) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`)
            }
        }
        for (let line of ingredientsNeeded) {
            let [product, quantity] = line
            this.stockProducts[product] -= quantity
        } this.budgetMoney += this.menu[meal].price
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`) 
    }


}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYogurt'));
