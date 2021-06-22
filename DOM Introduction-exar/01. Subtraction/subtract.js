function subtract() {
    let firstNumber = document.querySelector("#firstNumber")
    let secondNumber = document.querySelector("#secondNumber")

    let result = document.querySelector("#result")

    result.textContent = Number(firstNumber.value) - Number(secondNumber.value)


}