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
            `<img class="card__image" src="" alt="фото новости">
            <p class="card__date"></p>
            <p class="card__title"></p>
            <p class="card__text"></p>
            <p class="card__source"></p>`
        );
        newsCard.querySelector('.card__image').src = `${data.urlToImage === null ? './images/news.jpg' : data.urlToImage}`;
        newsCard.querySelector('.card__date').textContent = this._dateConverter(data.publishedAt);
        newsCard.querySelector('.card__title').textContent = data.title;
        newsCard.querySelector('.card__text').textContent = data.description.replace(/[(<(\/)?ol>)(<(\/)?li>)]+/gm, '');
        newsCard.querySelector('.card__source').textContent = data.source.name;
        return newsCard;
    }
    
    
}