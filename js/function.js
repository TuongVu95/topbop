const slideBestSellar = () => {
    const groupItem = 5;
    var swiper = new Swiper(".jsBestseller", {
      spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          320: {
            slidesPerView: parseInt(groupItem - 3),
            slidesPerGroup: parseInt(groupItem - 3),
          },
          768: {
            slidesPerView: groupItem,
            slidesPerGroup: groupItem,

          },
        },
      });
}
const init = () => {
    slideBestSellar();
}
init();