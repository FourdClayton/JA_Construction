var slideIndex = 0;
showSlides(); // Initial call to start automatic slideshow

// Function to start automatic slideshow
function showSlides() {
  var i, j;
  var slides = document.getElementsByClassName("mySlides");
  var slides2 = document.getElementsByClassName("projectSlides");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";  
  }
  
  // Move to the next slide
  slideIndex++;
  
  // Reset to the first slide if reached the end
  if (slideIndex > slides.length) {slideIndex = 1}

  if (slideIndex > slides2.length) {slideIndex = 1} 
  
  // Display the current slide
  slides[slideIndex-1].style.display = "block"; 
  
  slides2[slideIndex-1].style.display = "block";
  
  // Change slide every 4 seconds (4000 milliseconds)
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Function to navigate to previous or next slide
function plusSlides(n) {
  clearTimeout(); // Clear the timeout to stop automatic sliding when manually navigating
  slideIndex += n;
  showSlides();
}
function minusSlides(n) {
  clearTimeout(); // Clear the timeout to stop automatic sliding when manually navigating
  slideIndex -= n;
  showSlides();
}