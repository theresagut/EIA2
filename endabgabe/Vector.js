"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            // neue Positionsobjekte bewegen sich unabh. voneinander
            let vector = new Vector(this.x, this.y);
            return vector;
        }
    }
    Endabgabe.Vector = Vector;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Vector.js.map