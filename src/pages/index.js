import '../pages/index.css';
import NewsAPI from '../scripts/modules/NewsApi';
import SearchInput from '../scripts/components/SearchInput';
import DataStorage from '../scripts/modules/DataStorage';
import NewsCard from '../scripts/components/NewsCard';
import NewsCardList from '../scripts/components/NewsCardList';


const searchForm = document.querySelector('.search__form');
const resultSection = document.querySelector('.result');
const preloader = document.querySelector('.preloader');
const notFound = document.querySelector('.not-found');
const disconnect = document.querySelector('.disconnect');
const searchLanguage = 'ru';
const apiKey = 'bdfd8c257cd74d43a9415a268476b3ea';

const today = new Date;
const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const weekAgoDate = weekAgo.toJSON().slice(0, 10)
const todayDate = today.toJSON().slice(0, 10);




const newsAPI = new NewsAPI({searchLanguage, apiKey, weekAgoDate, todayDate});
const dataStorage = new DataStorage();
const getNewsfromStorage = () => dataStorage.getNews();
const newsCard = new NewsCard();
const createCard = (data) => newsCard.createCard(data);
const newsCardList = new NewsCardList({resultSection, createCard, getNewsfromStorage, disconnect, notFound, preloader});
const togglePreloader = (isLoading) => newsCardList.togglePreloader(isLoading);
const clearResults = () => newsCardList.resetResults();

const getSaveRender = (inputValue) => {return newsAPI.getNews(inputValue)
    .then(res => {                 
        if (res.articles.length > 0) {                         
        dataStorage.saveNews(res, inputValue);
        newsCardList.saveArrToList(getNewsfromStorage());
        
        newsCardList.renderCards();
        } else {newsCardList.nothingFound()}
        })
    .catch(err => {        
        newsCardList.disconnect();
        console.log(err);
    })
    .finally (() => togglePreloader(false));
;}

const searchInput = new SearchInput(getSaveRender, togglePreloader, clearResults, searchForm);
 