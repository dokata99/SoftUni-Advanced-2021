function arrayByTwo(arr){
    arr.sort((a,b) => a.length - b.length || a.localeCompare(b) )
    console.log(arr.join('\n'))
}

arrayByTwo(['test', 
'Deny', 
'omen', 
'Default']

)