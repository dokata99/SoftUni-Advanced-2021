function type(...inputEl){
    let occurences = {}

    let result = []

    inputEl.forEach(element => {
        let type = typeof (element)
        result.push(`${type}: ${element.toString()}`)
        
       /* if(occurences.hasOwnProperty(type)){
            occurences[type] = ++occurences[type]
        }else{
            occurences[type] = 1
        }*/

        
        occurences[type] = occurences[type] !== undefined
        ? ++occurences[type]
        : 1
    })

    Object.keys(occurences)
    .sort((a,b) => occurences[b] - occurences[a])
    .forEach(key => result.push(`${key} = ${occurences[key]}`))


    result.forEach(key =>
        console.log(key))
}

console.log(type('cat', 42,56,'catsss', function () { console.log('Hello world!'); }))