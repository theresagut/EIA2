"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Moveable {
        constructor(_position) {
            //
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            //offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -50)
                this.position.x += Endabgabe.crc2.canvas.width + 50;
            if (this.position.y < -50)
                this.position.y += Endabgabe.crc2.canvas.height + 50;
            if (this.position.x > Endabgabe.crc2.canvas.width)
                this.position.x -= Endabgabe.crc2.canvas.width;
            if (this.position.y > Endabgabe.crc2.canvas.height)
                this.position.y -= Endabgabe.crc2.canvas.height;
        }
    }
    Endabgabe.Moveable = Moveable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Moveable.js.map