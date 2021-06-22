function magic(arr){
    let prevRow = 0
    let rowSum =0
    let result = true
    for (const array of arr) {
        prevRow = rowSum

        rowSum = array.reduce((a,b) => a+b)
        
        if(prevRow == rowSum){
            result = true
        }else{
            result = false
        }
    }
    console.log(result)

}

magic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   )