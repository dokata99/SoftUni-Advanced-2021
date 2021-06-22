function solve(arrInput, type){
    return type === 'asc'
    ? arrInput.sort((a,b) => a-b)
    : arrInput.sort((a,b) => b-a)
}

