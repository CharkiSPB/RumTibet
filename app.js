document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.popular-swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      breakpoints: {
          320: {
              slidesPerView: 1.2,
              spaceBetween: 15
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 20
          }
      }
  });
});