function lockedProfile() {
    let buttonsElement = document.querySelectorAll('.profile button')

    for (let i = 0; i < buttonsElement.length; i++){
        buttonsElement[i].addEventListener('click', () =>{

            let radioButton = document.querySelector(`input[name="user${i + 1}Locked"]:checked`)
            console.log(radioButton)
            if(radioButton.value ==='unlock'){
                let hiddenField = document.getElementById(`user${i + 1}HiddenFields`)
                hiddenField.style.display = hiddenField.style.display === 'block' 
                ? 'none'
                : 'block'
                buttonsElement[i].textContent = buttonsElement[i].textContent === 'Show more'
                ? 'Hide it'
                : 'Show more'
            }
            
        })
    }

}