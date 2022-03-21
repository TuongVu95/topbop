const $document = $(document);
const $htmlBody = $('html,body');
const $window = $(window);

const $windowWidth = $window.width();
const $mobile = $windowWidth < 992;
const $desktop = $windowWidth > 992;

const featureHeader = () => {
  const $jsOpenNav = $('.jsOpenNav');
  const $navMobile = $('.nav-mobile');
  const $purger = $('.page__header-burger');
  const $actionExpand = $('.jsActionExpand');
  const $profile = $('.page__profile');

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
    // $jsOpenNav.removeClass('block-profile');

    if($that.is($profile)){
      $jsOpenNav.toggleClass('block-profile');
    }

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
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    '360': {
      slidesPerGroup: 1,
      slidesPerView: 1,
    }
  }
});

const saleSwiper = new Swiper('.sale-swiper', {
  slidesPerGroup: 1,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const pageHome = () => {
  console.log("$desktop", $desktop);
  if($desktop){
    var swiper = new Swiper(".swiper-trending", {
      slidesPerView:"auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        992: {
          spaceBetween: 0,
          slidesPerGroup: 5,
        },
      },
    });
  }

}

const pageCate = () => {

}


const init = () => {
  featureHeader();
  pageHome();
}
init();

$(document).ready(function(){
  const btnExpand = $('.js-action-expand');
  btnExpand.accordion();
});

jQuery.fn.extend({
  accordion: function () {
      return this.each(function () {
          const $that = $(this);
          const btnExpand = $('.js-action-expand');
          const listWrap = $('.js-list');

          $that.click(function(){
            const isActive = $that.is('.active');
            const jsListDropdown = $('.js-list');
            const listDropdown = $that.next('.js-list');

            if(isActive){
              btnExpand.removeClass('active');
              listDropdown.slideUp();

            }else{
              btnExpand.removeClass('active');
              $that.addClass('active');
              jsListDropdown.slideUp();
              listDropdown.slideDown();
            }

          });

      });
  }
});
