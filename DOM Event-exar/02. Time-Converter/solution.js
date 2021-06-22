function attachEventsListeners() {

    let daysBtn = document.querySelector('#daysBtn')
    let hoursBtn = document.querySelector('#hoursBtn')
    let minutesBtn = document.querySelector('#minutesBtn')
    let secondsBtn = document.querySelector('#secondsBtn')
    let daysInputElement = document.querySelector('#days')
    let hoursInputElement = document.querySelector('#hours')
    let minutesInputElement = document.querySelector('#minutes')
    let secondsInputElement = document.querySelector('#seconds')

    daysBtn.addEventListener('click', () => {
        let days = Number(daysInputElement.value)
        let hours = days * 24;
        let minutes = days * 24 * 60
        let seconds = days * 24 * 60 * 60
        
        hoursInputElement.value=hours
        minutesInputElement.value=minutes
        secondsInputElement.value=seconds
    })

    hoursBtn.addEventListener('click', () => {
        let hours = Number(hoursInputElement.value)
        let days = hours / 24;
        let minutes = hours * 60
        let seconds = hours * 60 * 60
        
        daysInputElement.value=days
        minutesInputElement.value=minutes
        secondsInputElement.value=seconds
    })

    minutesBtn.addEventListener('click', () => {
        let minutes = Number(minutesInputElement.value)
        let days = minutes / 24 / 60;
        let hours = minutes / 60
        let seconds = minutes * 60
        
        daysInputElement.value=days
        hoursInputElement.value=hours
        secondsInputElement.value=seconds
    })

    secondsBtn.addEventListener('click', () => {
        let seconds = Number(secondsInputElement.value)
        let days = seconds / 24 / 60 / 60
        let hours = seconds / 60 /60
        let minutes = seconds / 60
        
        daysInputElement.value=days
        hoursInputElement.value=hours
        minutesInputElement.value=minutes
    })

}