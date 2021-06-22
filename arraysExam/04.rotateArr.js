function rotateArr(arr, times){

    for(i = 0; i < times; i++){
        returnedElement = arr.pop();
        arr.unshift(returnedElement)
    }
    console.log(arr.join(' '))

}rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)