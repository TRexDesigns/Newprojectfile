console.log("Hello from app.js");


//JAVA FOR NEW POTION SLIDESHOW-->

//END OF NEW POTION SLIDESHOW GALLERY


//NEW ACCORDION
// Get all the accordion buttons
var accordions = document.getElementsByClassName("accordion");

// Loop through them and add event listeners
for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    // Toggle active class to highlight the clicked button
    this.classList.toggle("active");
    
    // Toggle panel visibility
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
//END OF NEW ACCORDION






//slideshow js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}
//end of slideshow js//






/*Affirmations____Accordion and Lightbox*/



/*Affirmation end*/

