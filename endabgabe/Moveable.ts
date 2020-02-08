namespace Endabgabe {
    export abstract class Moveable {
      position: Vector;
      velocity: Vector;
  
      constructor(_position?: Vector) {
        //
      }
  
      public move(_timeslice: number): void {
  
        let offset: Vector = this.velocity.copy();
        //offset.scale(_timeslice);
        this.position.add(offset);
  
        if (this.position.x < -50)
          this.position.x += crc2.canvas.width + 50;
  
        if (this.position.y < -50)
          this.position.y += crc2.canvas.height + 50;
  
        if (this.position.x > crc2.canvas.width)
          this.position.x -= crc2.canvas.width;
  
        if (this.position.y > crc2.canvas.height)
          this.position.y -= crc2.canvas.height;
      }
  
    }
  
  }