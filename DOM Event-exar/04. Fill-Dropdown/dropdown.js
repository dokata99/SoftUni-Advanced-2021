function addItem() {
    let newItemTextElement = document.querySelector('#newItemText')
    let newItemValueElement = document.querySelector('#newItemValue')
    let menuElement = document.querySelector('#menu')

    let newOption = document.createElement('option')

    newOption.value = newItemValueElement.value
    newOption.textContent=newItemTextElement.value


    menuElement.appendChild(newOption)

    newItemTextElement.value = ''
    newItemValueElement.value = ''
}