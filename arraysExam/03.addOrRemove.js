function addOrRemove(arr){
    let current = 0
    let elemnts = []
    for (const el of arr) {
        current += 1
        if(el == 'add'){
            elemnts.push(current)
        }else{
            elemnts.pop()
        }
    }
    if(elemnts.length == 0){
        console.log('Empty')
    }else{
        console.log(elemnts.join('\n'))
    }

}

addOrRemove(['add', 
'add', 
'remove', 
'add', 
'add']
)