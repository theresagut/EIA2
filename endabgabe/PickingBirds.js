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
                this.position = new Endabgabe.Vector(Math.random() * crc2.canvas.width, Math.floor(Math.random() * 400));
            // Math Random für Verteilung Breite * Höhe Canvas, Wert (größten & aufgerundet) * random Nr *600 (Verteilung auf Höhe des Canvas)
            this.velocity = new Endabgabe.Vector(Math.random() - 1 * 7, (Math.random() * 2 + Math.random() - 2));
            // -1 = vorwärts, 7 = Geschw. -2 und +2 (gehen langsam hoch und runter)
        }
        draw() {
            //birdhead
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(-25, 20, 15, 0, 4 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            //eye
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(-30, 13, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "#3673a4";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            //bill//Schnabel
            //body
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
            crc2.fillStyle = this.bodycolor;
            crc2.fill();
            crc2.restore();
            crc2.closePath();
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
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=PickingBirds.js.map