function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchElement = document.querySelector('#searchField')
      let rowElement = Array.from(document.querySelectorAll('tbody tr'))

      let searchText = searchElement.value

      rowElement.forEach(el =>{
         el.className = '';
      })

      let filteredRows = rowElement.filter(el => {
         let values = Array.from(el.children)
         if(values.some(x => x.textContent.includes(searchText))){
            el.className = 'select'
         }
      })

      searchElement.value = ''

   }
}