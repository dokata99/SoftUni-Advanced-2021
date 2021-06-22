function solve(inputArr, startIncex, endIntex) {
    if(Array.isArray(inputArr) == false) {
        return NaN
    }
    if(startIncex < 0){
        startIncex = 0
    }
    if(endIntex > inputArr.length -1){
        endIntex = inputArr.length -1
    }

    return inputArr.splice(startIncex,endIntex + 1)
    .map(Number)
    .reduce((a,b) => a+b, 0)

}

console.log(solve([10, 20, 30,'df', 40, 50, 60], 3, 300))