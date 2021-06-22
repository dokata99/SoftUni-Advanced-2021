function solve() {
    let addButton = document.querySelector('#container button')

    addButton.addEventListener('click', onScreenHandler) 
    function onScreenHandler(e){
        e.preventDefault();

        let movieInputs = document.querySelectorAll('#container input');
        let movieInput = movieInputs[0];
        let hallInput = movieInputs[1];
        let priceInput = movieInputs[2];

        let movie = movieInput.value
        let hall = hallInput.value
        let price = priceInput.value

        if (movie.trim() !== '' &&
            hall.trim() !== '' &&
            price.trim() !== '' &&
            !isNaN(Number(price))) {
            price = Number(priceInput.value).toFixed(2)

            let ul = document.querySelector('#movies ul')
            let li = document.createElement('li')
            let span = document.createElement('span')
            span.textContent = movie
            let strong = document.createElement('strong')
            strong.textContent = `Hall: ${hall}`
            let div = document.createElement('div')
            let strongInDiv = document.createElement('strong')
            strongInDiv.textContent = price
            let input = document.createElement('input')
            input.setAttribute('placeholder', 'Tickets Sold')
            let buttonArchive = document.createElement('button')
            buttonArchive.textContent = 'Archive'
            //add event listener for archive button
            buttonArchive.addEventListener('click', archiveMovie)

            div.appendChild(strongInDiv)
            div.appendChild(input)
            div.appendChild(buttonArchive)

            li.appendChild(span)
            li.appendChild(strong)
            li.appendChild(div)

            ul.appendChild(li)
            movieInput.value = ''
            hallInput.value = ''
            priceInput.value = ''

           

        }

    }



    function archiveMovie(e) {
        //3b Get input values for current movie to archive
        let movieLi = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;
 
        if (ticketsSold.trim() !== '' && !isNaN(Number(ticketsSold))) {
            //3c convert values where needed
            ticketsSold = Number(ticketsSold);
            
            let priceStrong = movieLi.querySelector('div strong');
            let price = Number(priceStrong.textContent);
 
            //3d create html structure for archived movie
            let hallStrong = movieLi.querySelector('strong');
            let totalPrice = price * ticketsSold;
            hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
 
            let rightDiv = movieLi.querySelector('div');
            rightDiv.remove();
 
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            //4a Attach event listener each movie's delete button
            deleteButton.addEventListener('click', deleteMovie);
            movieLi.appendChild(deleteButton);
 
            //3e attach Html structure to movies archive section
            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(movieLi);
        }
    }
 

    function deleteMovie(e){
        buttonElement = e.target
        movieElement = buttonElement.parentElement
        movieElement.remove()
    }

    let clearButton = document.querySelector('#archive button')
    clearButton.addEventListener('click', () =>{
        let archiveList = Array.from(document.querySelectorAll('#archive ul li'))

        archiveList.forEach(el => el.remove())
    })
}