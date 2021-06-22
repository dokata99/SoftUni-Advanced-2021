function addItem() {
    let newItemTextElement = document.querySelector('#newItemText')
    let listItemElements = document.querySelector('#items')
    let aTag = document.createElement('a')
    aTag.textContent= '[Delete]'
    aTag.setAttribute('href', '#')

    let newItem = document.createElement('li')

    newItem.textContent = newItemTextElement.value

    newItem.appendChild(aTag)

    listItemElements.appendChild(newItem)


    aTag.addEventListener('click',(e) =>{
        e.currentTarget.parentNode.remove()
    })

    newItemTextElement.value = ''
}