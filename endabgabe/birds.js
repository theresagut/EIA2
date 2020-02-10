"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Birds extends Endabgabe.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 300 + 150;
            this.yP = Math.random() * 100 + 160;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 90%, 80%)";
            this.colorKopfFluegel = "hsl(" + Math.random() * 100 + ", 90%, 80%)";
        }
        move() {
            /*if (this.md == true)
                this.moveDown();

            else {*/
            this.moveUp();
            //}
        }
        /*moveDown(): void {
            this.xD = 10;
            this.yD = 3;

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP > 1400) {
                this.md = false;
            }
        }
*/
        moveUp() {
            this.xD = Math.random() * (-10);
            this.yD = Math.random() * (-3);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 50) {
                this.md = true;
            }
            this.draw();
        }
        draw() {
            //Prototyp Vogel
            //Schnabel
            Endabgabe.crc2.fillStyle = "#F49A32";
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP + 500, this.yP + 135);
            Endabgabe.crc2.lineTo(this.xP + 550, this.yP + 120);
            Endabgabe.crc2.lineTo(this.xP + 550, this.yP + 160);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Körper
            Endabgabe.crc2.fillStyle = this.colorBody;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.ellipse(this.xP + 600, this.yP + 150, 30, 50, -7.7, 0, 2 * Math.PI);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Flügel
            Endabgabe.crc2.fillStyle = this.colorKopfFluegel;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xP + 583, this.yP + 135);
            Endabgabe.crc2.lineTo(this.xP + 620, this.yP + 135);
            Endabgabe.crc2.lineTo(this.xP + 600, this.yP + 165);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Kopf
            Endabgabe.crc2.fillStyle = this.colorKopfFluegel;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xP + 550, this.yP + 139, 22, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            //Auge
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xP + 540, this.yP + 130, 4, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
        }
    }
    Endabgabe.Birds = Birds;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=birds.js.map