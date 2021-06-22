function extractText() {
    let itemRow = document.querySelectorAll("ul#items li")
    let textArea = document.querySelector("#result")

    for(const line of itemRow){
        textArea.value += line.textContent + "\n"
    }
}