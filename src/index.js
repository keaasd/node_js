import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';
import $ from 'jquery';

import Swiper, { Navigation, Pagination } from 'swiper';

// Swiper свайпер
var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],  
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 2
        },
        1121: {
          slidesPerView: 3,
          spaceBetween: 3
        }
      }
});