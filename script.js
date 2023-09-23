gsap.to(
  "#nav svg",
  {
    scale: 0.1,
    y: -125,
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top 0",
      end: "top -3%",
      scrub: 2,
    },
  },
  "anim"
);

gsap.to(
  "#nav",
  {
    height: "80px",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top 0",
      end: "top -3%",
      scrub: 2,
    },
  },
  "anim"
);

var swiper = new Swiper(".mySwiper", {
  speed: 800,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
