window.addEventListener('load', solution);

function solution() {

  let storage = {}
  let submitButton = document.querySelector('#submitBTN')

  submitButton.addEventListener('click', submitHandler)


  function submitHandler() {

    let fullNameInput = document.querySelector('#fname')
    let fullname = fullNameInput.value

    let emailInput = document.querySelector('#email')
    let email = emailInput.value

    let phoneInput = document.querySelector('#phone')
    let phone = phoneInput.value

    let addressInput = document.querySelector('#address')
    let address = addressInput.value

    let postalInput = document.querySelector('#code')
    let postal = postalInput.value

    console.log(fullname)

    if (fullname != '' && email != '') {

      let fullnameLi = document.createElement('li')
      let emailLi = document.createElement('li')
      let phoneLi = document.createElement('li')
      let addressLi = document.createElement('li')
      let postalLi = document.createElement('li')


      fullnameLi.textContent = `Full Name: ${fullname}`
      emailLi.textContent = `Email: ${email}`
      phoneLi.textContent = `Phone Number: ${phone}`
      addressLi.textContent = `Address: ${address}`
      postalLi.textContent = `Postal Code: ${postal}`


      //select the root elemenet 

      let ulElement = document.querySelector('#infoPreview')

      ulElement.appendChild(fullnameLi)
      ulElement.appendChild(emailLi)
      ulElement.appendChild(phoneLi)
      ulElement.appendChild(addressLi)
      ulElement.appendChild(postalLi)

      //full the storage
      fillStorage(fullname, email, phone, address, postal)


      submitButton.disabled = true

      let enableButton = document.querySelector('#editBTN')
      let continueButton = document.querySelector('#continueBTN')

      enableButton.disabled = false
      continueButton.disabled = false

      fullNameInput.value = ''
      emailInput.value = ''
      phoneInput.value = ''
      addressInput.value = ''
      postalInput.value = ''

      enableButton.addEventListener('click', editHandler)

      continueButton.addEventListener('click', continueHandler)

    }
  }

  function fillStorage(fullname, email, phone, address, postal) {

    storage.fullname = fullname
    storage.email = email
    if (phone != '') {
      storage.phone = phone
    } else {
      storage.phone = ''
    }

    if (address != '') {
      storage.address = address
    } else {
      storage.address = ''
    }

    if (postal != '') {
      storage.postal = postal
    } else {
      storage.postal = ''
    }

    return storage

  }


  function editHandler() {
    let enableButton = document.querySelector('#editBTN')
    let continueButton = document.querySelector('#continueBTN')


    enableButton.disabled = true
    continueButton.disabled = true
    submitButton.disabled = false

    let fullNameInput = document.querySelector('#fname')
    fullNameInput.value = storage.fullname

    let emailInput = document.querySelector('#email')
    emailInput.value = storage.email

    let phoneInput = document.querySelector('#phone')
    phoneInput.value = storage.phone

    let addressInput = document.querySelector('#address')
    addressInput.value = storage.address

    let postalInput = document.querySelector('#code')
    postalInput.value = storage.postal


    let liElements = Array.from(document.querySelectorAll('#infoPreview li'))

    liElements.forEach(el =>
      el.remove())

  }

  function continueHandler() {
    let blockDiv = document.querySelector('#block')

    let h3Element = document.createElement('h3')

    storage.fullname = ''
    storage.email = ''
    storage.phone = ''
    storage.address = ''
    storage.postal = ''

    while (blockDiv.firstChild) {
      blockDiv.removeChild(blockDiv.lastChild);
    }

    h3Element.textContent = 'Thank you for your reservation!'

    blockDiv.appendChild(h3Element)

  }
}
