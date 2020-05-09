import '../blocks/swiper/swiper.css';
import '../pages/about.css';
import Swiper from '../../node_modules/swiper/js/swiper';
console.log('about');


var mySwiper = new Swiper ('.swiper-container', {
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
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {    
    300: {
      slidesPerView: 1.10,
      slidesOffsetBefore: 17,
      slidesOffsetAfter: 17,      
    },
    480: {
      slidesPerView: 1.7,
      slidesOffsetBefore: 33.33,
      slidesOffsetAfter: 33.33,
    },
    640: {
      slidesPerView: 2.23,
      slidesOffsetBefore: 40,
      slidesOffsetAfter: 40,
    },
    770: {
      slidesPerView: 2.3,
      slidesOffsetBefore: 69.33,
      slidesOffsetAfter: 69.33,
    },
    960: {
      slidesPerView: 2.35,
      slidesOffsetBefore: 80.88,
      slidesOffsetAfter: 80.88,
    },
    1120: {
      slidesPerView: 3,
      slidesOffsetBefore: 92.44,
      slidesOffsetAfter: 92.44,
      
    },
    1280: {
      slidesPerView: 3.5,
      slidesOffsetBefore: 104,
      slidesOffsetAfter: 104,
      
    },
  }
  
})
  