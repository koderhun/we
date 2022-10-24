import './import/modules';
import Swiper, {Autoplay} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
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
    modules: [Autoplay],
    autoplay: {
      delay: 3000,
    },
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 10,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  $('.burger, .close').on('click', () => {
    $('.header').toggleClass('open');
  });
});
