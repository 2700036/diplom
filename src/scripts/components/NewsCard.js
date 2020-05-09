import './../../images/news.jpg';
export default class NewsCard {
    constructor(){
        
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
        newsCard.querySelector('.card__image').src = data.urlToImage === null ? './images/news.jpg' : data.urlToImage;
        newsCard.querySelector('.card__date').textContent = this._dateConverter(data.publishedAt) ;
        newsCard.querySelector('.card__title').textContent = data.title;
        newsCard.querySelector('.card__text').textContent = data.description;
        newsCard.querySelector('.card__source').textContent = data.source.name;
        return newsCard;
    }
    _dateConverter (str){ 
        const dates = {
          '01': 'января,',
          '02': 'февраля,',
          '03': 'марта,',
          '04': 'апреля,',
          '05': 'мая,',
          '06': 'июня,',
          '07': 'июля,',
          '08': 'августа,',
          '09': 'сентября,',
          '10': 'октября,',
          '11': 'ноября,',
          '12': 'декабря,'
        }
        const arr = str.split('-').reverse();
        arr[1] = dates[arr[1]];
        arr[0].charAt(0) == '0' ? arr[0] = arr[0].charAt(1) : 0;
        return arr.join(' ')
      }
    
}