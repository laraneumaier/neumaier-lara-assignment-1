/*window.addEventListener ("load", function(){
        // kontrolliert vor und zurück von den button, die funktion wird von den Bilderbuttons aufgerufen
        function plusSlides(n) {
            zeigeSlides(slideIndex +=n);
        }
        // der momentante Slide ist der, der gezeigt wird und slideindex wird n zugewiesen 
        function momentanerSlide (n){
         zeigeSlides(slideIndex = n);
        }  
    var slideIndex = 1;
    zeigeSlides(slideIndex); 
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
   
  
    document.getElementsByClassName("zurueck").addEventListener("click", plusSlides(+1));
    var vorButton = document.getElementsByClassName("vor");
    vorButton.addEventListener ("click", plusSlides(-1));
},false);*/

var slideIndex = 1;
zeigeSlides(slideIndex); //damit am anfang direkt ein Bild angezeigt wird, muss man direkt sagen: zeige einen Slide und der Slide index wäre hier 0 laso das erste Bild 

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
    if (n > slides.length){ // wenn es nach dem Durchlauf großer als 1 ist, wird es wieder auf 1 gesetzt
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length; // man könnte hier auch einfach 3 schreiben (slides.length ist nur die schönere Variante), also wenn es kleiner ist als 1, dann beginne wieder von hinten
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; //nichts anzeigen
    }
    slides[slideIndex-1].style.display = "block"; //zeigen
} 

