function exreact(arr){
    let current = Number.MIN_SAFE_INTEGER;
    let newArr = []
    for (const el of arr) {
        if(el>=current){
            current=el;
            newArr.push(current);
        }
    }
    return newArr
}

exreact([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )