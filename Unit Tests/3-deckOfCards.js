function printDeckOfCards(cards) {
    let decks = []
    let validCars = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    let validFaces = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }
    function createCard (cardName,cardType){
        if(!validCars.includes(cardName) || !validFaces.hasOwnProperty(cardType)){
            console.log(`Invalid card: ${cardName + cardType}`)
        }else{
            let face = validFaces[cardType]
        
            return {
                cardName, face, toString: () =>{
                   return cardName+face
                }
            }
        }
    }
    cards.forEach(x => {
        let name = x.substring(0, x.length - 1);
        let type = x.substring(x.length - 1);
        let card = createCard(name,type)
        decks.push(card)

    })

    console.log(decks.join(' '))

}


printDeckOfCards(['AS', '10D', 'KH', '2C'])