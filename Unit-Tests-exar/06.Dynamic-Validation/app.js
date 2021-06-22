function validate() {
    let emailElement = document.querySelector('#email')
    let emailReg = /^[a-z]+@[a-z]+\.[a-z]+$/

    emailElement.addEventListener('change',()=>{
        if(!emailReg.test(emailElement.value)){
            emailElement.classList.add('error')
        }else{
            emailElement.classList.remove('error')

        }
    })
}