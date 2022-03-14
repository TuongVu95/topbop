const $document = $(document);
const $htmlBody = $('html,body');

const featureHeader = () => {
  const $jsOpenNav = $('.jsOpenNav');
  const $navMobile = $('.nav-mobile');
  const $purger = $('.page__header-burger');
  const $actionExpand = $('.jsActionExpand');

  $jsOpenNav.click(function () {
    const $that = $(this);

    $jsOpenNav.toggleClass('is-open');
    $navMobile.toggleClass('is-expand');
    $purger.toggleClass('is-open');
    $('html,body').toggleClass('disable-scroll');
  });

  $actionExpand.click(function () {
    const $that = $(this);
    $that.toggleClass('expand');
  });

  $document.click(function (e) {
    const elTarget = e.target;
    const isNavMobile = $navMobile.is(elTarget);

    if(isNavMobile){
      $navMobile.removeClass('is-expand');
      $jsOpenNav.removeClass('is-open');
    }

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