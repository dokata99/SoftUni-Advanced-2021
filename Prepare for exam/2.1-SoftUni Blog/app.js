function solve() {
   let addButton = document.querySelector('form button')

   let archiveArr = []

   addButton.addEventListener('click', addHandler)

   function addHandler(e) {
      e.preventDefault()

      let creatorInput = document.querySelector('#creator')
      let titleInput = document.querySelector('#title')
      let categoryInput = document.querySelector('#category')
      let contentTextArea = document.querySelector('#content')

      let creator = creatorInput.value
      let title = titleInput.value
      let category = categoryInput.value
      let content = contentTextArea.value



      let h1Element = document.createElement('h1')
      h1Element.textContent = title

      let strongElement = document.createElement('strong')
      strongElement.textContent = category

      let pElement = document.createElement('p')
      pElement.textContent = 'Category:'

      pElement.appendChild(strongElement)

      let strongSecondElement = document.createElement('strong')
      strongSecondElement.textContent = creator

      let pSecondElement = document.createElement('p')
      pSecondElement.textContent = 'Creator:'

      pSecondElement.appendChild(strongSecondElement)

      let pText = document.createElement('p')
      pText.textContent = content

      let mainDiv = document.createElement('div')
      mainDiv.classList.add('buttons')

      let deleteBtn = document.createElement('button')
      deleteBtn.classList.add('btn')
      deleteBtn.classList.add('delete')

      deleteBtn.textContent = 'Delete'

      deleteBtn.addEventListener('click', deleteHandler)

      let archiveBtn = document.createElement('button')
      archiveBtn.classList.add('btn')
      archiveBtn.classList.add('archive')

      archiveBtn.textContent = 'Archive'

      archiveBtn.addEventListener('click', archiveHandler)

      mainDiv.appendChild(deleteBtn)
      mainDiv.appendChild(archiveBtn)

      let postsSection = document.querySelector('.site-content section')

      let arcticleElement = document.createElement('article')

      arcticleElement.appendChild(h1Element)
      arcticleElement.appendChild(pElement)
      arcticleElement.appendChild(pSecondElement)
      arcticleElement.appendChild(pText)
      arcticleElement.appendChild(mainDiv)

      postsSection.appendChild(arcticleElement)


   }

   function archiveHandler(e) {
      let arcticleElement = e.target.parentNode.parentNode

      let titleElment = arcticleElement.querySelector('h1')

      let olElement = document.querySelector('.archive-section ol')

      olElement.innerHTML = '';
      archiveArr.push(titleElment.textContent)
      archiveArr.sort((a, b) => a.localeCompare(b)).forEach((element) => {
         let liElement = document.createElement('li')
         liElement.textContent = element
         olElement.appendChild(liElement);
      });

      arcticleElement.remove()
   }

   function deleteHandler(e) {
      let arcticleElement = e.target.parentNode.parentNode

      arcticleElement.remove()
   }
}
