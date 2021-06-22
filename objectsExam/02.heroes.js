function solve(inputObj){
    
    if(inputObj.dizziness == true){
        let requiredAmount = (inputObj.weight*0.1)*inputObj.experience
        inputObj.levelOfHydrated += requiredAmount
        inputObj.dizziness = false
        return inputObj
    }else{
        return inputObj
    }

}

console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ))