function editElement(ref, match, replace) {

    const content = ref.textContent
    const matcher = new RegExp(match, 'g')
    const edited = content.replace(matcher, replace)
    ref.textContent = edited
}