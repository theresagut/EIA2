"use strict";
var Formular;
(function (Formular) {
    // Beispieldaten auf Basis der oben angegebenen Strukturen
    Formular.data = {
        "Brot": [
            { name: "Aldi [2 Euro]", price: 2 },
            { name: "Lidl [2.50 Euro]", price: 2.5 },
            { name: "Rewe [3 Euro]", price: 3 }
        ],
        "Wasser 6x": [
            { name: "Aldi [3.60 Euro]", price: 3.6 },
            { name: "Lidl [4 Euro]", price: 4 },
            { name: "Rewe [6 Euro]", price: 6 }
        ],
        "Marmelade": [
            { name: "Aldi Erdbeermarmelade [1 Euro]", price: 1 },
            { name: "Aldi Himbeermarmelade [1 Euro]", price: 1 },
            { name: "Lidl Erdbeermarmelade [1.20 Euro]", price: 1.2 },
            { name: "Lidl Aprikosenmarmelade [1.50 Euro]", price: 1.5 },
            { name: "Rewe Erdbeermarmelade [2 Euro]", price: 2 },
            { name: "Rewe Kirschmarmelade [2.50 Euro]", price: 2.5 },
            { name: "Rewe Feigenmarmelade [3.50 Euro]", price: 3.5 }
        ],
        /* Ab hier neue Kategorien einfügen */
        /* Ab hier nur die einzelnen Kategorien anpassen */
        "Putzhilfe": [
            { name: "Nur Badezimmer / Toilette [15 Euro]", price: 15 },
            { name: "Schlaf- und Wohnbereich inkl. Badezimmer [30 Euro]", price: 30 },
            { name: "Gesamte Wohnung [40 Euro]", price: 40 }
        ],
        "Geld abheben": [
            { name: "50 Euro [5 Euro Gebühren]", price: 5 },
            { name: "100 Euro [10 Euro Gebühren]", price: 10 },
            { name: "150 Euro [15 Euro Gebühren]", price: 15 }
        ],
        "Lieferung": [
            { name: "Vor die Haustüre [2 Euro]", price: 2 },
            { name: "Vor die Wohnungstüre (bis viertes Stockwerk) [3.50 Euro]", price: 3.5 },
            { name: "Vor die Wohnungstüre (ab viertes Stockwerk ohne Aufzug) [5 Euro]", price: 5 }
        ]
    };
})(Formular || (Formular = {}));
//# sourceMappingURL=data.js.map