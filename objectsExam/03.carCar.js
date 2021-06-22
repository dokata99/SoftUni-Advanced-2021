function carCatalog(inputObj){
    let newObj ={}
    newObj.model = inputObj.model

    if(inputObj.power <= 90){
        newObj.engine = { 
            power: 90,
            volume :1800
            }    
    }else if(inputObj.power <=120){
        newObj.engine = {
             power:120,
              volume:2400
            }
    }else{
        newObj.engine = {
            power:200,
            volume:3500
        }
    }

    if(inputObj.carriage == 'hatchback'){
        newObj.carriage = {
            type: 'hatchback',
            color: inputObj.color
        }
    }else{
        newObj.carriage = {
            type: 'coupe',
            color: inputObj.color
        }
    }

    newObj.wheels = []
    if(inputObj.wheelsize % 2 == 0){
        for(let i = 0; i < 4; i++){
            newObj.wheels.push(inputObj.wheelsize-1)
        }
    }else{
        for(let i = 0; i < 4; i++){
            newObj.wheels.push(inputObj.wheelsize)
        }
    }
    

    console.log(newObj)
    

}   
carCatalog({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)