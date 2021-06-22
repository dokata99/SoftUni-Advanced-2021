function heroicInventory(inputArr){
    let newArr = []
    for (const line of inputArr) {
        let [heroName, heroLevel, items] = line.split(' / ')
        heroLevel = Number(heroLevel)
        items = items ? items.split(', ') : []

        let obj = {
            name: heroName,
            level:heroLevel,
            items
        } 
        newArr.push(obj)
    }
    console.log(JSON.stringify(newArr))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)