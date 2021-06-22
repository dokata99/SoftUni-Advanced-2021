function getArticleGenerator(articles) {
     let container = document.querySelector('#content') 
     return function () {
        if (articles.length > 0) {

            let newArticle = document.createElement('article')
            newArticle.textContent = articles.shift()
            container.appendChild(newArticle);
        } 
    } 
}
