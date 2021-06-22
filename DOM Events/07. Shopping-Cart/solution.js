function solve() {
   let resultTextElement = document.querySelector('textarea')
   let productsButtonsElement = document.querySelectorAll('.add-product') 

   let chechoutButtonElement = document.querySelector('.checkout')

   let names = []

   let sum = 0

   for (const productButton of productsButtonsElement) {
      productButton.addEventListener('click', (e)=> {
         let selectedProduct = e.currentTarget.parentElement.parentElement
         let productName = selectedProduct.querySelector('.product-title').textContent
         let productPrice = Number(selectedProduct.querySelector('.product-line-price').textContent)
         sum += productPrice
         if(!names.includes(productName)){
            names.push(productName)
         }
         resultTextElement.textContent +=  `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      })
   }

   chechoutButtonElement.addEventListener('click', () =>{
      resultTextElement.textContent +=  `You bought ${names.join(', ')} for ${sum.toFixed(2)}.\n`
   })

}