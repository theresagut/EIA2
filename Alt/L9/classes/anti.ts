namespace A09 {

    export class Anti {

        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {

            let antiPositionMin: Vector = new Vector(0, 350);
            let antiPositionMax: Vector = new Vector(200, 600);
            let X: number = Math.random() * (antiPositionMax.x - antiPositionMin.x) + antiPositionMin.x;
            let Y: number = Math.random() * (antiPositionMax.y - antiPositionMin.y) + antiPositionMin.y;

            this.position = new Vector(X, Y);
            this.size = _size;
            this.velocity = new Vector(Math.random() * (2 - (-2)) + (-2), Math.random() * (2 - (-2)) + (-2));

        }

        draw(): void {

            crc2.strokeStyle = "Yellow";
            crc2.lineWidth = 3;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(-7, 0);
            crc2.lineTo(-7, -25);
            crc2.moveTo(-7, -25);
            crc2.lineTo(-17, -35);
            crc2.moveTo(-15, -23);
            crc2.lineTo(-25, -33);

            crc2.moveTo(7, 0);
            crc2.lineTo(7, -25);
            crc2.moveTo(7, -25);
            crc2.lineTo(17, -35);
            crc2.moveTo(15, -23);
            crc2.lineTo(25, -33);
            crc2.stroke();
            crc2.closePath();
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