"use strict";
var A09;
(function (A09) {
    class Body {
        constructor(_size) {
            let bodyPositionMin = new A09.Vector(0, 0);
            let bodyPositionMax = new A09.Vector(350, 550);
            let X = Math.random() * (bodyPositionMax.x - bodyPositionMin.x) + bodyPositionMin.x;
            let Y = Math.random() * (bodyPositionMax.y - bodyPositionMin.y) + bodyPositionMin.y;
            this.position = new A09.Vector(X, Y);
            this.position = new A09.Vector(X, Y);
            this.size = _size;
            this.velocity = new A09.Vector(0, 0);
        }
        draw() {
            A09.crc2.lineWidth = 3;
            A09.crc2.strokeStyle = "black";
            A09.crc2.fillStyle = "pink";
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
            A09.crc2.restore();
            A09.crc2.lineWidth = 1;
            A09.crc2.fillStyle = "red";
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, this.size / 4, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
            A09.crc2.restore();
            A09.crc2.fillStyle = "blue";
            A09.crc2.save();
            A09.crc2.translate(this.position.x + 15, this.position.y + 17);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
            A09.crc2.restore();
            A09.crc2.fillStyle = "purple";
            A09.crc2.save();
            A09.crc2.translate(this.position.x - 15, this.position.y - 10);
            A09.crc2.beginPath();
            A09.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            A09.crc2.closePath();
            A09.crc2.fill();
            A09.crc2.stroke();
            A09.crc2.restore();
        }
        move() {
        }
    }
    A09.Body = Body;
})(A09 || (A09 = {}));
//# sourceMappingURL=body.js.map