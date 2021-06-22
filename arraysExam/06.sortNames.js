function sortNames(arr){
    let sorted = arr.sort((a,b)=> a.localeCompare(b))
    let num = 0;
    sorted.forEach(element => {
        num += 1
        console.log(`${num}.${element}`)
    });
}

sortNames(["John", "Bob", "Christina", "Ema"])