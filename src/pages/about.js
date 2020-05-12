import '../blocks/swiper/swiper.css';
import '../pages/about.css';
import GithubApi from '../scripts/modules/GithubApi';
import Swiper from '../../node_modules/swiper/js/swiper';
import {swiperConfig} from '../scripts/constants/constants';
import {gitUserName} from '../scripts/constants/constants';
import {gitUsersRepo} from '../scripts/constants/constants';
import CommitCard from '../scripts/components/CommitCard';
import CommitCardList from '../scripts/components/CommitCardList';
import dateConverter from '../scripts/utils/dateConverter';
import {apiUrl} from '../scripts/constants/constants';

const commitSection = document.querySelector('.slider');
const gitHubApi = new GithubApi({gitUserName, gitUsersRepo, apiUrl});
const getCommits = () => gitHubApi.getCommits();
const commitCard = new CommitCard(dateConverter);
const createSlide = data => commitCard.createSlide(data);
const commitCardList = new CommitCardList({
  createSlide,
  getCommits,
  commitSection
});

gitHubApi
  .getCommits()
  .then(res => {
    res.reverse().forEach(el => {
      commitCardList.addSlide(el);
    });
    commitCardList.showCommits();
    new Swiper('.swiper-container', swiperConfig);
  })
  .catch(err => {
    commitCardList.disconnect();
  });
