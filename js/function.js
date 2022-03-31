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

    if ($that.is($profile)) {
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

function detailSwiper() {
  if ($(window).width() < 992) {

    const galleryThumbs = new Swiper('.thumb-detail', {
      spaceBetween: 4,
      slidesPerView: 3.1,
      freeMode: true,
    });

    const detailSwiper = new Swiper('.detail-swiper', {
      slidesPerGroup: 1,
      slidesPerView: 1,
      centeredSlides: true,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }
}


const pageHome = () => {
  console.log("$desktop", $desktop);
  if ($desktop) {
    var swiper = new Swiper(".swiper-trending", {
      slidesPerView: "auto",
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

  const topbopSwiper = new Swiper('.swiper-product', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      '360': {
        slidesPerView: 1.2,
        spaceBetween: 12,
        slidesPerGroup: 2,
      },
      '768': {
        slidesPerView: 3.1,
        spaceBetween: 16,
        slidesPerGroup: 3.1,
      }
    }
  });

  const social = new Swiper('.swiper-social', {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //   '360': {
    //     slidesPerView: 2.1,
    //     spaceBetween: 12,
    //     slidesPerGroup: 2,
    //   },
    //   '768': {

    //     spaceBetween: 16,
    //     slidesPerGroup: 3.1,
    //   }
    // }
  });

  const blog = new Swiper('.swiper-blogs', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      '360': {
        slidesPerView: 2.1,
        spaceBetween: 0,
        slidesPerGroup: 2,
      },
      '768': {
        slidesPerView: 3.15,
        spaceBetween: 0,
        slidesPerGroup: 3,
      }
    }
  });

}

const pageCate = () => {

}

const detailPolicy = () => {
  let cardShow = $('.policy--card');
  cardShow.hide().first().show();
  $('.js-tab').click(function () {
    let attr = $(this).attr('data-tab');
    console.log(attr);
    $(this).addClass('active').siblings().removeClass('active');

    cardShow.hide();
    $(`#${attr}`).fadeIn();
  })
}


const init = () => {
  featureHeader();
  pageHome();
  detailPolicy();
  detailSwiper();
}
init();

$(document).ready(function () {
  const btnExpand = $('.js-action-expand');
  btnExpand.accordion();
});

$('.js-more').each(function () {
  var show_char,
    ellipsestext = "...",
    more_text = 'Xem thêm',
    width = $(window).width();
  content = $(this).html();

  show_char = 200;

  console.log(content.length);
  if (content.length > show_char) {
    var c = content.substr(0, show_char);
    var h = content.substr(show_char, content.length - show_char);
    var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="link morelink">' + more_text + '</a></span>';
    $(this).html(html);
  }
});
$('.morelink').click(function (e) {
  e.preventDefault();
  $(this).parent().prev().toggle();
  $(this).prev().toggle();
  $(this).hide();
})



jQuery.fn.extend({
  accordion: function () {
    return this.each(function () {
      const $that = $(this);
      const btnExpand = $('.js-action-expand');
      const listWrap = $('.js-list');

      $that.click(function () {
        const isActive = $that.is('.active');
        const jsListDropdown = $('.js-list');
        const listDropdown = $that.next('.js-list');

        if (isActive) {
          btnExpand.removeClass('active');
          listDropdown.slideUp();

        } else {
          btnExpand.removeClass('active');
          $that.addClass('active');
          jsListDropdown.slideUp();
          listDropdown.slideDown();
        }

      });

    });
  }
});
