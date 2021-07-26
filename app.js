var slideno = 1;
showslide(slideno);

function plusSlides(n) {
    showslide(slideno += n);
}

function currentSlide(n) {
    showslide(slideno = n);
}

for (i = 1; i <= 100; ++i) {
    setTimeout(()=>{slideno++; showslide(slideno);}, 5000*i);
}

function showslide(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n>slides.length) {slideno = 1}
    if (n<1){slideno = slides.length}
    for(i=0;i<slides.length;i++) {
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++) {
        dots[i].className="dot";
    }
    slides[slideno-1].style.display="block";
    dots[slideno-1].className+=" active";
}