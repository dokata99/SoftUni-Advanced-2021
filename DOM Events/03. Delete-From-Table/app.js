function deleteByEmail() {
    let tableRowElements = Array.from(document.querySelectorAll('tbody tr'))

    let emailInputElement = document.querySelector('[name="email"]')

    let resultElement = document.querySelector('#result')

    email = emailInputElement.value
    let found = false

    tableRowElements.filter(e => {
        let values = Array.from(e.children)
        if(values.some(x => x.textContent == email)){
            e.remove()
            found = true

            resultElement.textContent = 'Deleted.'
            
        }
    })

    if(!found){
        resultElement.textContent = 'Not found.'
    }

    emailInputElement.value = ' '
}