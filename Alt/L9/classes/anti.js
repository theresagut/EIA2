"use strict";
var A09;
(function (A09) {
    class Anti {
        constructor(_size) {
            let antiPositionMin = new A09.Vector(0, 350);
            let antiPositionMax = new A09.Vector(200, 600);
            let X = Math.random() * (antiPositionMax.x - antiPositionMin.x) + antiPositionMin.x;
            let Y = Math.random() * (antiPositionMax.y - antiPositionMin.y) + antiPositionMin.y;
            this.position = new A09.Vector(X, Y);
            this.size = _size;
            this.velocity = new A09.Vector(Math.random() * (2 - (-2)) + (-2), Math.random() * (2 - (-2)) + (-2));
        }
        draw() {
            A09.crc2.strokeStyle = "Yellow";
            A09.crc2.lineWidth = 3;
            A09.crc2.save();
            A09.crc2.translate(this.position.x, this.position.y);
            A09.crc2.beginPath();
            A09.crc2.moveTo(-7, 0);
            A09.crc2.lineTo(-7, -25);
            A09.crc2.moveTo(-7, -25);
            A09.crc2.lineTo(-17, -35);
            A09.crc2.moveTo(-15, -23);
            A09.crc2.lineTo(-25, -33);
            A09.crc2.moveTo(7, 0);
            A09.crc2.lineTo(7, -25);
            A09.crc2.moveTo(7, -25);
            A09.crc2.lineTo(17, -35);
            A09.crc2.moveTo(15, -23);
            A09.crc2.lineTo(25, -33);
            A09.crc2.stroke();
            A09.crc2.closePath();
            A09.crc2.restore();
        }
        move() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            if (this.position.x < 0) {
                this.position.x = A09.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += A09.canvas.height;
            }
            if (this.position.x > A09.canvas.width) {
                this.position.x += -A09.canvas.width;
            }
            if (this.position.y > A09.canvas.height) {
                this.position.y += -A09.canvas.height;
            }
        }
    }
    A09.Anti = Anti;
})(A09 || (A09 = {}));
//# sourceMappingURL=anti.js.map