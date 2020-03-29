var slideIndex = 1;
zeigeSlides(slideIndex); 

// kontrolliert vor und zurück von den button, die funktion wird von den Bilderbuttons aufgerufen
function plusSlides(n) {
  zeigeSlides(slideIndex +=n);
}

// der momentante Slide ist der, der gezeigt wird und slideindex wird n zugewiesen 
function momentanerSlide (n){
    zeigeSlides(slideIndex = n);
}

function zeigeSlides(n){
    let i;
    let slides = new Array;
    slides = document.getElementsByClassName("slides");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slide.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Kommenatar um git zu testen
