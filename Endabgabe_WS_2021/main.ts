namespace Firework{
    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    function handleLoad():void{
        canvas =<HTMLCanvasElement>canvas.querySelector("canvas");
        crc2 =<CanvasRenderingContext2D>canvas.getContext("2d");
        if(!crc2){
            console.log("Fehler!");
        }
    }
}