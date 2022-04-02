"use strict";

var $document = $(document);
var $htmlBody = $('html,body');
var $window = $(window);
var $windowWidth = $window.width();
var $mobile = $windowWidth < 992;
var $desktop = $windowWidth > 992;

var featureHeader = function featureHeader() {
  var $jsOpenNav = $('.jsOpenNav');
  var $navMobile = $('.nav-mobile');
  var $purger = $('.page__header-burger');
  var $actionExpand = $('.jsActionExpand');
  var $profile = $('.page__profile');
  $jsOpenNav.click(function () {
    var $that = $(this);
    $jsOpenNav.toggleClass('is-open');
    $navMobile.toggleClass('is-expand');
    $purger.toggleClass('is-open');
    $('html,body').toggleClass('disable-scroll');
  });
  $actionExpand.click(function () {
    var $that = $(this);
    $that.toggleClass('expand'); // $jsOpenNav.removeClass('block-profile');

    if ($that.is($profile)) {
      $jsOpenNav.toggleClass('block-profile');
    }
  });
  $document.click(function (e) {
    var elTarget = e.target;
    var isNavMobile = $navMobile.is(elTarget);

    if (isNavMobile) {
      $navMobile.removeClass('is-expand');
      $jsOpenNav.removeClass('is-open');
    }
  });
};

var topbopSwiper = new Swiper('.benefit__swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    '360': {
      slidesPerView: 2.1,
      spaceBetween: 12,
      slidesPerGroup: 2
    },
    '992': {
      slidesPerView: 3.1,
      spaceBetween: 16,
      slidesPerGroup: 3
    }
  }
});
var productSwiper = new Swiper('.product__swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    '360': {
      slidesPerView: 1.1,
      spaceBetween: 12,
      slidesPerGroup: 1
    },
    '992': {
      slidesPerView: 3.1,
      spaceBetween: 16,
      slidesPerGroup: 3
    }
  }
});
var aboutUsSwiper = new Swiper('.about-us-swiper', {
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  breakpoints: {
    '360': {
      slidesPerGroup: 1,
      slidesPerView: 1
    }
  }
});
var saleSwiper = new Swiper('.sale-swiper', {
  slidesPerGroup: 1,
  cssMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

function detailSwiper() {
  if ($(window).width() < 992) {
    var galleryThumbs = new Swiper('.thumb-detail', {
      spaceBetween: 4,
      slidesPerView: 3.5,
      freeMode: true
    });

    var _detailSwiper = new Swiper('.detail-swiper', {
      slidesPerGroup: 1,
      slidesPerView: 1,
      centeredSlides: true,
      thumbs: {
        swiper: galleryThumbs
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      }
    });
  }
}

var pageHome = function pageHome() {
  console.log("$desktop", $desktop);

  if ($desktop) {
    var swiper = new Swiper(".swiper-trending", {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        992: {
          spaceBetween: 0,
          slidesPerGroup: 5
        }
      }
    });
  }

  var topbopSwiper = new Swiper('.swiper-product', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      '360': {
        slidesPerView: 1.2,
        spaceBetween: 12,
        slidesPerGroup: 2
      },
      '768': {
        slidesPerView: 3.1,
        spaceBetween: 16,
        slidesPerGroup: 3.1
      }
    }
  });
  var social = new Swiper('.swiper-social', {
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    } // breakpoints: {
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
  var blog = new Swiper('.swiper-blogs', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      '360': {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 2
      },
      '768': {
        slidesPerView: 3.15,
        spaceBetween: 0,
        slidesPerGroup: 3
      }
    }
  });
};

var pageCate = function pageCate() {
  var btnToggleFilter = $('.toggle-filter');
  var colSidebar = $('.col-sidebar');
  var contenPara = $('.toggle-filter-para');
  var btnOption = $('.option-button'),
      optionDropdown = $('.option-dropdown');
  var optionItem = $('.option-item'),
      $radio = $('.radio input[type="radio"]');
  var groupCheckbox = $('.group-checkbox'),
      $checkbox = $('.checkbox');
  var btnClose = $('.js-btn-close');
  var gridCol = $('.grid-col');
  btnToggleFilter.click(function () {
    var $that = $(this);
    $that.toggleClass('active');

    if ($mobile) {
      var para = "Lọc";
      colSidebar.toggleClass('expand');
      $('html,body').toggleClass('disable-scroll');
    } else {
      colSidebar.toggleClass('hide');
      var para = $('.toggle-filter.active').length ? "Hiện lọc" : "Ẩn lọc";
    }

    contenPara.text(para);
  });
  btnOption.click(function () {
    var $that = $(this);
    $that.toggleClass('active');
    optionDropdown.toggleClass('open');
  }); // sắp xếp

  $radio.change(function (e) {
    e.preventDefault();
    var that = $(this);
    $radio.prop('checked', false);
    that.prop('checked', true);
    btnOption.removeClass('active');
    optionDropdown.removeClass('open');
  }); // checkbox

  groupCheckbox.each(function () {
    var that = $(this),
        $radioChild = that.find('.checkbox').not('.checkboxAll');
    var checkboxAll = $('.checkboxAll');
    $radioChild.change(function () {
      console.log(1);
      checkboxAll.prop('checked', false);
    });
  }); // đóng filter $mobile

  btnClose.click(function () {
    colSidebar.removeClass('expand');
  });
  gridCol.each(function () {
    var $that = $(this);
    var productCate = $('.product__cate');
    var resetCol = $('.product__cate .reset-col');
    $that.click(function () {
      gridCol.removeClass('active');
      $that.addClass('active');

      if ($that.is('.grid-col-1')) {
        resetCol.addClass('col-sm-12');
        productCate.addClass('product-grid');
      } else {
        resetCol.removeClass('col-sm-12');
        productCate.removeClass('product-grid');
      }
    });
  });
};

var detailPolicy = function detailPolicy() {
  var cardShow = $('.policy--card');
  cardShow.hide().first().show();
  $('.js-tab').click(function () {
    var attr = $(this).attr('data-tab');
    console.log(attr);
    $(this).addClass('active').siblings().removeClass('active');
    cardShow.hide();
    $("#".concat(attr)).fadeIn();
  });
};

var radio = function radio() {
  var $checkbox = $('.checkbox'),
      input = $checkbox.find('input[type="checkbox"]'),
      label = $checkbox.find('label');
  input.attr('id', function (i) {
    return 'ex' + i;
  });
  label.attr('for', function (i) {
    return 'ex' + i;
  });
};

var init = function init() {
  featureHeader();
  pageHome();
  pageCate();
  detailPolicy();
  detailSwiper();
  radio();
};

init();
$(document).ready(function () {
  var btnExpand = $('.js-action-expand');
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
});
jQuery.fn.extend({
  accordion: function accordion() {
    return this.each(function () {
      var $that = $(this);
      var btnExpand = $('.js-action-expand');
      var listWrap = $('.js-list');
      $that.click(function () {
        var isActive = $that.is('.active');
        var jsListDropdown = $('.js-list');
        var listDropdown = $that.next('.js-list');

        if (isActive) {
          $that.removeClass('active');
          listDropdown.slideUp();
        } else {
          // btnExpand.removeClass('active');
          $that.addClass('active'); // jsListDropdown.slideUp();

          listDropdown.slideDown();
        }
      });
    });
  }
});