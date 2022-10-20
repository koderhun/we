import './import/modules';
import Swiper from 'swiper';

const buttons = document.querySelectorAll('.card-list__item');
const sections = document.querySelectorAll('.card-info');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
    const id = btn.id;
    sections.forEach((section) => {
      section.classList.remove('active');
    });
    const req = document.getElementsByClassName(`card-info${id}`);
    req[0].classList.add('active');
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

$('.burger, .close').on('click', () => {
  $('.header').toggleClass('open');
});

new Tippy('.type', {
  animation: 'scale',
  arrow: 'true',
  theme: 'light',
});
