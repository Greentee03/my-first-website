var load = document;
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
var Home_body = document.body.classList.contains("Home");
var Besprechungsraum1_body = document.body.classList.contains("Besprechungsraum1");
var Besprechungsraum2_body = document.body.classList.contains("Besprechungsraum2");
var Buero_body = document.body.classList.contains("Buero");
var Produktionshalle_body = document.body.classList.contains("Produktionshalle");
var Sichtbarkeit_info = document.getElementById("invis")


function Sichtbarkeit(){
    if (document.getElementById("Info").style.visibility == "hidden"){
        document.getElementById("Info").style.visibility = "visible";
    }else
    document.getElementById("Info").style.visibility = "hidden";
}

function getdata_Home() {
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
            if (raum === "Besprechungsraum1" && anzahl_p == 1 && (Home_body || Besprechungsraum1_body)  ){
                Bereich = Besprechungsraum1_P1;
                // console.log("P1")
            }
            else if (raum === "Besprechungsraum1" && anzahl_p == 2 && (Home_body || Besprechungsraum1_body)){
                Bereich = Besprechungsraum1_P2;
            }
            else if (raum === "Besprechungsraum1" && anzahl_p == 3 && (Home_body || Besprechungsraum1_body)){
                Bereich = Besprechungsraum1_P3;
                }    
            else if (raum === "Besprechungsraum2" && anzahl_p == 1 && (Home_body || Besprechungsraum2_body)){
            Bereich = Besprechungsraum2_P1;
            }
            else if (raum === "Besprechungsraum2" && anzahl_p == 2 && (Home_body || Besprechungsraum2_body)){
                Bereich = Besprechungsraum2_P2;
            }
            else if (raum === "Besprechungsraum2" && anzahl_p == 3 && (Home_body || Besprechungsraum2_body)){
                Bereich = Besprechungsraum2_P3;
            }
            else if (raum === "Büro" && anzahl_p == 1 && (Home_body || Buero_body)){
                Bereich = Buero_P1;
            }
            else if (raum === "Büro" && anzahl_p == 2 && (Home_body || Buero_body)){
                Bereich = Buero_P2;
            }
            else if (raum === "Büro" && anzahl_p == 3 && (Home_body || Buero_body)){
                Bereich = Buero_P3;
            }
            else if (raum === "Produktionshalle" && anzahl_p == 1 && (Home_body || Produktionshalle_body)){
                Bereich = Produktionshalle_P1;            
            }    
            else if (raum === "Produktionshalle" && anzahl_p == 2 && (Home_body || Produktionshalle_body)){
                Bereich = Produktionshalle_P2;
            }
            else if (raum === "Produktionshalle" && anzahl_p == 3 && (Home_body || Produktionshalle_body)){
                Bereich = Produktionshalle_P3;
            }
            else{
                Bereich = "0";
            }

            anzahl_p + 1; 

          if (Bereich != "0"){
                Bereich.innerHTML = Name +  "<br>Abteilung: " + JSONobj[raum][Name].abteilung +
                                    "<br>Arbeitsbeginn: " + JSONobj[raum][Name].arbeitsBeginn +
                                    "<br>Geburtsdatum: " + JSONobj[raum][Name].geburtsdatum ;
                                }

                                
                // console.log(Bereich)
                // console.log(Name)
            };
            
           
        };
    });
    serverKommunikation.open("GET", "https://atp.fhstp.ac.at/locationInformation");
    serverKommunikation.send();
};

Sichtbarkeit_info.onclick = function() {Sichtbarkeit();}
getdata_Home();

setInterval(function(){getdata_Home()}, 2000); 
