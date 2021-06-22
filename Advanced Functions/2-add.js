function solution(num){
    
    return function(number){
        return number+= num
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
add5()