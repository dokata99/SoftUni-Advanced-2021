function card(fisrtParam, secondParam){
    let validCars = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    let validFaces = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    if(!validCars.includes(fisrtParam) || !validFaces.hasOwnProperty(secondParam)){
        throw new Error('Error')
    }else{
        let face = validFaces[secondParam]
    
        return {
            fisrtParam, face, toString: () =>{
               return fisrtParam+face
            }
        }
    }
}

console.log(card('K', 'S'))