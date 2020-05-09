"use strict";
var Formular;
(function (Formular) {
    window.addEventListener("load", init);
    function init() {
        displayFieldsets(Formular.data);
        document.getElementById("fieldsets").addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }
    function displayFieldsets(_item) {
        for (let key in _item) {
            console.log(key);
            let value = _item[key];
            let form = document.getElementById("fieldsets");
            let h2 = document.createElement("h2");
            form.appendChild(h2);
            h2.innerText = key;
            let fieldset = document.createElement("fieldset");
            form.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            fieldset.setAttribute("id", key);
            for (let i = 0; i < value.length; i++) {
                createInnerFieldset(value[i], fieldset, key);
            }
        }
    }
    function createInnerFieldset(_heteroPredef, _fieldset, _key) {
        if (_key == "Putzhilfe" || _key == "Geld abheben" || _key == "Lieferung") {
            //console.log(_fieldset.childNodes.length);
            let forID = _fieldset.childNodes.length;
            let label = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
            let input = document.createElement("input");
            label.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            input.setAttribute("hiddenName", _heteroPredef.name);
            input.setAttribute("category", _key);
        }
        else {
            let p = document.createElement("p");
            _fieldset.appendChild(p);
            let input = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _heteroPredef.name);
            input.setAttribute("category", _key);
            p.innerText = _heteroPredef.name;
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
        if (target.name == "radioPutzhilfe") {
            Putzhilfeboolean = true;
            for (let i = 0; i < Formular.data["Putzhilfe"].length; i++) {
                let dom = document.getElementById("Putzhilfe" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        if (target.name == "radioGeld") {
            Geldboolean = true;
            for (let i = 0; i < Formular.data["Geld abheben"].length; i++) {
                let dom = document.getElementById("Geld abheben" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        if (target.name == "radioLieferung") {
            for (let i = 0; i < Formular.data["Lieferung"].length; i++) {
                let dom = document.getElementById("Lieferung" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        let articles = document.getElementsByTagName("input");
        let checkout = document.getElementById("checkout");
        checkout.innerText = "";
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let articleName = article.getAttribute("name");
            if (articleName == "radioPutzhilfe" || articleName == "radioGeld" || articleName == "radioLieferung") {
                articleName = article.getAttribute("hiddenName");
            }
            let articleValue = Number(article.getAttribute("value"));
            let articlePrice = Number(article.getAttribute("price"));
            if (articleValue > 0 || article.getAttribute("value") == "on") {
                let articleCategory = article.getAttribute("category");
                if (articleCategory == "Putzhilfe" || articleCategory == "Geld abheben" || articleCategory == "Lieferung") {
                    articleValue = 1;
                }
                let price = articleValue * articlePrice;
                let createArticle = document.createElement("p");
                checkout.appendChild(createArticle);
                createArticle.setAttribute("price", price.toString());
                createArticle.innerText = articleCategory + ": " + articleName + " x " + articleValue;
            }
        }
        calcPrice();
    }
    function calcPrice() {
        let co = document.getElementById("checkout");
        let gesPrice = 0;
        for (let i = 0; i < co.childNodes.length; i++) {
            let price = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }
    let Putzhilfeboolean = true;
    let Geldboolean = true;
    let Lieferungboolean = true;
    function check() {
        let prompt = "Bitte noch auswaehlen:";
        if (Putzhilfeboolean == false || Geldboolean == false || Lieferungboolean == false) {
            if (Putzhilfeboolean == false) {
                prompt += "Baum ";
            }
            if (Geldboolean == false) {
                prompt += "Halter ";
            }
            if (Lieferungboolean == false) {
                prompt += "Lieferung";
            }
            alert(prompt);
        }
    }
})(Formular || (Formular = {}));
//# sourceMappingURL=main.js.map