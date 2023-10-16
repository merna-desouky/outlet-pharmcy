function openNav() {
  document.getElementById("mySidenav").style.transform = "translateX( 0 )";
  document.body.style.overflow = "hidden";
  document.querySelector("html").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.transform = "translateX(100%)";
  document.body.style.overflow = "scroll";
  document.querySelector("html").style.overflow = "scroll";
}

var swiper = new Swiper(".blog-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
