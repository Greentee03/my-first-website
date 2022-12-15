var load = document;
var invert = document.getElementById("invertcolor");
var maindiv = document.getElementById("maindiv");
var body = document.getElementById("body");
var links = document.getElementsByTagName("a");
var JSONobj = [];
var Besprechungsraum1_P1 = document.getElementById("Besprechungsraum1_P1");
var Besprechungsraum1_P2 = document.getElementById("Besprechungsraum1_P2");
var Besprechungsraum1_P3 = document.getElementById("Besprechungsraum1_P3");
var Besprechungsraum2_P1 = document.getElementById("Besprechungsraum2_P1");
var Besprechungsraum2_P2 = document.getElementById("Besprechungsraum2_P2");
var Besprechungsraum2_P3 = document.getElementById("Besprechungsraum2_P3");
var Buero_P1 = document.getElementById("Buero_P1");
var Buero_P2 = document.getElementById("Buero_P2");
var Buero_P3 = document.getElementById("Buero_P3");
var Produktionshalle_P1 = document.getElementById("Produktionshalle_P1");
var Produktionshalle_P2 = document.getElementById("Produktionshalle_P2");
var Produktionshalle_P3 = document.getElementById("Produktionshalle_P3");


function getdata() {
    var serverKommunikation = new XMLHttpRequest();
    serverKommunikation.addEventListener("load", function () {
        JSONobj = JSON.parse(this.responseText);
        console.log(JSON.parse(this.responseText))
        for (var raum in JSONobj) {
            var Bereich;           
            var anzahl_p = 0;
            for (var person in JSONobj[raum]) {
                var Name; 
                Name=person; 
                anzahl_p += 1; 
            if (raum === "Besprechungsraum1" && anzahl_p == 1){
                Bereich = Besprechungsraum1_P1;
                // console.log("P1")
            }
            else if (raum === "Besprechungsraum1" && anzahl_p == 2){
                Bereich = Besprechungsraum1_P2;
            }
            else if (raum === "Besprechungsraum1" && anzahl_p == 3){
                Bereich = Besprechungsraum1_P3;
                }    
            else if (raum === "Besprechungsraum2" && anzahl_p == 1){
            Bereich = Besprechungsraum2_P1;
            }
            else if (raum === "Besprechungsraum2" && anzahl_p == 2){
                Bereich = Besprechungsraum2_P2;
            }
            else if (raum === "Besprechungsraum2" && anzahl_p == 3){
                Bereich = Besprechungsraum2_P3;
            }
            else if (raum === "Büro" && anzahl_p == 1){
                Bereich = Buero_P1;
            }
            else if (raum === "Büro" && anzahl_p == 2){
                Bereich = Buero_P2;
            }
            else if (raum === "Büro" && anzahl_p == 3){
                Bereich = Buero_P3;
            }
            else if (raum === "Produktionshalle" && anzahl_p == 1){
                Bereich = Produktionshalle_P1;            
            }    
            else if (raum === "Produktionshalle" && anzahl_p == 2){
                Bereich = Produktionshalle_P2;
            }
            else if (raum === "Produktionshalle" && anzahl_p == 3){
                Bereich = Produktionshalle_P3;
            }

            anzahl_p + 1; 

          
                Bereich.innerHTML = Name +  "<br>Abteilung: " + JSONobj[raum][Name].abteilung +
                                    "<br>arbeitsBeginn: " + JSONobj[raum][Name].arbeitsBeginn +
                                    "<br>geburtsdatum: " + JSONobj[raum][Name].geburtsdatum ;
            

                                
                // console.log(Bereich)
                // console.log(Name)
            };
            
           
        };
    });
    serverKommunikation.open("GET", "https://atp.fhstp.ac.at/locationInformation");
    serverKommunikation.send();
};
load.onload = getdata();
invert.onclick = function() {invertColor();};
setInterval(function(){getdata()}, 2000); 