let menu=document.querySelector('.menu-bars');
let nav=document.querySelector('.nav-bar');
menu.onclick=()=>{
    console.log("add");
    nav.classList.toggle('view');
}
// home page slides
var swiper = new Swiper(".home-section", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });

//offer cards slide
  var swiper = new Swiper(".offer-zone", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // food card page slides
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 loop:true,
});

// stars   fa-regular---->fa-solid
const star=document.querySelectorAll('fa-regular','fa-star');
star.onclick=()=>{
  console.log(" clicked!");
}