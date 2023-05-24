import Swiper from '../vendor/swiper.js';

// Default slider
for (const container of  document.querySelectorAll('.container') ) {
  let heroSlider = new Swiper(container.querySelector('.product__hero-slider'), {
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    adaptiveHeight: true,
    navigation: {
      nextEl: container.querySelector(".product__slider-btn--next"),
      prevEl: container.querySelector(".product__slider-btn--prev"),
      clickable: true,
    }
  });

  for (const feedbacksSlider of document.querySelectorAll('.product__feedbacks-slider')) {
    if (feedbacksSlider) {
      (function () {
        "use strict";

        const breakpoint = window.matchMedia("(max-width:576px)");
        let slider;

        const enableSwiper = function () {
          slider = new Swiper(feedbacksSlider, {
            slidesPerView: 4,
            loop: true,
            freeMode: true,
            adaptiveHeight: true,
            spaceBetween: 20,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1240: {
                slidesPerView: 4,
              },
            }
          });
        };

        const breakpointChecker = function () {
          if (breakpoint.matches === true) {
            if (slider !== undefined) slider.destroy(true, true);

            return;
          } else if (breakpoint.matches === false) {
            return enableSwiper();
          }
        };

        breakpoint.addListener(breakpointChecker);
        breakpointChecker();
      })();
    }
  }

  let shopBannerSlider = new Swiper(container.querySelector('.shop__slider'), {
    slidesPerView: 1,
    loop: true,
    adaptiveHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let shopCategoriesSlider = new Swiper(container.querySelector('.shop__categories'), {
    slidesPerView: 'auto',
    spaceBetween: 6,
    loop: true,
    adaptiveHeight: true,
    pagination: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
}




