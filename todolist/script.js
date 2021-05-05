let slideIndex = 1;


function currentSlide(n) {
    showSlide(slideIndex = n);
  }
  
function showSlide(n){
let i;
let slides = document.getElementsByClassName("slide-image")
let dots = document.getElementsByClassName("dots");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

showSlide(slideIndex);

const dotnumber1 = document.querySelector("#dot1");
dotnumber1.onclick = () => {currentSlide(1)};

const dotnumber2 = document.querySelector("#dot2");
dotnumber2.onclick = () => {currentSlide(2)};

const dotnumber3 = document.querySelector("#dot3");
dotnumber3.onclick = () => {currentSlide(3)};



console.log(slideIndex)