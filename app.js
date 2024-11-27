<<<<<<< HEAD
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

// search bar working
window.onscroll=()=>{
  menu.classList.remove("fa-times")
  nav.classList.remove('active');
}

document.querySelector(".fa-magnifying-glass").onclick=()=>{
  document.querySelector("#search-form").classList.toggle('active');
}

document.querySelector("#close").onclick=()=>{
  document.querySelector("#search-form").classList.remove('active');
}
=======
document.addEventListener('DOMContentLoaded', () => {
    // Utility function to show and hide pop-ups
    const showPopup = (popupId) => {
      const popup = document.getElementById(popupId);
      if (popup) popup.style.display = 'flex';
    };
  
    const hidePopup = (popupId) => {
      const popup = document.getElementById(popupId);
      if (popup) popup.style.display = 'none';
    };
  
    // Main Pop-Up
    const mainPopup = document.getElementById('main-popup');
    document.getElementById('open-main-popup').addEventListener('click', () => showPopup('main-popup'));
    document.getElementById('close-main-popup').addEventListener('click', () => hidePopup('main-popup'));
  
    // User Pop-Up
    const userPopup = document.getElementById('user-popup');
    document.getElementById('user-btn').addEventListener('click', () => {
      hidePopup('main-popup'); // Close Main Pop-Up
      showPopup('user-popup'); // Open User Pop-Up
    });
    document.getElementById('close-user-popup').addEventListener('click', () => hidePopup('user-popup'));
  
    // Create Account Pop-Up
    document.getElementById('create-account-link').addEventListener('click', (e) => {
      e.preventDefault();
      hidePopup('user-popup'); // Close User Pop-Up
      showPopup('create-account-popup'); // Open Create Account Pop-Up
    });
    document.getElementById('close-create-account-popup').addEventListener('click', () => hidePopup('create-account-popup'));
  
    // Admin Pop-Up
    const adminPopup = document.getElementById('admin-popup');
    document.getElementById('admin-btn').addEventListener('click', () => {
      hidePopup('main-popup'); // Close Main Pop-Up
      showPopup('admin-popup'); // Open Admin Pop-Up
    });
    document.getElementById('close-admin-popup').addEventListener('click', () => hidePopup('admin-popup'));
  
    // Social Pop-Up
    document.getElementById('try-another-way-btn').addEventListener('click', () => {
      hidePopup('user-popup'); // Close User Pop-Up
      showPopup('social-popup'); // Open Social Pop-Up
    });
    document.getElementById('close-social-popup').addEventListener('click', () => hidePopup('social-popup'));
  
    // Google Email Selection Pop-Up
    document.querySelector('.btn-social.google').addEventListener('click', () => {
      hidePopup('social-popup'); // Close Social Pop-Up
      showPopup('google-popup'); // Open Google Pop-Up
    });
    document.getElementById('close-google-popup').addEventListener('click', () => hidePopup('google-popup'));
  
    // Facebook Sign-In Pop-Up
    document.querySelector('.btn-social-facebook').addEventListener('click', () => {
      hidePopup('social-popup'); // Close Social Pop-Up
      showPopup('facebook-popup'); // Open Facebook Pop-Up
    });
    document.getElementById('close-facebook-popup').addEventListener('click', () => hidePopup('facebook-popup'));
  
    // Reset Password Pop-Up
    document.getElementById('forget-password-link').addEventListener('click', (e) => {
      e.preventDefault();
      hidePopup('user-popup'); // Close User Pop-Up
      showPopup('reset-password-popup'); // Open Reset Password Pop-Up
    });
    document.getElementById('close-reset-password-popup').addEventListener('click', () => hidePopup('reset-password-popup'));
  
    // Success Pop-Up
    const signUpForm = document.getElementById('sign-up-form');
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission
      alert('Sign-Up Successful!'); // Add alert
      hidePopup('user-popup'); // Close User Pop-Up
      showPopup('success-popup'); // Show Success Pop-Up
    });
    document.getElementById('close-success-popup').addEventListener('click', () => hidePopup('success-popup'));
  
    // Success Pop-Up for Create Account
    const createAccountForm = document.getElementById('new-account-form');
    createAccountForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission
      alert('Account created successfully!'); // Add alert
      hidePopup('create-account-popup'); // Close Create Account Pop-Up
      showPopup('success-create-popup'); // Show Create Account Success Pop-Up
    });
    document.getElementById('close-success-create-popup').addEventListener('click', () => hidePopup('success-create-popup'));
  });
  
>>>>>>> f00636b435d4a1ef51d71b73ea5b31b000df9206
