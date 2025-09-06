new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // centeredSlides: true,

  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 3,

      spaceBetween: 40,
    },
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});