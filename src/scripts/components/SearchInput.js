import {newsAPI} from '../../scripts/modules/NewsApi.js';
import {searchForm} from '../constants/constants';

export function getSaveRenderCards(inputValue){    
    newsAPI.getNews(inputValue).then(res => { console.log(res); }).catch(err => {
        console.log(err);
    });
}


export class SearchInput {
    constructor (...args){
        this._api = newsAPI; 
        this._foo = getSaveRenderCards;                     
        this._form = searchForm;
        this._input = this._form.input;        
        this._button = this._form.button;
        this._form.addEventListener('submit', this._ignition.bind(this));
    }
    _ignition (){
        event.preventDefault();
        this._foo(this._input.value)
    }
   


}

export const searchInput = new SearchInput(newsAPI, getSaveRenderCards, searchForm);





