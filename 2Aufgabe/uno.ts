/* Aufgabe: Aufgabe 2;
Name: Theresa Josephine Gut;
Matrikel: 259110
Datum: 21.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

/* Ehrlich gesagt sehr viel hilfe aus Nico Hermanns Code genommen. Habe trotzdem versucht einen eigenen Code zu schreiben.*/
namespace uno {
var uno;
(function (uno) {
    var k0 = {
        name: "0",
        rot: 1,
        gelb: 1,
        gruen: 1,
        blau: 1,
    };
    var k1 = {
        name: "1",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k2 = {
        name: "2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k3 = {
        name: "3",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k4 = {
        name: "4",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k5 = {
        name: "5",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k6 = {
        name: "6",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k7 = {
        name: "7",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k8 = {
        name: "8",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k9 = {
        name: "9",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k10 = {
        name: "R",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k11 = {
        name: "+2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var k12 = {
        name: "A",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var s1 = 4; //+4 Karten und Farbwahl
    var s2 = 4; //Farbwahl
    var c = ""; //Farbcode
    var AlleKarten = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12]; //Array
    /*   FUNKTIONEN           */
    function random(Nummer) {
        return Math.floor(Math.random() * Math.floor(Karte));
    }
    function placeDiv(_color, Nummer, _x) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x); 
        document.getElementById("a" + _x).innerHTML += Nummer;
    
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
    }
    /*   FUNKTIONEN ENDE  */
    /* prompt function*/
    function main() {
        let z;
        let i = prompt("Wie viele Karten möchtest du haben pro Spieler?");
        z = Number(i);
        for (let d = 0; d < z; d++) {
            let l = random(15); //l = Zufallswert von 0-14 (alle Karten)
            if (l == 13 && s1 > 0) {
                c = "#000000";
                s1--;
                placeDiv(c, "+4", d);
                continue;
            }
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
        function Stapel (Karte) {
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
        for (let i = 0; i < 3; i++) {
            Stapel(i);
        }
        Ablage();
    }
    document.addEventListener('DOMContentLoaded', main);
})(uno || (uno = {}));
    }