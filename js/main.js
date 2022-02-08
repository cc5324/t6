const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});