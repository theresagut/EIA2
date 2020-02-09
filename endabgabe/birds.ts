namespace Endabgabe {

    export class Birds extends DrawObject {
        xD: number;
        yD: number;
        colorBody: string;
        md: boolean;
        typ: "birds";

        constructor() {
            super();
            this.xP = Math.random() * 300 + 150;
            this.yP = Math.random() * 100 + 360;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 90%, 80%)";
        }

        move(): void {
            if (this.md == true)
                this.moveDown();

            else {
                this.moveUp();
            }
        }

        moveDown(): void {
            this.xD = 10;
            this.yD = 3;

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP > 1400) {
                this.md = false;
            }
        }

        moveUp(): void {

            this.xD = Math.random() * (-10);
            this.yD = Math.random() * (-3);

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP < 50) {
                this.md = true;
            }
            this.draw();
        }

        draw(): void {
            /*Körper
            crc2.beginPath();
            crc2.fillStyle = "#FFD8BE";
            crc2.arc(this.xP - 20, this.yP + 10, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
           
           //
            crc2.fillStyle = this.colorBody;
            crc2.arc(this.xP - 40, this.yP + 2, 15, 30, 5 * Math.PI);
            crc2.stroke();
            crc2.fill();

            Fueße
            crc2.beginPath();
            crc2.moveTo(this.xP - 10, this.yP + 25);
            crc2.lineTo(this.xP - 30, this.yP + 82);
            crc2.lineTo(this.xP - 6, this.yP + 43);
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        */ 
            //schnabel yeeees
            crc2.beginPath();
            crc2.moveTo(this.xP + 30, this.yP + 40);
            crc2.lineTo(this.xP + 100, this.yP + 30);
            crc2.lineTo(this.xP + 70, this.yP + 80);
            crc2.stroke();
            crc2.fill();

            //Körper hoffentlich 
            crc2.beginPath();
            crc2.ellipse(this.xP + 50, this.yP + 90 ) ;
            crc2.ellipse(0, 30, 30, 15, Math.PI / 10, 0, 2 * Math.PI)
            crc2.stroke();
            crc2.fill();
        
        
        
        }
    }

}