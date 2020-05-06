export class NewsAPI {
    constructor (opt){      
      this._language = opt.searchLanguage;
      this._fromDate = opt.weekAgoDate;
      this._toDate = opt.todayDate;
      this._key = opt.apiKey;
      this.getNews = this.getNews.bind(this);
      

    }
    getNews (inputRequest){
        return fetch(`https://newsapi.org/v2/everything?q=${inputRequest}&pageSize=100&language=${this._language}&from=${this._fromDate}&to=${this._toDate}&sortBy=popularity&apiKey=${this._key}`, {
            method: 'GET',           
          })
          .then(res => {
            if (res.ok) {
              return res.json(); 
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }   
}


