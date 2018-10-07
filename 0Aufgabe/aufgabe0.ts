// Begrüßung

function Funktion(): void {
var name = prompt("Wie heißt du?");

if (name != null) {
    document.getElementById("solution").innerHTML =
    "Schön dass du vorbei schaust "  +  name + " :)";
    }
}