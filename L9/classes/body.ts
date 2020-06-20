namespace A09 {

    export class Body {

        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {

            let bodyPositionMin: Vector = new Vector(0, 0);
            let bodyPositionMax: Vector = new Vector(350, 550);
            let X: number = Math.random() * (bodyPositionMax.x - bodyPositionMin.x) + bodyPositionMin.x;
            let Y: number = Math.random() * (bodyPositionMax.y - bodyPositionMin.y) + bodyPositionMin.y; this.position = new Vector(X, Y);
            this.position = new Vector(X, Y);
            this.size = _size;

            this.velocity = new Vector(0, 0);

        }

        draw(): void {

            crc2.lineWidth = 3;

            crc2.strokeStyle = "black";
            crc2.fillStyle = "pink";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();

            crc2.lineWidth = 1;
            crc2.fillStyle = "red";
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, this.size / 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();

            crc2.fillStyle = "blue";
            crc2.save();
            crc2.translate(this.position.x + 15, this.position.y + 17);
            crc2.beginPath();
            crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();


            crc2.fillStyle = "purple";
            crc2.save();
            crc2.translate(this.position.x - 15, this.position.y - 10);
            crc2.beginPath();
            crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }

        move(): void {

        }


    }
}