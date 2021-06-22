function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient-box')

    let resultElement = document.getElementById('result')

    gradientBoxElement.addEventListener('mousemove', (e) => {
        let percentage = Math.floor((e.offsetX / e.currentTarget.offsetWidth) * 100)

        resultElement.textContent = percentage
    })

}