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
  const btnSearch = $('.form-search .btn-form-search');
  const btnLogin = $('.js--login');

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

  if($mobile){
    btnSearch.click(function (e) {
      e.preventDefault();
        $('.search-suggest-box').addClass('open');
    })

    $('.btn-ic-close').click(function () {
      $('.search-suggest-box').removeClass('open');
    })
  }

  $document.click(function (e) {
    const elTarget = e.target;
    const isNavMobile = $navMobile.is(elTarget);

    if (isNavMobile) {
      $navMobile.removeClass('is-expand');
      $jsOpenNav.removeClass('is-open');
    }
  });


  //login
  btnLogin.click(function () {
    console.log(1231231)
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
  if($(window).width() > 992){
  var swiperThumb = new Swiper(".gallery__thumb .swiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperTop = new Swiper(".topbop__detail--slide", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumb,
    },
  });

  $('.gallery__thumbs .swiper-slide').click(function () {
    $('.js--pd-slider--thumbnail .swiper-slide').removeClass('active');
    $(this).addClass('active');

    var index = $(this).index();
    swiperTop.slideTo(index);
  });

  swiperTop.on('transitionEnd', function (e) {
    swiperThumb.slideTo(swiperTop.realIndex);
    var index = swiperTop.realIndex + 1;
    $('.gallery__thumbs .swiper-slide').removeClass('active');
    $('.gallery__thumbs .swiper-slide:nth-child(' + index + ')').addClass(
      'active'
    );
  });
  }
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
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });

  }
}


const pageHome = () => {
  // console.log("$desktop", $desktop);
  if ($desktop) {
    var swiper = new Swiper(".swiper-trending", {
      slidesPerView: "auto",
    speed: 1600,
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
    speed: 1600,
    waitForTransition: true,
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
        slidesPerGroup: 3,
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
    speed: 1600,
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

  const elWow = $('.wow');

  if(elWow.length){
    var wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true,
        delay: 5,
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,
        resetAnimation: true,
      }
    );
    // wow.init();
  }

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

  const jsFilter = $('.js-filter');

  const jsListItem = $('.js-list-item');
  const filterDropdown = $('.filter-dropdown');

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

  // sắp xếp
  // $radio.change(function (e) {
  //   e.preventDefault();

  //   const that = $(this);

  //   $radio.prop('checked', false);
  //   that.prop('checked', true);

  //   btnOption.removeClass('active');
  //   optionDropdown.removeClass('open');
  // });

  // checkbox
  groupCheckbox.each(function () {
    const that = $(this), $radioChild = that.find('.checkbox').not('.checkboxAll');
    const checkboxAll = $('.checkboxAll');

    $radioChild.change(function () {
      // console.log(1);
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


  jsFilter.click(function(){
    $('.option-dropdown').removeClass('open');
    filterDropdown.toggleClass('open');
  });

  jsListItem.click(function(){
    const $that = $(this), $content = $that.find('.filter-dropdown-content'), $html = $content.html();
    jsFilter.html($html).addClass('active');

    jsListItem.removeClass('active');

    $that.addClass('active');

    filterDropdown.removeClass('open');
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

      triggerClass(optionItem, $(this), 'active');

      parent.find('.option-data').attr('data-value', $that.attr('data-value'))
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
const inputUserName = $('input[name="username"]');
const inputPhone = $('input[name="phone"]');

// console.log("inputUserName", inputUserName);
function checkNameNotNumber(value) {
  var regexName = /\d+/g;
  return regexName.test(value);
}

function isValidCharacter(text) {
  const validCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return validCharacterRegex.test(text);
}

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

const checkUsername = ($username) => {
  const $value = $username.val().trim(),
    $valueLength = $value.length > 0;

  if ((checkNameNotNumber($value) || isValidCharacter($value)) && $valueLength) {
    return true;
  }
  return false;
}

const checkAddClassInvalid = () => {

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
      err.text('Error message here');
    } else {
      formGroup.removeClass('invalid');
      // err.text('Error message here');
    }

  });

  inputUserName.on('keyup keydown', function () {
    const $value = inputUserName.val().trim(),
      $valueLength = $value.length > 0;

    if ((checkNameNotNumber($value) || isValidCharacter($value)) && $valueLength) {
      inputUserName.closest('.form-groups').addClass('invalid');
      // return true;
    } else {
      inputUserName.closest('.form-groups').removeClass('invalid');
    }
  })
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

    // checkAddClassInvalid();
  });

}

const payments = () => {
  const jsPayment = $('.js-payment');

  jsPayment.click(function (e) {
    // e.preventDefault();
    const $that = $(this), radio = $that.next('input[type="radio"]');

    jsPayment.removeClass('active');
    $that.addClass('active');

    $('.js-payment + input[type="radio"]').prop('checked', false).removeAttr('checked');
    radio.prop('checked', true).attr('checked', true);

    if(radio.attr('bank-transfer') === "true"){
      $('.box-desc-bank').show();
    }else{
      $('.box-desc-bank').hide();
    }
  });
}

$document.on('click',function(e){
  const innerFilter = $('.inner-filter'), $target = e.target;
  const filterDropdown = $('.filter-dropdown');

  if(!$('.option-item, .radio, .radio input[type="radio"]').is($target) && $('.option-item, .radio, .radio input[type="radio"]').has($target).length === 0){
    // $('.filter-dropdown, .option-dropdown').removeClass('opsen')
  }

});

const fnDropdown = () => {
  let optionWrap = $('.option');
  optionWrap.each(function (index,item) {

    let that = $(this),
        optionBtn = that.find('.option-button'),
        optionItem = that.find('.option-item'),
        optionLabel = that.find('.option-label'),
        radio = that.find('.radio input[type="radio"]');

    let filterDropdown = $('.filter-dropdown');

    optionBtn.click(function (params) {
      const that = $(this),
      parent = that.closest('.option'), optionDropdown = parent.find('.option-dropdown');
      that.toggleClass('active');

      optionDropdown.toggleClass('open');
      // filterDropdown.removeClass('open');
    });

    optionItem.click(function () {
      let that = $(this), contextItem = that.children('.radio').text().trim();
      optionLabel.text(contextItem);
    })

    radio.change(function (e) {
      e.preventDefault();

      let that = $(this),
      parent = that.closest('.option'),
      btnOption = parent.find('.option-button'),
      optionDropdown = parent.find('.option-dropdown'), childrenRadio  = parent.find('.radio input[type="radio"]');

      childrenRadio.prop('checked', false);
      that.prop('checked', true);

      btnOption.removeClass('active');
      optionDropdown.removeClass('open');
    });
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
  fnDropdown();
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


function addPopup(){
    const btnPopupClose = $('.popup-close');

    btnPopupClose.click(function () {
      $('.popup, .over-suggest').removeClass('open');
    });
}
addPopup();

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
