function lowestPrice(inputArr){
    products = {}
    for (const line of inputArr) {
        let [town, productName, price] = line.split(' | ')
        price = Number(price)
        
        if(!products.hasOwnProperty(productName)){
            products[productName] = {}
        }
        products[productName][town] = price
    }

    let result = []

    for (const key in products) {
        let sortTown = Object.entries(products[key])
            .sort((a,b) => a[1]-b[1])
        let cheapestTown = sortTown[0]
        result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }

    console.log(result.join('\n'))

}
lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)