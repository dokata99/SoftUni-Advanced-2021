function encodeAndDecodeMessages() {
    let textAreaElements = document.querySelectorAll('#main textarea')
    let firstTextAreaElement = textAreaElements[0]
    let secondTextAreaElement = textAreaElements[1]

    let buttonElements = document.querySelectorAll('#main button')
    let firstButton = buttonElements[0]
    let secondButton = buttonElements[1]
    let decodedArr = []

    firstButton.addEventListener('click', () => {
        secondTextAreaElement.value = firstTextAreaElement.value.split('')
            .map(x => x.charCodeAt(0) + 1)
            .map(x => String.fromCharCode(x))
            .join('');

        firstTextAreaElement.value = '';
    })

    secondButton.addEventListener('click', () => {
        secondTextAreaElement.value = secondTextAreaElement.value.split('')
        .map(x => x.charCodeAt(0)-1)
        .map(x => String.fromCharCode(x))
        .join('');

    })

}
