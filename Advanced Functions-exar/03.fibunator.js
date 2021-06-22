function getFibonator(){
    let prev = 0
    let curr = 1
    let counter = 1 

    return function(){
        if(counter == 1){
            counter++
            return 1
        }
        let next = prev + curr
        prev = curr
        curr = next
        return curr
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
