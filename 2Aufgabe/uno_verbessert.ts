/* Aufgabe: Aufgabe 2;
Name: Theresa Josephine Gut;
Matrikel: 259110
Datum: 21.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Uno2{
    
    //prompt funktion
    function main() {
        let x : number;
        let y: string = prompt("Wie viele Karten möchtest du haben?");
        x = Number(y); 
   
    // interface
    interface Card{
        color: string;
        value: string;
        }
    let handcards : Card[];
    let colors: string [] = ["Red","Blue","Green", "Yellow"];
    let values : string [] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<->"];
    let deck: Card[]
    
    for (let i:number=0; i< colors.length; i++) {
        for (let a:number=0; a<values.length; a++){
            for (let z:number=0; z<2; z++){
                let card: Card = (color = colors[i], value=values[a]);
                deck.push (card);
                }
            }
        }
    
        
    //random

    function random (n: number) {
        return Math.floor(Math.random() * Math.floor(n));
        }
    
}