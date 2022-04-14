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
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function detailSwiper() {
  if ($(window).width() < 992) {

    const galleryThumbs = new Swiper('.thumb-detail', {
      spaceBetween: 4,
      slidesPerView: 3.5,
      freeMode: true,
    });

    const detailSwiper = new Swiper('.detail-swiper', {
      slidesPerGroup: 1,
      slidesPerView: 1,
      centeredSlides: true,
      thumbs: {
        swiper: galleryThumbs
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
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
        slidesPerView: 1,
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
  const btnToggleFilter = $('.toggle-filter');
  const colSidebar = $('.col-sidebar');
  const contenPara = $('.toggle-filter-para');

  const btnOption = $('.option-button'), optionDropdown = $('.option-dropdown');

  const optionItem = $('.option-item'), $radio = $('.radio input[type="radio"]');

  const groupCheckbox = $('.group-checkbox'), $checkbox = $('.checkbox');

  const btnClose = $('.js-btn-close');

  const gridCol = $('.grid-col');

  btnToggleFilter.click(function () {
    const $that = $(this);
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
    const $that = $(this);
    $that.toggleClass('active');
    optionDropdown.toggleClass('open');
  });

  // sắp xếp
  $radio.change(function (e) {
    e.preventDefault();

    const that = $(this);

    $radio.prop('checked', false);
    that.prop('checked', true);

    btnOption.removeClass('active');
    optionDropdown.removeClass('open');
  });

  // checkbox
  groupCheckbox.each(function () {
    const that = $(this), $radioChild = that.find('.checkbox').not('.checkboxAll');
    const checkboxAll = $('.checkboxAll');

    $radioChild.change(function () {
      console.log(1);
      checkboxAll.prop('checked', false);
    });
  });

  // đóng filter $mobile
  btnClose.click(function () {
    colSidebar.removeClass('expand');
  });


  gridCol.each(function () {
    const $that = $(this);
    const productCate = $('.product__cate');
    const resetCol = $('.product__cate .reset-col');

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

const radio = () => {
  var $checkbox = $('.checkbox'),
    input = $checkbox.find('input[type="checkbox"]'),
    label = $checkbox.find('label');

  input.attr('id', function (i) {
    return 'ex' + i;
  });
  label.attr('for', function (i) {
    return 'ex' + i;
  });
}

const pageCart = () => {
  // dropdown
  var jsSelect = $('.js-select');

  jsSelect.each(function () {
    const $that = $(this);
    const $trigger = $('.js-trigger');

    const $triggerList = $('.js-trigger-list');
    const selectText = $('.custom-select-text');
    const optionItem = $that.find('.custom-options-item');

    var classExpand = 'expand';
    // console.log($that);

    function triggerClass($remove, $add, $classExpand) {
      $remove.removeClass($classExpand);
      $add.addClass($classExpand);
    }

    $trigger.click(function (e) {
      const _that = $(this), $parent = _that.closest(jsSelect);

      const isExpand = jsSelect.is(`.${classExpand}`);

      if (isExpand) {
        triggerClass(jsSelect, $parent, classExpand);
      } else {
        triggerClass(jsSelect, $parent, classExpand);
      }

    });

    optionItem.click(function () {
      const $that = $(this), selectData = $that.text(), parent = $that.closest('.js-select');
      const $selectText = $that.closest('.js-select').find('.custom-select-text');
      const cityFormGroup = $that.closest('.form-groups');

      parent.attr('data-city', 1);

      cityFormGroup.removeClass('invalid');

      $selectText.text(selectData);

      jsSelect.removeClass(classExpand);
    });
  });

  $(document).click(function (e) {
    const jsTrigger = $('.js-trigger');
    if (!jsTrigger.is(e.target) && jsTrigger.has(e.target).length === 0) {
      jsSelect.removeClass('expand');
    }
  });
}

//validate
const inputNumberPhone = $('input[name="phone"]');
// console.log(inputNumberPhone);

//check number phone
var phoneRegex = function (number) {
  var vnf_regex_10 = /([\+0]+(2|3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,

    vnf_regex_11 = /([\+84|84|0]+(2|3|5|7|8|9|1[2|6|8|9]))+([0-9]{9})\b/;

  if (parseInt(number.slice(0, 2)) === 02) {
    return vnf_regex_11.test(number);
  } else {
    return vnf_regex_10.test(number);
  }
}

const checkPhone = () => {
  const $value = inputNumberPhone.val();
  return phoneRegex($value);
}

// checkPhone();
const validateUser = () => {
  inputNumberPhone.on('keyup keydown', function () {
    const that = $(this), formGroup = that.closest('.form-groups'), err = formGroup.find('.form-error');

    const HA_NOI = 02;

    var valueInt = parseInt(that.val().slice(0, 2));

    valueInt === HA_NOI ? inputNumberPhone.attr('maxlength', '11') : inputNumberPhone.attr('maxlength', '10');

    if (/\D/g.test(that.val())) {
      this.value = this.value.replace(/\D/g, '');
    }

    if (!checkPhone() && that.val().length > 0) {
      formGroup.addClass('invalid');
      err.text('Số điện thoại không hợp lệ');
    } else {
      formGroup.removeClass('invalid');
      err.text('Thông tin bắt buộc');
    }

  });
}

const dropdownCity = () => {
  const jsSelect = $('.js-select');
  var flag = false;
  jsSelect.each(function () {
    const that = $(this), dataCity = that.attr('data-city');
    const cityFormGroup = that.closest('.form-groups');

    if (dataCity === "") {
      cityFormGroup.addClass('invalid');
      flag = true;
    } else {
      cityFormGroup.removeClass('invalid');
      flag = false;
    }
  });
  return flag;
}

const validateAddress = () => {

}

const submit = () => {
  const btnSubmit = $('.js-btn-submit');

  btnSubmit.click(function (e) {
    e.preventDefault();

    if (!checkPhone()) {
      inputNumberPhone.closest('.form-groups').addClass('invalid');
    }

    if (!checkPhone() || dropdownCity()) {
      return false;
    }

  });

}

const payments = () => {
    const jsPayment = $('.js-payment');

    jsPayment.click(function(e){
      e.preventDefault();

        const $that = $(this);

        jsPayment.removeClass('active');
        $that.addClass('active');
    });
}
const init = () => {
  featureHeader();
  pageHome();
  pageCate();
  detailPolicy();
  detailSwiper();
  radio();
  pageCart();
  validateUser();
  submit();
  payments();
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
          $that.removeClass('active');
          listDropdown.slideUp();

        } else {
          // btnExpand.removeClass('active');
          $that.addClass('active');
          // jsListDropdown.slideUp();
          listDropdown.slideDown();
        }

      });

    });
  }
});
