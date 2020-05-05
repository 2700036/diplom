export const searchLanguage = 'ru';
export const apiKey = 'bdfd8c257cd74d43a9415a268476b3ea';
const today = (new Date);
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const weekInMs = today - Date.UTC(year, month, day - 7);
const weekAgoInMs = Date.now() - weekInMs;
export const weekAgoDate = new Date(weekAgoInMs).toJSON().slice(0, 10)
export const todayDate = today.toJSON().slice(0, 10);


export const searchForm = document.querySelector('.search__form');