function townToJson(inputArr){
    let properties = inputArr.shift().split(/\s*\|\s*/gim).filter( x => x !== "")
    let towns = []
    for (const line of inputArr) {
        let [cityName, latitude, longitude] = line.split(/\s*\|\s*/gim).filter( x => x !== "")
            .map(x => isNaN(Number(x)) ? x: Number(x).toFixed(2))
        let city ={}
      

        city[properties[0]]= cityName
        city[properties[1]]= Number(latitude)
        city[properties[2]]= Number(longitude)

        towns.push(city)
    }
    console.log(JSON.stringify(towns))
}

townToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)