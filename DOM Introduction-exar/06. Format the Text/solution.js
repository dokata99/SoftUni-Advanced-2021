function solve() {

  let textAreaElement = document.querySelector('#input')
  let resultDiv = document.querySelector('#output')

  let text = textAreaElement.value

  let sentences = text.split('.').filter(x => x != '').map(x => x + '.')

  let pharagraphRoof = Math.ceil(sentences.length / 3)
  
  for (let index = 0; index < pharagraphRoof; index++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`
  }  
}