import '../../images/githubicon.png';

export default class CommitCard {
    constructor(foo){
        this._dateConverter = foo;  
      }
    createSlide(data){
        const commitCard = document.createElement('a');
        commitCard.className = 'slider__card swiper-slide link';        
        commitCard.href = data.html_url;
        commitCard.target = '_blank';
        commitCard.insertAdjacentHTML(
            'beforeend', 
            `<div class="slider__card-date"></div>
            <div class="slider__card-author">
              <img class="slider__card-photo" src="" alt="фото коммитера">
              <div class="slider__card-name-mail-wrapper">        
              <p class="slider__card-name"></p>
              <div class="slider__card-mail"></div>
            </div>
            </div>
            <div class="slider__card-commit"></div>`
        );
        commitCard.querySelector('.slider__card-date').textContent = this._dateConverter(data.commit.committer.date.slice(0, 10));
        commitCard.querySelector('.slider__card-photo').src = `${data.commit.committer.name === 'GitHub' ? `./images/githubicon.png` : data.author.avatar_url}`;
        commitCard.querySelector('.slider__card-name').textContent = data.commit.committer.name;
        commitCard.querySelector('.slider__card-mail').textContent = data.commit.committer.email;
        commitCard.querySelector('.slider__card-commit').textContent = data.commit.message;
        return commitCard;
    }
}
