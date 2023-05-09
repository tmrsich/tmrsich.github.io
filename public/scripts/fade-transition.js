// Wait for the page to finish loading
window.addEventListener("load", function() {
  
  // Get all elements with class "fade"
  const fadeElements = document.getElementsByClassName("fade");

  // Gets all elements with class "fade-image"
  const fadeImageElements = document.getElementsByClassName("fade-image");
  
  // Add the class "fade-in" to each element
  for (let i = 0; i < fadeElements.length; i++) {
    fadeElements[i].classList.add("fade-in");
  }

  // Adds the class "fade-in-image" to each element
  for (let i = 0; i < fadeImageElements.length; i++) {
    fadeImageElements[i].classList.add("fade-in-image");
  }
});