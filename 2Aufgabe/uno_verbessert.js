/* Aufgabe: Aufgabe 2;
Name: Theresa Josephine Gut;
Matrikel: 259110
Datum: 21.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Uno2;
(function (Uno2) {
    document.addEventListener("DOMContentLoaded", main);
    let handcards;
    let colors = ["Red", "Blue", "Green", "Yellow"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<->"];
    let deck;
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }
    //prompt funktion
    let x;
    function main() {
        let y = prompt("Wie viele Karten möchtest du haben?");
        x = Number(y);
        //Aufruf der Funktionen
        random();
    }
    //random
    function random() {
        for (let k = 0; k < x; k++) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]); //Karte wird in handcards kopiert
            deck.splice(r); //Karte die heraus kopiert wurde, wurde im deck gelöscht
        }
    }
    //den inhalt in html schreiben
    function writeHTML() {
        var node = document.getElementById("alles");
        var childNodeHTML;
        var i = 0;
        childNodeHTML = "";
        console.log(childNodeHTML);
        node.innerHTML += childNodeHTML;
        i++;
    }
})(Uno2 || (Uno2 = {}));
//# sourceMappingURL=uno_verbessert.js.map