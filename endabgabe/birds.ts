namespace Endabgabe {

    export class Birds extends DrawObject {
        xD: number;
        yD: number;
        colorBody: string;
        colorKopfFluegel: string;
        md: boolean;
        typ: "birds";

        constructor() {
            super();
            this.xP = Math.random() * 300 + 150;
            this.yP = Math.random() * 100 + 160;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 90%, 80%)";
            this.colorKopfFluegel = "hsl(" + Math.random() * 100 + ", 90%, 80%)";
        }

        move(): void {
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
           
        //Prototyp Vogel
        //Schnabel

        crc2.fillStyle = "#F49A32";
        crc2.beginPath();
        crc2.moveTo(this.xP + 500, this.yP + 135);
        crc2.lineTo(this.xP + 550, this.yP + 120);
        crc2.lineTo(this.xP + 550, this.yP + 160);
        crc2.closePath();
        crc2.fill();
        
        //Körper
        crc2.fillStyle = this.colorBody;
        crc2.beginPath();
        crc2.ellipse(this.xP + 600, this.yP + 150, 30, 50, -7.7, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        crc2.fill();

        //Flügel
        crc2.fillStyle = this.colorKopfFluegel;
        crc2.beginPath();
        crc2.moveTo(this.xP + 583, this.yP + 135);
        crc2.lineTo(this.xP + 620, this.yP + 135);
        crc2.lineTo(this.xP + 600, this.yP + 165);
        crc2.closePath();
        crc2.fill();

        //Kopf
        crc2.fillStyle = this.colorKopfFluegel;
        crc2.beginPath();
        crc2.arc(this.xP + 550, this.yP + 139, 22, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Auge
        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(this.xP + 540, this.yP + 130, 4, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
        
        
        }
    }

}