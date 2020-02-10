//import { start } from "repl";

namespace Endabgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let golden: number = 0.62;
    let objects: DrawObject[] = [];
    let birds: Birds[] = [];
    let imagedata: ImageData;
    let fps: number = 25;
    let i: number = 0;
    let xMouse: number;
    let yMouse: number;
    let snowball: Snowball;
    export let name: string;
    export let score: number = 0;
    let gameEndbool: boolean = false;
    export let canvas: HTMLCanvasElement;
    let start: HTMLButtonElement;


    function listeners(): void {
        console.log("listeners");

        document.getElementsByTagName("canvas")[0].addEventListener("click", mouseEvent);
        //"Click"-Eventlistener vom Typ MouseEvent an canvas

    }
    function init(): void {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("ende").classList.add("invisible");

    }
    //Nach laden der Seite wird die Funktion init aufgerufen, die an das HtmlElement "Anleitung" einen click-Eventlistener anhängt, 
    //der die Funktion startGame aufruft
    //an das HTML Element "ende" die Klasse 



    function startGame(): void {
        let nameinput: HTMLInputElement = <HTMLInputElement>document.getElementById("nameinput");
        name = nameinput.value;
        anzeigeCanvas();
        listeners();

        console.log("maininit");

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");




        drawSky();
        drawHill();
        drawSun();


        drawCloud();
        drawCloud2();
        drawCloud3();

        generateBird();
        //generatePickingBird();
        generateSnow();


        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);
        setTimeout(gameEnds, 180000);

        update();
    }


    function anzeigeCanvas(): void {
        document.getElementsByTagName("canvas")[0].classList.remove("invisible");
        document.getElementsByTagName("div")[0].classList.add("invisible");

    }



    function update(): void {
        crc2.clearRect(0, 0, 1400, 900);
        crc2.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps);


        for (let i: number = 0; i < objects.length; i++) {
            let object: DrawObject = objects[i];
            object.draw();
            object.move();

        }
        if (snowball) {
            if (snowball.xP >= xMouse - 20 && snowball.xP <= xMouse + 20) {
                if (snowball.yP >= yMouse - 20 && snowball.yP <= yMouse + 20) {
                    console.log("ball angekommen");
                    checkIfHit();
                }
            }
        }
        drawScore();
    }
    //Schneeball
    function generateSnowball(_xMouse: number, _yMouse: number): void { //Übergabeparameter der Mausposition
        console.log(snowball);


        snowball = new Snowball(_xMouse, _yMouse);
        //            console.log(snowball);
        console.log("neuer schneeball");

        objects.push(snowball);
    }

    function mouseEvent(_event: MouseEvent): void {
        if (!snowball) {
            xMouse = _event.clientX;
            yMouse = _event.clientY;
            generateSnowball(xMouse, yMouse);
        }
    }

    function checkIfHit(): void {
        for (let i: number = 0; i < birds.length; i++) {
            if (xMouse >= birds[i].xP - 60 && xMouse <= birds[i].xP + 20) {
                if (yMouse >= birds[i].yP - 25 && yMouse <= birds[i].yP + 60) {
                    console.log("vogel getroffen", birds[i]);
                    birds.splice(i, 1);
                    for (let a: number = 0; a < objects.length; a++) {
                        if (objects[a].typ == "birds") { //|| objects[a].typ == "pickingBirds") {
                            if (xMouse >= objects[a].xP - 60 && xMouse <= objects[a].xP + 20) {
                                if (yMouse >= objects[a].yP - 25 && yMouse <= objects[a].yP + 60) {
                                    console.log("object getroffen");
                                    objects.splice(a, 1);
                                    let bird = new Birds();
                                    objects.push(bird);
                                    birds.push(bird);

                                    if (objects[a].typ == "birds") {
                                        score += 20;
                                    }
                                    /*else if (objects[a].typ == "pickingBirds") {
                                        score += 10;
                                    }*/


                                }
                            }
                        }
                    }
                }
            }
        }

        for (let i: number = 0; i < objects.length; i++) {
            if (objects[i].typ == "snowball") {
                objects.splice(i, 1);
                console.log("ball löschen");
                console.log(objects[i]);
            }
        }
        snowball = null;
    }



    //Schnee
    function generateSnow(): void {
        for (let i: number = 0; i < 70; i++) {

            let snowflake: Snow = new Snow();
            objects.push(snowflake);
        }
    }

    function generateBird(): void {
        for (let i: number = 0; i < 15; i++) {

            let bird: Birds = new Birds();
            objects.push(bird);
            birds.push(bird);
        }
    }

    /*function pickingBirds(): void {
        for (let i: number = 0; i < 5; i++) {
    
            let child: slowChildren = new slowChildren();
            objects.push(child);
            children.push(child);
        }
    }*/

    function gameEnds(): void {
        document.getElementsByTagName("canvas")[0].classList.add("invisible");
        document.getElementById("ende").classList.remove("invisible");
        document.getElementById("reload").classList.remove("invisible");
        document.getElementById("yourScore").innerText = "Deine Punktzahl:" + " " + score.toString();
        document.getElementById("reload").addEventListener("click", reload);

        DatabaseClient.insert();
        DatabaseClient.getHighscore();

    }

    function reload(): void {
        window.location.reload();
    }

    function drawCloud(): void {
        crc2.beginPath();
        crc2.arc(70, 170, 45, 0, 2 * Math.PI);
        crc2.arc(140, 170, 60, 0, 2 * Math.PI);
        crc2.arc(200, 170, 45, 0, 2 * Math.PI);
        crc2.arc(240, 170, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();

    }


    function drawCloud2(): void {
        crc2.beginPath();
        crc2.arc(650, 100, 30, 0, 2 * Math.PI);
        crc2.arc(810, 100, 60, 0, 2 * Math.PI);
        crc2.arc(870, 100, 40, 0, 2 * Math.PI);
        crc2.arc(750, 100, 70, 0, 2 * Math.PI);
        crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawCloud3(): void {
        crc2.beginPath();
        crc2.arc(595, 220, 15, 0, 2 * Math.PI);
        crc2.arc(620, 220, 25, 0, 2 * Math.PI);
        crc2.arc(650, 220, 30, 0, 2 * Math.PI);
        crc2.arc(680, 220, 25, 0, 2 * Math.PI);
        crc2.arc(705, 220, 15, 0, 2 * Math.PI);
        crc2.arc(720, 220, 10, 0, 2 * Math.PI);
        crc2.arc(730, 220, 8, 0, 2 * Math.PI);
        crc2.arc(740, 220, 6, 0, 2 * Math.PI);

        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }


    function drawSky(): void {
        crc2.moveTo(0, 100);
        crc2.beginPath();

        crc2.lineTo(1400, 800);
        crc2.lineTo(1400, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, 370);
        crc2.closePath();

        var grd = crc2.createLinearGradient(0, 0, 700, 1110);
        grd.addColorStop(0, "#7eb6e9");

        crc2.fillStyle = grd;
        crc2.fill();
    }



    function drawHill(): void {
        let gradiant: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradiant.addColorStop(0, "HSL(197,71%,73%)");
        gradiant.addColorStop(golden, "white");
        gradiant.addColorStop(1, "HSL(0, 100%, 99%)");

        crc2.fillStyle = gradiant;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(): void {
        crc2.beginPath();
        crc2.arc(150, 100, 70, 0, 2 * Math.PI);
        crc2.fillStyle = "#fff91d";
        crc2.fill();
    }


    function drawScore(): void {
        crc2.beginPath();
        crc2.moveTo(50, 670);
        crc2.lineTo(300, 670);
        crc2.lineTo(300, 770);
        crc2.lineTo(50, 770);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.lineWidth = 3.5;
        crc2.strokeStyle = "#7eb6e9";
        crc2.stroke();

        crc2.font = "30px Quicksand";
        crc2.fillStyle = "#000000";
        crc2.fillText("Score", 135, 700);

        crc2.font = "30px Quicksand";
        crc2.fillStyle = "#000000";

        crc2.fillText(score.toString(), 135, 730);



    }

}
