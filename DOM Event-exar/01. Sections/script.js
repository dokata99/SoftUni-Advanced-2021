function create(words) {
   let contentDivElement = document.querySelector('#content')
   for (var i = 0; i < words.length; i++){
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.textContent = words[i]
      p.style.display = 'none'

      div.appendChild(p)
      contentDivElement.appendChild(div)

      div.addEventListener('click', (e) => {
         let innerP = e.target.children[0]
         innerP.style.display = 'block'
      })
   }
}