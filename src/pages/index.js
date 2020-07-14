import '../pages/index.css';
import NewsAPI from '../scripts/modules/NewsApi';
import SearchInput from '../scripts/components/SearchInput';
import DataStorage from '../scripts/modules/DataStorage';
import NewsCard from '../scripts/components/NewsCard';
import NewsCardList from '../scripts/components/NewsCardList';
import {searchLanguage} from '../scripts/constants/constants';
import {apiKey} from '../scripts/constants/constants';
import {apiUrl} from '../scripts/constants/constants';
import dateConverter from '../scripts/utils/dateConverter';
import {numberForShowCards} from '../scripts/constants/constants';


const searchForm = document.querySelector('.search__form');
const resultSection = document.querySelector('.result');
const preloader = document.querySelector('.preloader');
const notFound = document.querySelector('.not-found');
const disconnect = document.querySelector('.disconnect');

const today = new Date();
const weekAgo = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
const weekAgoDate = weekAgo.toJSON().slice(0, 10);
const todayDate = today.toJSON().slice(0, 10);
const newsAPI = new NewsAPI({
  searchLanguage,
  apiKey,
  weekAgoDate,
  todayDate,
  apiUrl
});
const dataStorage = new DataStorage();
const getNewsfromStorage = () => dataStorage.getNews();
const getThemefromStorage = () => dataStorage.getNewsTheme();
const clearStorage = () => dataStorage.clearStorage();
const newsCard = new NewsCard(dateConverter);
const createCard = data => newsCard.createCard(data);
const newsCardList = new NewsCardList({
  resultSection,
  createCard,
  getNewsfromStorage,
  disconnect,
  notFound,
  preloader,
  numberForShowCards
});
const togglePreloader = isLoading => newsCardList.togglePreloader(isLoading);
const clearResults = () => newsCardList.resetResults();

const getSaveRender = inputValue => {
  return newsAPI
    .getNews(inputValue)
    .then(res => {
      if (res.articles.length > 0) {
        dataStorage.saveNews(res, inputValue);
        newsCardList.saveArrToList(getNewsfromStorage());
        newsCardList.renderCards();
      } else {
        newsCardList.nothingFound();
      }
    })
    .catch(err => {
      newsCardList.disconnect();
      console.log(err);
    })    
};

const searchInput = new SearchInput(
  getSaveRender,
  togglePreloader,
  clearResults,
  searchForm,
  getThemefromStorage,
  clearStorage
);

if (dataStorage.checkNews()) {
  searchInput.setRequestedTheme();
  newsCardList.saveArrToList(getNewsfromStorage());
  newsCardList.renderCards();
}
