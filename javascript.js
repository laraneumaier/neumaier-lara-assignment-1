window.addEventListener("load", initScript);

function initScript(){
    zeigeSlides();
    kennwortPrufen (inhalt);
    popupBoxAnzeigen();
}

/* SLIDESHOW */

var slideIndex = 1; 
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
    // console.log(slides.length); --> 3 
    if (n > slides.length){ // wenn es nach dem Durchlauf großer als 3 ist, wird es wieder auf 1 gesetzt
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length; // man könnte hier auch einfach 3 schreiben (slides.length ist nur die schönere Variante), also wenn es kleiner ist als 1, dann beginne wieder von hinten
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; //nichts anzeigen
    }
    slides[slideIndex-1].style.display = "block"; //zeigen (-1 muss man schreiben da Arrays mit null anfangen, also 1-1=0)
} 

var inhalt = "";

function kennwortPrufen (inhalt){
    if (inhalt==="") { //strikte Gleichheit, Inhalt ist das leere value Feld
            document.getElementById("password").style.backgroundColor="white";
            document.getElementById("pinhalt").innerHTML="Registieren Sie sich noch heute und erhalten sie 10% Rabatt auf all usere Produkte";
    } 
    /* Ajax Aufruf */ 
    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreeadystatechange=function(){
        /* readyState --> 4 da, 4 done bedeutet siehe hier: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState";
        xmlhtt.status 200 da 200 dafür steht, dass alles ok ist.
        => kurz Anfrage war erfolgreich und ist erledigt */ 
        if(xmlhttp.readyState==4 && xmlhttp.status==200){ 
            document.getElementById("pinhalt").innerHTML = xmlhttp.responseText;
           /* document.getElementById("password").style.backgroundColor */
        }
    }
    

}

// nach 30 Sekunden Popup anzeigen
function popupBoxAnzeigen() {
  window.setTimeout(feedbackBogenEinblenden, 30000);
}

// Popup sichtbar machen und Scrollen verhindern
function feedbackBogenEinblenden(){
   document.getElementById("popup").style.visibility="visible"; 
   scrollenVerhinden();
}

/* Nimm die aktuelle Position und immer wenn man versucht zu scrollen, bleibt man an der Stelle, weil man schon durch die scrollTo wieder an diese Stelle geleitet wird*/
function scrollenVerhinden(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

/* Wenn diese Funktion aufgerufen wird (dies geschieht per klick auf den Button) kann man wieder scollen und das Popup-Element verschwindet */
function popupSchließen(){ 
    window.onscroll=function(){};
    document.getElementById("popup").style.visibility="hidden";
}