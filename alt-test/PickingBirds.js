"use strict";
var Endabgabe;
(function (Endabgabe) {
    class PickingBird extends Endabgabe.Moveable {
        constructor(_size, _position) {
            super(_position); // ruft die Position aus der Moveable auf - wieso?
            this.size = 2;
            console.log("picking Bird constructor");
            this.bodycolor = getRandomColor();
            this.billcolor = getRandomColor();
            if (_position)
                this.position = _position;
            else
                this.position = new Endabgabe.Vector(Math.random() * Endabgabe.crc2.canvas.width, Math.floor(Math.random() * 400));
            // Math Random für Verteilung Breite * Höhe Canvas, Wert (größten & aufgerundet) * random Nr *600 (Verteilung auf Höhe des Canvas)
            this.velocity = new Endabgabe.Vector(Math.random() - 1 * 7, (Math.random() * 2 + Math.random() - 2));
            // -1 = vorwärts, 7 = Geschw. -2 und +2 (gehen langsam hoch und runter)
        }
        draw() {
            //birdhead
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(-25, 20, 15, 0, 4 * Math.PI);
            Endabgabe.crc2.fillStyle = "blue";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
            //eye
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(-30, 13, 3, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "#3673a4";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
            //bill//Schnabel
            //body
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = this.bodycolor;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
            //wings
        }
        isHit(_hotspot) {
            let hitsize = this.size * 20; // radius, indem sie getroffen werden
            let difference = new Endabgabe.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
            //Entfernung vertikal & horizontal */
        }
    }
    Endabgabe.PickingBird = PickingBird;
    function getRandomColor() {
        var letters = "0123456789ABCDEF".split("");
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=PickingBirds.js.map