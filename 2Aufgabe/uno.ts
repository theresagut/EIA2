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
        
          if

            else if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {
                    c = "#000000";
                    s2--;
                    placeDiv(c, "F", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    let r = random(4); //random Zahl von 0-3 jeweils eine Farbe
                    switch (r) {
                        case 0:
                            c = "#ff0000"; //rot
                            if (AlleKarten[l].rot > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].rot--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 1:
                            c = "#00ff00"; //gr�n
                            if (AlleKarten[l].gruen > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].gruen--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 2:
                            c = "#0000ff"; //blau
                            if (AlleKarten[l].blau > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].blau--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 3:
                            c = "#ffff00"; //gelb
                            if (AlleKarten[l].gelb > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].gelb--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
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
      /*  function Ablage() {
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
    */
        for (let i = 0; i < 3; i++) {
            Stapel(i);
        }
        Ablage();
    }
    document.addEventListener('DOMContentLoaded', main);
(uno || (uno = {}));
    