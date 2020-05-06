import '../pages/index.css';
import {NewsAPI} from '../scripts/modules/NewsApi';
import {SearchInput} from '../scripts/components/SearchInput';
import DataStorage from '../scripts/modules/DataStorage';
import NewsCard from '../scripts/components/NewsCard';
import NewsCardList from '../scripts/components/NewsCardList';


const searchLanguage = 'ru';
const apiKey = 'bdfd8c257cd74d43a9415a268476b3ea';
const today = new Date;
const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const weekAgoDate = weekAgo.toJSON().slice(0, 10)
const todayDate = today.toJSON().slice(0, 10);

const searchForm = document.querySelector('.search__form');
const resultCardList = document.querySelector('.result__cardlist');

const newsAPI = new NewsAPI({searchLanguage, apiKey, weekAgoDate, todayDate});
const dataStorage = new DataStorage();
const getNewsfromStorage = () => dataStorage.getNews();
const newsCard = new NewsCard();
const createCard = (data) => newsCard.createCard(data);
const newsCardList = new NewsCardList({resultCardList, createCard, getNewsfromStorage});


const getSaveRender = (inputValue) => {return newsAPI.getNews(inputValue)
    .then(res => { 
        const newsArr = res.articles;
        if (newsArr.length > 0) { console.log(getNewsfromStorage());
        dataStorage.saveNews(res, inputValue);
        getNewsfromStorage().forEach(el => {
            newsCardList.addCard(createCard(el));  
        })
        }
        //  else {ничего не найдено}
        })
    .catch(err => {
        console.log(err);
});}

const searchInput = new SearchInput(getSaveRender, searchForm);
 