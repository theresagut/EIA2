"use strict";
var Aufgabe02;
(function (Aufgabe02) {
    //    Array mit Content 
    var infolist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //    leeres Array zum Bestücken
    var cardList = [];
    //    Array mit Klassen
    var classList = ["hidden", "taken", "visible"];
    //    Array zum Vegleichen von 2 Karten
    var openList = [];
    //    Variable dass nur 2 karten offen sein können 
    let openCards = 0;
    //    Player Score der am anfang auf 0 gesetzt ist
    let score = 0;
    let greetNumber = 0;
    //    Prompt für Eingabe für Kartenpaare 
    function inputPairs() {
        let pairs = prompt("Wie viele Kartenpaare (min. 5 & max. 25)");
        let pairSum = parseInt(pairs);
        if (isNaN(pairSum) || pairSum < 5 || pairSum > 25) {
            alert("mindestens 5 & maximal 25!");
            inputPairs();
        }
        else {
            console.log("inputPairs");
            console.log(pairSum);
            return pairSum;
        }
    }
    //    Prompt für Eingabe für Spieleranzahl 
    function inputPlayer() {
        let n = prompt("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)");
        let nSum = parseInt(n);
        if (isNaN(nSum) || nSum < 0 || nSum > 4) {
            alert("Es können leider nur bis zu 4 Spieler mitspielen");
            inputPlayer();
        }
        else {
            console.log("inputPlayer");
            console.log(nSum);
            return nSum;
        }
    }
    let amount = inputPairs();
    let players = inputPlayer();
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    //    Content verdoppeln und in neuern array speichern
    function shuffelArray(_x) {
        for (let i = 1; i <= _x; i++) {
            var content = infolist[0];
            cardList.push(content);
            cardList.push(content);
            var removed = infolist.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    //    Cards erzeugen 
    function generateCards(_y) {
        var node = document.getElementById("spielfeld");
        var childNodeHTML;
        var i = 0;
        while (i < (_y * 2)) {
            let min = 0;
            let max = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div class='hidden' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            addEventListener("click", clickHandler);
            i++;
        }
    }
    function clickHandler(_event) {
        let x = _event.target;
        if (x.classList.contains("hidden")) {
            x.classList.remove("hidden");
            x.classList.add("open");
            openCards++;
        }
        if (openCards == 2) {
            setTimeout(compareCards, 1000);
        }
        if (openCards > 2) {
            x.classList.remove("open");
            x.classList.add("hidden");
        }
        if (x.classList.contains("open")) {
        }
    }
    function compareCards() {
        let card1 = document.getElementsByClassName("open")[0];
        let card2 = document.getElementsByClassName("open")[1];
        openList.push(card1, card2);
        console.log(openList);
        if (openList[0].innerHTML == openList[1].innerHTML) {
            openList[0].classList.remove("open");
            openList[0].classList.add("taken");
            openList[1].classList.remove("open");
            openList[1].classList.add("taken");
            score++;
            console.log("Karetnpaaar abeglegt");
            greetNumber++;
            console.log(greetNumber);
        }
        else {
            card1.classList.remove("open");
            card1.classList.add("hidden");
            card2.classList.remove("open");
            card2.classList.add("hidden");
        }
        //        openCards Variabel wieder auf 0 setzen 
        openCards = 0;
        //        opeList Array löschen 
        openList.splice(0, 2);
        //       HTML von Score verändern um Player Score mitzuzählen
        let playerScore = score.toString();
        document.getElementById('Punktestand').innerHTML = playerScore;
        congrats();
    }
    function congrats() {
        if (greetNumber == amount) {
            alert("Glückwunsch! Du hast alle Kartenpaare entdeckt :-)");
        }
    }
    function generatePlayers() {
        var node = document.getElementById("Spielerbereich");
        var childNodeHTML;
        var i = 0;
        while (i < players) {
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Spieler " + (i + 1);
            childNodeHTML += "<p id='Punktestand'>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelArray(amount);
        console.log("main");
        // Content erzeugen
        generateCards(amount);
        generatePlayers();
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=memory.js.map