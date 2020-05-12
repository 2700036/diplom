import './../../images/news.jpg';
export default class NewsCard {
    constructor(foo){
      this._dateConverter = foo;  
    }
    createCard(data){
        const newsCard = document.createElement('a');
        newsCard.className = 'card link';        
        newsCard.href = data.url;
        newsCard.target = '_blank';
        newsCard.insertAdjacentHTML(
            'beforeend', 
            `<img class="card__image" src="${data.urlToImage === null ? './images/news.jpg' : data.urlToImage}" alt="фото новости">
            <p class="card__date">${this._dateConverter(data.publishedAt)}</p>
            <p class="card__title">${data.title}</p>
            <p class="card__text">${data.description.replace(/[(<(\/)?ol>)(<(\/)?li>)]+/gm, '')}</p>
            <p class="card__source">${data.source.name}</p>`
        ); 
        return newsCard;
    }
    
    
}