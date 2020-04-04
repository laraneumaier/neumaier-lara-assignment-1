window.addEventListener("load", initScript);

function initScript(){
    zeigeSlides();
    kennwortPrufen (inhalt);
    popupBoxAnzeigen();
    canvasGesichtsauer();
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

/* Passwort prüfen mit Ajax */

var inhalt = "";
function kennwortPrufen (inhalt){
    if (inhalt==="" && window.XMLHttpRequest) { //strikte Gleichheit, Inhalt ist das leere value Feld
            document.getElementById("password").style.backgroundColor="white";
            document.getElementById("pinhalt").innerHTML="Registieren Sie sich noch heute und erhalten sie 10% Rabatt auf all usere Produkte";
            xmlhttp = new XMLHttpRequest();
    } 
    /* Ajax Aufruf */ 
    
    xmlhttp.onreeadystatechange=function(){
        /* readyState --> 4 da, 4 done bedeutet siehe hier: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState";
        xmlhtt.status 200 da 200 dafür steht, dass alles ok ist.
        => kurz Anfrage war erfolgreich und ist erledigt */ 
        if(xmlhttp.readyState==4 && xmlhttp.status==200){ 
            document.getElementById("pinhalt").innerHTML = xmlhttp.responseText;
           /* document.getElementById("password").style.backgroundColor */
        }
    }
    xmlhttp.open("get","kennwort.php?q",inhalt,true)
    xmlhttp.send();
}

/* Canvas */ 

function canvasGesichtLacheln(){
    let canvas = document.getElementById("canvas");
    let contextLinie = canvas.getContext("2d");
    contextLinie.strokeStyle = "#8EBEAE";
    contextLinie.fillStyle ="#8EBEAE";
    // Kreis
    contextLinie.beginPath();
    contextLinie.arc(30,30,25,0,2*Math.PI); //arc( x, y, r, Startwinkel, Endwinkel)
    // Mund
    contextLinie.moveTo(15,33);
    contextLinie.lineTo(45,33);
    contextLinie.arc(30, 33,15, 0, Math.PI,false); // Mittelpunkt von beiden Augen, und differenz ist der Radius
    
    contextLinie.stroke(); //ausmalen 
    // Augen 
    contextLinie.beginPath();
    contextLinie.arc(20,22,3,0,2*Math.PI);
    contextLinie.arc(40,22,3,0,2*Math.PI);
    contextLinie.fill();
}

function canvasGesichtsauer (){
    let canvas = document.getElementById("canvas");
    let contextLinie = canvas.getContext("2d");
    contextLinie.strokeStyle = "#B22222";
    contextLinie.fillStyle ="#B22222";
    // Kreis
    contextLinie.beginPath();
    contextLinie.arc(30,30,25,0,2*Math.PI); //arc( x, y, r, Startwinkel, Endwinkel)
    // Augenbrauen
    contextLinie.moveTo(17,20);
    contextLinie.lineTo(25,24);
    contextLinie.moveTo(43,20);
    contextLinie.lineTo(35,24);
    contextLinie.stroke();
    // Augen 
    contextLinie.beginPath(); // hier neuer Pfad anfangen, damit die anderen Elemente wie der Kreis nicht eingefärbt werden 
    contextLinie.arc(20,27,3,0,2*Math.PI);
    contextLinie.arc(40,27,3,0,2*Math.PI);
    contextLinie.fill();
    //Mund 
    contextLinie.beginPath ();
    contextLinie.arc(30,43,8, 0, Math.PI,true); // mit true und false drehen
    contextLinie.fill();

    contextLinie.beginPath();
    contextLinie.fillStyle="white";
    contextLinie.arc(30,45,7,0, Math.PI,true);
    contextLinie.fill();

}

/* Popupbox */

function popupBoxAnzeigen() {
  window.setTimeout(feedbackBogenEinblenden, 30000); // nach 30 Sekunden Popup anzeigen
}

// Popup sichtbar machen und Scrollen verhindern
function feedbackBogenEinblenden(){
   document.getElementById("popup").style.visibility="visible"; 
   scrollenVerhinden();
}

/* Nimm die aktuelle Position und immer wenn man versucht zu scrollen, bleibt man an der Stelle, weil man schon durch die scrollTo wieder an diese Stelle geleitet wird*/
function scrollenVerhinden(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

/* Wenn diese Funktion aufgerufen wird (dies geschieht per klick auf den Button) kann man wieder scollen und das Popup-Element verschwindet */
function popupSchließen(){ 
    window.onscroll= function(){
        fixNavigation();
    };
    document.getElementById("popup").style.visibility="hidden";
}

/* Sticky Navbar */
//top of Nav herausfinden, da der grüne Balken oben drüber ist
function fixNavigation (){
   let navigation = document.getElementById("header");
    if (window.pageYOffset >= 40) {
        navigation.classList.add("sticky");
        } else {
       navigation.classList.remove("sticky");
    }
}
