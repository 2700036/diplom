export default class NewsCardList {
    constructor (opt){
        this._section = opt.resultSection; 
        this._createCard = opt.createCard;
        this._getNewsfromStorage = opt.getNewsfromStorage;
        this._preloader = opt.preloader;
        this._notFound = opt.notFound;
        this._disconnect = opt.disconnect;
        this._container = this._section.querySelector('.result__cardlist');
        this._button = this._section.querySelector('.button');
        this._newsArr = [];
        this._showResults = this._showResults.bind(this);
        this._hideButton = this._hideButton.bind(this);
        this._button.addEventListener('click', this.renderCards.bind(this));        
    }  
    saveArrToList (arr){
        this._newsArr = arr;
    }
    renderCards (){                     
        this._newsArr.slice(0, 3).forEach(el => {
            this._container.appendChild(this._createCard(el));  
        });        
        this._showResults();        
        this._hideButton();
        this._newsArr.splice(0, 3);        
    }
    _showResults (){
        this._section.classList.contains('result_hidden') ? this._section.classList.remove('result_hidden') : 0;
        this._button.classList.contains('result__button-show_hidden') ? this._button.classList.remove('result__button-show_hidden') : 0;
    }
    resetResults (){
        !this._section.classList.contains('result_hidden') ? this._section.classList.add('result_hidden') : 0;
        !this._notFound.classList.contains('not-found_hidden') ? this._notFound.classList.add('not-found_hidden') : 0;
        !this._disconnect.classList.contains('disconnect_hidden') ? this._disconnect.classList.add('disconnect_hidden') : 0;
        this._container.innerHTML = '';
    }
    _hideButton (){
        this._newsArr.length <= 3 ? this._button.classList.add('result__button-show_hidden') : 0;
    }
    nothingFound (){
        this._notFound.classList.remove('not-found_hidden');
    }
    disconnect (){
        this._disconnect.classList.remove('disconnect_hidden');
    }
    togglePreloader(isLoading){        
        isLoading ? this._preloader.classList.remove('preloader_hidden') : this._preloader.classList.add('preloader_hidden');        
    }    
}

