"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Bird extends Endabgabe.Moveable {
        constructor(_size, _position) {
            super(_position); // ruft die Position aus der Moveable auf - wieso?
            this.size = 2;
            console.log("Bird constructor");
            this.bodycolor = getRandomColor();
            this.billcolor = getRandomColor();
            if (_position)
                this.position = _position;
            else
                this.position = new Endabgabe.Vector(Math.random() * Endabgabe.crc2.canvas.width, Math.floor(Math.random() * 400));
            // Math Random für Verteilung Breite * Höhe Canvas, Wert (größten & aufgerundet) * random Nr *600 (Verteilung auf Höhe des Canvas)
            this.velocity = new Endabgabe.Vector(Math.random() - 1 * 4, (Math.random() * 2 + Math.random() - 2));
            // -1 = vorwärts, 7 = Geschw. -2 und +2 (gehen langsam hoch und runter)
        }
        draw() {
            //birdhead
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(-25, 20, 15, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "#af8a54";
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
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(-36, 10);
            Endabgabe.crc2.lineTo(-50, 1);
            Endabgabe.crc2.lineTo(-40, 17);
            Endabgabe.crc2.fillStyle = this.billcolor;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
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
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(15, 20);
            Endabgabe.crc2.lineTo(-15, 20);
            Endabgabe.crc2.lineTo(-2, 50);
            Endabgabe.crc2.fillStyle = "#af8a54";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
        isHit(_hotspot) {
            let hitsize = this.size * 20; // radius, indem sie getroffen werden
            let difference = new Endabgabe.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
            //Entfernung vertikal & horizontal */
        }
    }
    Endabgabe.Bird = Bird;
    function getRandomColor() {
        var letters = "0123456789ABCDEF".split("");
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=birds.js.map