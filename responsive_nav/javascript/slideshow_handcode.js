var index=1;
showSlide(index);
var slides=document.getElementsByClassName("mySlides");
function showSlide(index){
  slides.style.display="none";
  slides[index].style.display="block";
}
function nextSlide(direction){
  if (direction=="previous"){
    index--1;
  }
  else {
    index++1;
  }
  if (index<1) {
    index==slides.length;
  }
  if (index>slides.length) {
    index=1;
  }
}
