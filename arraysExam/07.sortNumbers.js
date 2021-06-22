function sortNumbers(cloned) {
    let newArr = []
    while (cloned.length != 0) {
        let small = Math.min(...cloned)
        let smallIndex = cloned.indexOf(Math.min(...cloned))
        cloned.splice(smallIndex,1)

        let big = Math.max(...cloned)  
        let index = cloned.indexOf(Math.max(...cloned))

        cloned.splice(index,1)
        
        newArr.push(small)
        newArr.push(big)

    }

    return newArr    

}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])