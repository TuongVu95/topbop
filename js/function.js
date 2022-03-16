const $document = $(document);
const $htmlBody = $('html,body');
const $windowWidth = $($(window).width());


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

    if (isNavMobile) {
      $navMobile.removeClass('is-expand');
      $jsOpenNav.removeClass('is-open');
    }
  });

}


const topbopSwiper = new Swiper('.benefit__swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    '360': {
      slidesPerView: 2.1,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    '992': {
      slidesPerView: 3.1,
      spaceBetween: 16,
      slidesPerGroup: 3,
    }
  }
});


const productSwiper = new Swiper('.product__swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    '360': {
      slidesPerView: 1.1,
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
    '992': {
      slidesPerView: 3.1,
      spaceBetween: 16,
      slidesPerGroup: 3,
    }
  }
});

const aboutUsSwiper = new Swiper('.about-us-swiper', {
  slidesPerGroup: 1,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

const saleSwiper = new Swiper('.sale-swiper', {
  slidesPerGroup: 1,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const pageCate = () => {



}

const init = () => {
  featureHeader();
}
init();