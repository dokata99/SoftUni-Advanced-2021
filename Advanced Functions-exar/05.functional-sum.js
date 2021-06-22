function add(num){
    let sum = 0

    function inner(number){
        sum += number
        return inner
    }

    inner.toString= () =>{
        return console.log(sum)
    }
    return inner(num)
}

let a = add(3)(4)