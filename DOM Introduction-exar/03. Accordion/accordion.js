function toggle() {

    let buttonElement = document.querySelector(".button")
    let textElement = document.querySelector("#extra")


    switch(buttonElement.textContent){
        case "More": {
            buttonElement.textContent= "Less"
            textElement.style.display = "block"
            break
        }
        case "Less":{
            buttonElement.textContent = "More"
            textElement.style.display = "none"
            break;
        }
        
    }
}