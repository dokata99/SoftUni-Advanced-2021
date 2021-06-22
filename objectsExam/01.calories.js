function calories(arr){
    let obj={};
    for(let i = 0; i < arr.length; i+=2){
        let j = i+1
        let name = arr[i]
        let num = Number(arr[j])

        obj[name]=num
    }
    console.log(obj)

}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])