const featureHeader = () => {
  const buttonBurger = $('#burger');
  const navMobile = $('.nav-mobile');

  buttonBurger.click(function(){
      const $that = $(this);
      $that.toggleClass('is-open');
      navMobile.toggleClass('is-expand');
  });
}


const topbopSwiper = new Swiper('.topbop__swiper', {
  slidesPerView: 3.1,
  spaceBetween: 16,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

const init = () => {
  featureHeader();
}
init();