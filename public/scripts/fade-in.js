// Wait for the page to finish loading
window.addEventListener("load", function() {
  
  // Get all elements with class "fade"
  const elements = document.getElementsByClassName("fade");
  
  // Add the class "fade-in" to each element
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("fade-in");
  }
});