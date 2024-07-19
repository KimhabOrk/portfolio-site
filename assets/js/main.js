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


  var swiper = new Swiper(".progress-slide-carousel", {
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    fraction: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".progress-slide-carousel .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

