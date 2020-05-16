"use strict";
var L03_Haushaltshilfe;
(function (L03_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let totalCost = 0;
    let form = document.querySelector("form");
    let confirm = document.getElementById("confirm");
    let cash = document.getElementById("cash");
    let shopping = document.getElementById("shopping");
    let house = document.getElementById("house");
    let grocery = document.getElementById("grocery");
    let money = document.getElementById("money");
    let household = document.getElementById("household");
    let cart = document.getElementById("cart");
    let getCash = document.getElementById("getCash");
    let householdDone = document.getElementById("householdDone");
    let submit = document.getElementById("submit");
    let totalPrice = document.getElementById("totalPrice");
    function handleLoad() {
        cart.addEventListener("click", handleChange);
        getCash.addEventListener("click", handleChange);
        householdDone.addEventListener("click", handleChange);
        submit.addEventListener("click", sendOrder);
    }
    function handleChange(_event) {
        let table = document.getElementById("table");
        let table2 = document.getElementById("table2");
        let table3 = document.getElementById("table3");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let row = document.createElement("tr");
            let td = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            switch (entry[0]) {
                case "Menge":
                    break;
                case "Artikel":
                    let itemPrice = Number(item.getAttribute("price"));
                    let menge = Number(formData.get("Menge"));
                    let einheit = String(item.getAttribute("unit"));
                    let markt = String(formData.get("Bevorzugter Supermarkt"));
                    itemPrice = menge * itemPrice;
                    td.innerHTML = "" + entry[1];
                    td2.innerHTML = "" + itemPrice.toFixed(2) + "€";
                    td3.innerHTML = "" + menge;
                    td4.innerHTML = "" + einheit;
                    td6.innerHTML = "" + markt;
                    row.appendChild(td);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    row.appendChild(td4);
                    row.appendChild(td5);
                    row.appendChild(td6);
                    row.appendChild(td7);
                    table.appendChild(row);
                    form.reset();
                    break;
                case "cash":
                    let money = String(item.getAttribute("value"));
                    if (money == "Geld abheben") {
                        let bargeld = Number(formData.get("bargeld"));
                        td.innerHTML = "" + money;
                        td2.innerHTML = "" + geld + "€";
                        row.appendChild(td);
                        row.appendChild(td2);
                        row.appendChild(td3);
                        table2.appendChild(row);
                        form.reset();
                        break;
                    }
                    else if (money == "Geld einzahlen") {
                        td.innerHTML = "" + money;
                    }
                    row.appendChild(td);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    table2.appendChild(row);
                    form.reset();
                    break;
            }
            break;
            "toDo";
            let itemCost = Number(item.getAttribute("price"));
            td.innerHTML = "" + entry[1];
            td2.innerHTML = "" + itemCost + "€";
        }
        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        table3.appendChild(row);
        totalCost += itemCost;
        form.reset();
        break;
    }
    totalPrice.innerHTML = "";
    totalPrice.innerHTML = "<strong>Gesamtpreis: </strong>" + totalCost.toFixed(2) + "€";
})(L03_Haushaltshilfe || (L03_Haushaltshilfe = {}));
//# sourceMappingURL=L04_Code.js.map