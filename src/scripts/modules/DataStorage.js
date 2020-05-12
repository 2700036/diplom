export default class DataStorage {
  constructor() {}
  saveNews(arr, theme) {
    localStorage.clear();
    arr.articles.forEach(el => {
      el.publishedAt = el.publishedAt.slice(0, 10);
    });
    localStorage.setItem('newsArticles', JSON.stringify(arr.articles));
    localStorage.setItem('newsTheme', theme.toLowerCase());
    localStorage.setItem('total', arr.totalResults);
  }
  getNews() {
    return JSON.parse(localStorage.getItem('newsArticles'));
  }
  getNewsTheme() {
    return localStorage.getItem('newsTheme');
     
  }
  getTotal() {
    return localStorage.getItem('total');
  }
}
