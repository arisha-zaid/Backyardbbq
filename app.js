let menu=document.querySelector('.menu-bars');
let nav=document.querySelector('.nav-bar');
menu.onclick=()=>{
    console.log("add");
    nav.classList.toggle('view');
}

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
