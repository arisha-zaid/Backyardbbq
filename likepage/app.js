// Preloader logic
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    window.onload = () => {
        preloader.style.display = "none"; // Hide the preloader
    };
});

// Function to handle "like" button clicks
function removeItem(button) {
    // Create a pop-up element
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "Hey! You liked the item!";
    
    // Append the pop-up to the body
    document.body.appendChild(popup);
    
    // Add a fade-out animation
    setTimeout(() => {
        popup.style.transition = "opacity 0.5s";
        popup.style.opacity = "0";
        setTimeout(() => popup.remove(), 500); // Remove the pop-up after fading out
    }, 2000); // Display for 2 secon
}