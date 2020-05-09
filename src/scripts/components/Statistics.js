export default class Statistics {
    constructor(){
        this._titlesSum = 0;
        this._newsByDays = {};

    }
    _titleMatches (arr, word){ // сумма упоминаний в загаловках 
        this._titlesSum = arr.reduce((res, cur) => {
        cur.title.includes(word) || cur.title.includes(word.toLowerCase())  ? res++ : res;
        return res;
      }, 0);
    }
    _getDataForStats (){
        JSON.parse(localStorage.getItem('newsArticles')).forEach(el => {
            
            if (el.publishedAt in this._newsByDays){
                
                this._newsByDays[el.publishedAt]++
            } else {this._newsByDays[el.publishedAt] = 1}
        })
        console.log(this._newsByDays);
       
    }
}
