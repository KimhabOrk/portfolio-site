// Add your javascript here
var swiper = new Swiper('.mySwiper', {
  pagination: '.swiper-pagination',
  slidesPerView: 2,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

var swiper = new Swiper('.my-swiper', {
  pagination: '.swiper-pagination',
  slidesPerView: 3,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});