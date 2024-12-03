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



  // location
  

  // Elements
const adminBtn = document.getElementById('admin-btn');
const locationPopup = document.getElementById('location-popup');
const allowLocationBtn = document.getElementById('allow-location-btn');
const denyLocationBtn = document.getElementById('deny-location-btn');

// Event Listeners
adminBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent navigation
  locationPopup.style.display = 'flex'; // Show the location pop-up
});

// Allow Location
allowLocationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        alert(`Your Location: Latitude ${latitude}, Longitude ${longitude}`);
        locationPopup.style.display = 'none'; // Close the pop-up
      },
      (error) => {
        alert('Unable to fetch location. Please try again.');
        locationPopup.style.display = 'none'; // Close the pop-up
      }
    );
  } else {
    alert('Geolocation is not supported by your browser.');
    locationPopup.style.display = 'none'; // Close the pop-up
  }
});

// Deny Location
denyLocationBtn.addEventListener('click', () => {
  alert('Location access denied.');
  locationPopup.style.display = 'none'; // Close the pop-up
})
  