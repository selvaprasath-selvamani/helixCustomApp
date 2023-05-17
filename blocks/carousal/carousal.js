

export default function decorate(block) {
  block.classList.add(`slideshow-container`);
  [...block.children].forEach((row) => {    
    row.classList.add(`mySlides`, `fade`);
    
  });
  [...block.children].forEach((row) => {
    const dot = document.createElement("div");
    dot.classList.add( `dot`);
    row.append(dot);
  });
    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    let slideIndex = 0;
    showSlides()
}



