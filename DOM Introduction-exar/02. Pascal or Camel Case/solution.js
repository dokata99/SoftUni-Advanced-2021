function solve() {
  let textElement = document.querySelector("#text")
  let namingConventionElement = document.querySelector("#naming-convention")


  let text = textElement.value
  let naming = namingConventionElement.value
  let result = apply(text, naming)

  let spanElem = document.getElementById("result")
  spanElem.textContent = result



  function apply(text, convention) {
    const namingSwitch = {
      'Pascal Case': () => text
        .toLowerCase()
        .split(' ')
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(''),

      'Camel Case': () => text
        .toLowerCase()
        .split(' ')
        .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
        .join(''),
      default: () => 'Error!'
    }

    return (namingSwitch[convention] || namingSwitch.default)()
  }
}