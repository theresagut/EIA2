namespace A09 {

    export class Killer {

        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {

            let killerPositionMin: Vector = new Vector(50, 300);
            let killerPositionMax: Vector = new Vector(300, 600);
            let X: number = Math.random() * (killerPositionMax.x - killerPositionMin.x) + killerPositionMin.x;
            let Y: number = Math.random() * (killerPositionMax.y - killerPositionMin.y) + killerPositionMin.y;
            this.size = _size;
            this.position = new Vector(X, Y);

            this.velocity = new Vector(Math.random() * (2 - (-2)) + (-2), Math.random() * (2 - (-2)) + (-2));

        }

        draw(): void {

            crc2.strokeStyle = "black";
            crc2.lineWidth = 3;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(40, 25);
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            crc2.strokeStyle = "black";
            crc2.fillStyle = "brown";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();

            crc2.fillStyle = "#ff0000";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }

        move(): void {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
           
            if (this.position.x < 0) {
                this.position.x = canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += canvas.height;
            }

            if (this.position.x > canvas.width) {
                this.position.x += -canvas.width;
            }
            if (this.position.y > canvas.height) {
                this.position.y += -canvas.height;
            }
        }

    }


}