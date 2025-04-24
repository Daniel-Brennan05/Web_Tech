// Typewriter effect 
document.addEventListener("DOMContentLoaded", function () {
  const text = "Put your knowledge to the test...";
  const speed = 60;
  let i = 0;
  function typeWriter() {
    const t = document.getElementById("typewriter");
    if (!t) return;
    if (i < text.length) {
      t.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});

// --- Slideshow  ---
document.addEventListener("DOMContentLoaded", function () {
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
      dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
  }

  // Next/previous controls
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  if (prev && next) {
    prev.onclick = () => plusSlides(-1);
    next.onclick = () => plusSlides(1);
  }

  // Dot controls
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => currentSlide(i + 1);
  }
});