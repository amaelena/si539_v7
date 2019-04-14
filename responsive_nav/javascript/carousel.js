var index = 1;
var i = 1;
showSlide(index); //show the current slide

// Next/previous controls
function nextSlide(n) {
  showSlide(index += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlide(index = n);
}

function showSlide(n) {
  // var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (n = 0; n < slides.length; n++) {
      slides[n].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}
