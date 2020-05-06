export default class DataStorage {
    constructor (){

    }
    saveNews(arr, theme){
        localStorage.clear ();
        localStorage.setItem('newsArticles', JSON.stringify(arr.articles));
        localStorage.setItem('newsTheme', theme);
        localStorage.setItem('total', arr.totalResults)
    }
    getNews(){
        return JSON.parse(localStorage.getItem('newsArticles'))
    }
    getNewsTheme(){
        const theme = localStorage.getItem('newsTheme');        
        return theme[0].toUpperCase() + theme.slice(1);        
    }
    getTotal(){
        return localStorage.getItem('total')
    }
}




