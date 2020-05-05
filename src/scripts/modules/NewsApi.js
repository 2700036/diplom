import {searchLanguage} from '../constants/constants';
import {apiKey} from '../constants/constants';
import {weekAgoDate} from '../constants/constants';
import {todayDate} from '../constants/constants';

export class NewsAPI {
    constructor (...args){      
      this._language = searchLanguage;
      this._fromDate = weekAgoDate;
      this._toDate = todayDate;
      this._key = apiKey;
      

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

export const newsAPI = new NewsAPI(searchLanguage, apiKey, weekAgoDate, todayDate);
