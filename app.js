console.log("Hello from app.js");


//JAVA FOR NEW POTION SLIDESHOW-->

//END OF NEW POTION SLIDESHOW GALLERY










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

//accordion//

function myAccordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(
        "w3-brown",
        "w3-2021-raspberry-sorbet"
      );
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(
        "w3-2021-raspberry-sorbet",
        "w3-brown"
      );
  }
}


/*Affirmation end*/

