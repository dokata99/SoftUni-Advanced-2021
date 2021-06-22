function addItem() {
    let newItemTextElement = document.querySelector('#newItemText')
    let listItemElements = document.querySelector('#items')

    let newItem = document.createElement('li')

    newItem.textContent = newItemTextElement.value

    listItemElements.appendChild(newItem)

    newItemTextElement.value = ''
}