"use strict";
var Nachbarschaftshilfe_06;
(function (Nachbarschaftshilfe_06) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "https://eia-repository-mb.herokuapp.com/";
    async function handleLoad(_event) {
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        Nachbarschaftshilfe_06.generateContent(data);
        form = document.querySelector("form");
        let submit = document.querySelector("button[type=button]");
        form.addEventListener("change", handleChange);
        displayOrder();
        submit.addEventListener("click", sendOrder);
    }
    async function sendOrder(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            if (item == null)
                continue;
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Supermarked":
                    order.innerHTML += item.value + "<br>";
                    break;
                case "Amount":
                    break;
                case "Shopping":
                    let amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " x " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Household":
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Withdrawals":
                    let money = Number(formData.get("Money"));
                    price += money;
                    order.innerHTML += item.value + " " + money + "€  " + "<br>";
                    break;
                case "Money":
                    break;
            }
            price += itemPrice;
        }
        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }
})(Nachbarschaftshilfe_06 || (Nachbarschaftshilfe_06 = {}));
//# sourceMappingURL=Nachbarschaftshilfe.js.map