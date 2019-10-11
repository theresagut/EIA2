/* Aufgabe: Aufgabe 2;
Name: Theresa Josephine Gut;
Matrikel: 259110
Datum: 21.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Uno2 {

    document.addEventListener("DOMContentLoaded", main);

    // interface
    interface Card {
        color: string;
        value: string;
    }
    let handcards: Card[];
    let colors: string[] = ["Red", "Blue", "Green", "Yellow"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<->"];
    let deck: Card[]

    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z < 2; z++) {
                let card: Card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }

    //prompt funktion
    let x: number;
    function main(): void {
        let y: string = prompt("Wie viele Karten möchtest du haben?");
        x = Number(y);

        //Aufruf der Funktionen
        random();
    }

    //random
    function random() {
        for(let k: number= 0; k<x; k++) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
             handcards.push(deck[r]); //Karte wird in handcards kopiert
             deck.splice(r); //Karte die heraus kopiert wurde, wurde im deck gelöscht
        //hmtl muss hier in die schleife
            
        
        }
       
    }
    
    //den inhalt in html schreiben
     function writeHTML() : void {
      
        var node : any = document.getElementById("alles");
        var childNodeHTML : string;
        var i: number = 0;

            childNodeHTML = "";
           
   
        

            
            console.log (childNodeHTML);
            
            node.innerHTML += childNodeHTML;
            
            i++;            
        }              
    }  