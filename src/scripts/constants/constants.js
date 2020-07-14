export const searchLanguage = 'ru';
export const apiKey = 'bdfd8c257cd74d43a9415a268476b3ea';
export const apiUrl = process.env.NODE_ENV === 'development' ? 'http' : 'https'; 
export const gitUserName = '2700036';
export const gitUsersRepo = 'diplom';
export const numberForShowCards = 3;
export const maxSlidesUnits = 21;

export const swiperConfig = {
  slidesPerView: 3.5,
  spaceBetween: 16,
  slidesOffsetBefore: 104,
  slidesOffsetAfter: 104,
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
      slidesOffsetBefore: 17,
      slidesOffsetAfter: 17
    },
    480: {
      slidesPerView: 1.7,
      slidesOffsetBefore: 33.33,
      slidesOffsetAfter: 33.33
    },
    640: {
      slidesPerView: 2.23,
      slidesOffsetBefore: 40,
      slidesOffsetAfter: 40
    },
    770: {
      slidesPerView: 2.3,
      slidesOffsetBefore: 69.33,
      slidesOffsetAfter: 69.33
    },
    960: {
      slidesPerView: 2.35,
      slidesOffsetBefore: 80.88,
      slidesOffsetAfter: 80.88
    },
    1120: {
      slidesPerView: 3,
      slidesOffsetBefore: 92.44,
      slidesOffsetAfter: 92.44
    },
    1280: {
      slidesPerView: 3.5,
      slidesOffsetBefore: 104,
      slidesOffsetAfter: 104
    }
  }
};
