
let activeSlide = 0;
let totalSlides = 0;

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

window.addEventListener('DOMContentLoaded', (event) => {

  if (document.querySelector('.slider')) {
    recalculateSliderHeight();

    totalSlides = document.querySelectorAll('.slide').length;

    let heightInterval = setInterval(function() {
      recalculateSliderHeight();
      if (document.querySelector('.slider') && document.querySelector('.slider').offsetHeight > 100) {
        clearInterval(heightInterval);
      }
    }, 100);

    sliderButtons();
  }

  document.getElementsByTagName('body')[0].classList.remove('opacity-0');
});

window.slideLoopInterval = setInterval(function() {
  nextSlide();
}, 4000);

window.nextSlide = function() {
  document.querySelector('.slide-' + activeSlide).classList.remove('active');
  activeSlide += 1;
  if (activeSlide > (totalSlides - 1)) {
    activeSlide = 0;
  }
  if (document.querySelector('.slide-' + activeSlide)) {
    document.querySelector('.slide-' + activeSlide).classList.add('active');
  }
  recalculateSliderHeight();
}

window.prevSlide = function() {
  document.querySelector('.slide-' + activeSlide).classList.remove('active');
  activeSlide -= 1;
  if (activeSlide <= 0) {
    activeSlide = (totalSlides - 1);
  }
  if (document.querySelector('.slide-' + activeSlide)) {
    document.querySelector('.slide-' + activeSlide).classList.add('active');
  }
  recalculateSliderHeight();
}

function sliderButtons() {
  // Click Left and Right Events
  let leftBtns = document.querySelectorAll('.left');
  for (i = 0; i < leftBtns.length; i++) {
    leftBtns[i].addEventListener('click', function() {
      clearInterval(slideLoopInterval);
      console.log('left');
      prevSlide();
    });
  }

  let rightBtns = document.querySelectorAll('.right');
  for (i = 0; i < rightBtns.length; i++) {
    rightBtns[i].addEventListener('click', function() {
      clearInterval(slideLoopInterval);
      nextSlide();
    });
  }
}

window.addEventListener('resize', function() {
  recalculateSliderHeight();
});

function recalculateSliderHeight() {
  if (document.querySelector('.slide.active')) {
    let initialHeight = document.querySelector('.slide.active').offsetHeight;
    document.querySelector('.slider').style.height = initialHeight + 'px';
  }
}

window.clickActiveSlide = function(e) {
  if (!hasParentWithMatchingSelector(e.target, '.left') && !hasParentWithMatchingSelector(e.target, '.right') && !e
    .target.classList.contains('left') && !e.target.classList.contains('right')) {
    window.location = document.querySelector('.slide.active').dataset.href;
  }
  console.log(e.target);
}