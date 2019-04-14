function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

// carousel code
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

//sticky nav code
//make appear when scrolling up - add event listener
//disappear when scrolling down
//display none when scrolling down
var lastScroll=window.pageYOffset //Y position of element before scroll
window.addEventListener('scroll', stickNav, false);
function stickNav(e) {
  var navbar=document.getElementById("#topnav");
  var currentScroll=window.pageYOffset;
  if (lastScroll > currentScroll) {
    navbar.style.display="none";
  } else {
    navbar.style.display="flex";
  }
  lastScroll=currentScroll;
}
