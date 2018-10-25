/* Aufgabe: Aufgabe 2;
Name: Theresa Josephine Gut;
Matrikel: 259110
Datum: 21.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace uno {
    
    interface karten {
        name: string;
        rot: number;
        gelb: number;
        gruen: number;
        blau: number;
        black: number;
        }
        
    let k0 = {
        name: "0",
        rot: 1,
        gelb: 1,
        gruen: 1,
        blau: 1,
        black: 0,
    };
    let k1 = {
        name: "1",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k2 = {
        name: "2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k3 = {
        name: "3",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k4 = {
        name: "4",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k5 = {
        name: "5",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k6 = {
        name: "6",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k7 = {
        name: "7",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k8 = {
        name: "8",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k9 = {
        name: "9",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k10 = {
        name: "R",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k11 = {
        name: "+2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k12 = {
        name: "A",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
        black: 0,
    };
    let k13 = {
        name: "S",
        rot: 0,
        gelb: 0,
        gruen: 0,
        blau: 0,
        black: 4,
    };
    let k14 = {
        name: "4+",
        rot: 0,
        gelb: 0,
        gruen: 0,
        blau: 0,
        black: 4,
    };
    
    let c = ""; //Farbcode
    let deck : karten = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14]; //Array
    
    /*  Funktion für Random */
    function random (n: number) {
        return Math.floor(Math.random() * Math.floor(n));
    }
   /* function placeDiv(_color: string, n: number, _x:number) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x); 
        document.getElementById("a" + _x).innerHTML += n;
    
        let s = div.style;
        s.border = "solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 50 + "px";
        s.height = 130 + "px";
        s.left = (_x + 0.5) * 100 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 5 + "px";
        
        if (_color == "#000000") {
            s.color = "white";
        }
        if (_color == "#0000ff") {
            s.color = "white";
        }
    }*/
   
    /* prompt function*/
    function main() {
        let z : number;
        let i: string = prompt("Wie viele Karten möchtest du haben?");
        z = Number(i);
        
           for (let o: number = 0; o < x; o++) { // Wie viele Karten zum Spielen 
            let u: number = randomKarte(15); // zufällige Auswahl der Karten 
            let t: number = randomKarte(5); //Zufallsgenerator für Ermittlung der Farben

            
            switch (t) {
                case 0:
                    colour = "#ff1111";
                    if (deck[u].red > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].red--;
                        continue;
                    }
                case 1:
                    colour = "#ffee55";
                    if (cardscomplete[u].yellow > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].yellow--;
                        continue;
                    }

                case 2:
                    colour = "#22aadd";
                    if (cardscomplete[u].blue > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].blue--;
                        continue;
                    }

                case 3:
                    colour = "#11aa11"
                    if (cardscomplete[u].green > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].green--;
                        continue;

                    }

                case 4:
                    colour = "black";
                    if (cardscomplete[u].black > 0) {
                        placeDiv(colour, cardscomplete[u].name, o);
                        cardscomplete[u].black--;
                        continue;
                    }

                    else {
                        o--;
                        continue
                    }

            }

        }

        /*function Stapel (Karte) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            let s = div.style;
            s.border = "solid black";
            s.position = "absolute";
            s.backgroundColor = "#f0f0f0";
            s.width = 90 + "px";
            s.height = 150 + "px";
            s.left = (Karte + 0.5) * 20 + "px";
            s.top = (Karte + 0.5) * 10 + "px";
            s.borderRadius = 5 + "px";
        }
    */
       function Ablage() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#F2EFFB";
            s.width = 90 + "px";
            s.height = 200 + "px";
            s.right = 60 + "px";
            s.top = 20 + "px";
        }
    
     
        AblageStapel();
        Nachziehbereich();
        //Aufruf der Funktionen
    }

    document.addEventListener("DOMContentLoaded", (UNO));
}
