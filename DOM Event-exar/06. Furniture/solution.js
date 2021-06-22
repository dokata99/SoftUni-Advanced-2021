function solve() {

  let textAreas = document.querySelectorAll('#exercise textarea')
  let generateTextarea = textAreas[0]
  let buyTextarea = textAreas[1]

  const [generateButton, buyButton] = Array.from(document.querySelectorAll('button'))

  generateButton = document.addEventListener('click', () => {
    let items = JSON.parse(generateTextarea.value)

    items.forEach(el => {
      let table = document.querySelector('.table tbody')
      let tr = document.createElement('tr')

      let imageTd = document.createElement('td')
      let image = document.createElement('img')
      image.src = el.img
      imageTd.appendChild(image)

      let nameTd = document.createElement('td')
      let nameP = document.createElement('p')
      nameP.textContent = el.name
      nameTd.appendChild(nameP)

      let priceTd = document.createElement('td')
      let priceP = document.createElement('p')
      priceP.textContent = el.price
      priceTd.appendChild(priceP)

      let decorationTd = document.createElement('td')
      let decorationP = document.createElement('p')
      decorationP.textContent = el.decFactor
      decorationTd.appendChild(decorationP)

      let checkBoxTd = document.createElement('td')
      let checkBoxInput = document.createElement('input')
      checkBoxInput.type = 'checkbox'
      checkBoxTd.appendChild(checkBoxInput)

      tr.appendChild(imageTd)
      tr.appendChild(nameTd)
      tr.appendChild(priceTd)
      tr.appendChild(decorationTd)
      tr.appendChild(checkBoxTd)
      table.appendChild(tr)
      generateTextarea.value = ''


    })

  })

}