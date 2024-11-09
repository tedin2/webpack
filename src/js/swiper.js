if (window.innerWidth < 768) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
// const swiper = new Swiper('.mySwiper', {
//   width: 240,
//   height: 72,
//   loop: false,
//   slidesPerView: 'auto',
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination'
//   },
//   breakpoints: {
//     768: {
//       toggle: false,
//       loop: false,
//       spaceBetween: 'auto',
//       slidesPerView: 'auto',
//       centeredSlides: false
//     }
//   }
// })
