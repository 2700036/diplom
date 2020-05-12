export default class Statistics {
    constructor(opt){        
        this._newsByDays = {};
        this._themeWord = '';
        this._tableDays = opt.dayFields;
        this._tableBars = opt.barFields;
        this._dataStorage = opt.dataStorage;
        this._articles = this._dataStorage.getNews();
        this._stats = opt.stats;
        this._requestWord = this._stats.querySelector('.stats__asked');
        this._titlesSum = this._stats.querySelector('.stats__sum-week');
        this._titleMatchRquest = this._stats.querySelector('.stats__sum-titles');
        this._table = opt.table;
        this._tableMonth = this._table.querySelector('.table__date');
    }
    startStats(){
        this._getDataForStats();
        this._setStats();  
        this._setTableStats();        
    }
    _getDataForStats (){
        this._themeWord = this._dataStorage.getNewsTheme();
        this._articles.forEach(el => { 
            const convertedDate = this._convertDate(el.publishedAt);                       
            if (el.title){
                if (convertedDate in this._newsByDays){             
                    el.title.includes(this._themeWord) || 
                    el.title.includes(this._themeWord.toLowerCase()) || 
                    el.title.includes(this._themeWord.toUpperCase()) ? this._newsByDays[convertedDate]++ : 0;                                                      
                } else {this._newsByDays[convertedDate] = 0 + (el.title.includes(this._themeWord) || 
                    el.title.includes(this._themeWord.toLowerCase()) || 
                    el.title.includes(this._themeWord.toUpperCase()) ? this._newsByDays[convertedDate] = 1 : 0)}} 
                if (el.description){                     
                    el.description.includes(this._themeWord) || 
                    el.description.includes(this._themeWord.toLowerCase()) || 
                    el.description.includes(this._themeWord.toUpperCase()) ? this._newsByDays[convertedDate]++ : 0;
                }
        });  
    }
    _setTableStats(){        
        const date = [];
        const weekDay = [];
        for (let i=6; i>=0; i--){
            const curDate = new Date(Date.now() - i * 24 * 60 * 60 * 1000);            
            date.push(curDate.getDate());
            weekDay.push(curDate.getDay())
          };       
          for (let i=0; i < this._tableDays.length; i++){            
            this._tableDays[i].textContent = `${date[i]}, ${this._replaceDay(weekDay[i])}`;          
            this._tableBars[i].setAttribute('style', `width: ${this._daysBarsMatch(this._newsByDays, i)}%`);
            this._tableBars[i].style.width == '0%' ? this._tableBars[i].setAttribute('style', `padding-left: 0px`) : 0;
            this._tableBars[i].textContent = (this._daysBarsMatch(this._newsByDays, i)>1 ? this._daysBarsMatch(this._newsByDays, i) : '' );  
        }; 
        this._setTableMonth();           
    }
    _titleMatches (arr, word){ 
        return arr.reduce((res, cur) => {            
        cur.title.includes(word) || 
        cur.title.includes(word.toLowerCase()) || 
        cur.title.includes(word.toUpperCase())  ? res++ : res;        
        return res;
      }, 0);
      return;
    }
    _setTableMonth(){
        const month = {
            0: 'январь',
            1: 'февраль',
            2: 'март',
            3: 'апрель',
            4: 'май',
            5: 'июнь',
            6: 'июль',
            7: 'август',
            8: 'сентябрь',
            9: 'октябрь',
            10: 'ноябрь',
            11: 'декабрь'
        }
        this._tableMonth.textContent = `Дата
        (${month[new Date().getMonth()]})`; 
    }
    _setStats(){
        this._requestWord.textContent = this._themeWord;
        this._titlesSum.textContent = this._dataStorage.getTotal();
        this._titleMatchRquest.textContent = this._titleMatches(this._articles, this._themeWord);
    }
    _convertDate (str){
        const dateInMs = Date.parse(str);
        const curDate = new Date(dateInMs);
        return `${curDate.getDate()}, ${this._replaceDay(curDate.getDay())}`        
    }
    _replaceDay (str){
        const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];        
        return weekDays[str];
    }
    _daysBarsMatch (obj, i){
    return obj[this._table.querySelector(`#day-${i+1}`).textContent] ? obj[this._table.querySelector(`#day-${i+1}`).textContent] : '0';
    }
}
