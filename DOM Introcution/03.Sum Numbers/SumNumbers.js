function calc() {
    let sum1 = document.querySelector("input#num1")
    let sum2 = document.querySelector("input#num2")

    let result = document.querySelector("#sum")
    result.value = Number(sum1.value) + Number(sum2.value)
}
