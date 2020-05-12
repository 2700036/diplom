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
            `<div class="slider__card-date">${this._dateConverter(data.commit.committer.date.slice(0, 10))}</div>
            <div class="slider__card-author">
              <img class="slider__card-photo" src="${data.commit.committer.name === 'GitHub' ? './images/githubicon.png' : data.author.avatar_url}" alt="фото коммитера">
              <div class="slider__card-name-mail-wrapper">        
              <p class="slider__card-name">${data.commit.committer.name}</p>
              <div class="slider__card-mail">${data.commit.committer.email}</div>
            </div>
            </div>
            <div class="slider__card-commit">${data.commit.message}</div>`
        );
        return commitCard;
    }
}
