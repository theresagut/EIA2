namespace L05_Haushaltshilfe {
    window.addEventListener("load", handleLoad);
    //let main: HTMLDivElement = <HTMLDivElement>document.querySelector("div#main");
    let totalcost: number = 0;
    let form: HTMLFormElement;
    let diveinkauf: HTMLDivElement;
    let divhaushalt: HTMLDivElement;
    let divbank: HTMLDivElement;
    let gesamt: HTMLSpanElement;

    //fieldsets
    let fieldeinkauf: HTMLFieldSetElement;
    let fieldhaus: HTMLFieldSetElement;
    let fieldbank: HTMLFieldSetElement;

    //tasks id
    let einkauf: HTMLInputElement;
    let haushalt: HTMLInputElement;
    let bankange: HTMLInputElement;


    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");
        let response: Response = await fetch("data_L05.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data); //function in generateContent.ts ; data aus Data.ts

        form = <HTMLFormElement>document.querySelector("form");

        //get submit und reset button
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
        let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
        submit.addEventListener("click", sendOrder);
        reset.addEventListener("click", resetOrder);

        //tasks id
        einkauf = <HTMLInputElement>document.querySelector("#Einkauf");
        haushalt = <HTMLInputElement>document.querySelector("#Haushalt");
        bankange = <HTMLInputElement>document.querySelector("#Bankange");

        //fieldsets
        fieldeinkauf = <HTMLFieldSetElement>document.querySelector("#fieldeinkauf");
        fieldhaus = <HTMLFieldSetElement>document.querySelector("#fieldhaus");
        fieldbank = <HTMLFieldSetElement>document.querySelector("#fieldbank");

        //  form.addEventListener("change", handleChange);
        let geteinkauf: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttoneinkauf");
        let gethaushalt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonhausarbeiten");
        let getbank: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonbankange");

        //addEventlistener on radio buttons um die einzelnen fieldsets zeigen zu können
        //form.addEventListener("click", handleChange);
        einkauf.addEventListener("click", showfieldset);
        haushalt.addEventListener("click", showfieldset);
        bankange.addEventListener("click", showfieldset);

        //addEventlistener on okbuttons 
        geteinkauf.addEventListener("click", handleChange);
        gethaushalt.addEventListener("click", handleChange);
        getbank.addEventListener("click", handleChange);





    }

    //disable fieldsets die gerade nicht benutzt werden
    function showfieldset(): void {

        if (einkauf.checked == true) {
            fieldeinkauf.disabled = false;
            fieldhaus.disabled = true;
            fieldbank.disabled = true;
            console.log("enable fieldset Einkauf");
        }

        else if (haushalt.checked == true) {
            fieldeinkauf.disabled = true;
            fieldhaus.disabled = false;
            fieldbank.disabled = true;
            console.log("enable fieldset Haushalt");
        }

        else if (bankange.checked == true) {
            fieldeinkauf.disabled = true;
            fieldhaus.disabled = true;
            fieldbank.disabled = false;
            console.log("enable fieldset Bankangelegenheiten");
        }

    }

    async function sendOrder(_event: Event): Promise<void> {
        console.log("send order");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("haushaltshilfe_L05.html?" + query.toString());
        alert("Order Sent!");
    }

    function handleChange(): void {

        diveinkauf = <HTMLDivElement>document.querySelector("#diveinkauf");
        divhaushalt = <HTMLDivElement>document.querySelector("#divhaushalt");
        divbank = <HTMLDivElement>document.querySelector("#divbank");
        gesamt = <HTMLSpanElement>document.querySelector("#gesamt");

        let formData: FormData = new FormData(document.forms[0]);


        /*Mit dem for...of statement können sogenannte iterable objects durchlaufen werden 
        (Array, Map, Set, das arguments Objekt und weitere eingeschlossen), 
        wobei auf jeden gefundenen Wert eigene Statements ausgeführt werden können.
        entry: variable
        Bei jedem Durchlauf wird entry der jeweils gefundene Wert zugewiesen.
        formData: iterable
        Objekt, dessen aufzählbare Eigenschaften durchlaufen werden.
        
        for...in --> auf jeden gefundenen name*/



        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            if (item === null) { continue; }

            let price: number = Number(item.getAttribute("price"));
            let amount: number = Number(formData.get("Amount"));
            let prices: number;


            //erstellen von div und span elementen um bestellung anzuzeigen
            let span1: HTMLSpanElement = document.createElement("span");
            let span2: HTMLSpanElement = document.createElement("span");
            let span3: HTMLSpanElement = document.createElement("span");
            let span4: HTMLSpanElement = document.createElement("span");
            let span5: HTMLSpanElement = document.createElement("span");
            let span6: HTMLSpanElement = document.createElement("span");
            let orderorder: HTMLDivElement = document.createElement("div");

            //erstellen von lösch-Button für Bestellung
            let deletebutton: HTMLButtonElement = document.createElement("button");
            deletebutton.type = "button";

            deletebutton.textContent = "-";


            //switch case statt if else
            switch (entry[0]) {
                case "Groceries":

                    // let unit: string = String(formData.get("Unit"));
                    let gebühr: number = 0.3;
                    let store: string = String(formData.get("Store"));
                    let gebühreneinkauf: number = amount * gebühr; //Gebühren

                    //Berechnung von menge mit preis
                    prices = amount * price;

                    deletebutton.addEventListener("click", function (): void {
                        deleteanorder(prices, event, gesamt);
                    });

                    //Werte eintragen
                    span1.innerHTML = " " + amount;
                    span2.innerHTML = "" + entry[1];
                    //span3.innerHTML = " " + unit;
                    span4.innerHTML = " Laden: " + store;
                    span5.innerHTML = " Preis: " + prices + "€";
                    span6.innerHTML = " Gebühren: " + gebühreneinkauf.toFixed(2) + "€";
                    //Werte in HTML
                    diveinkauf.appendChild(orderorder);
                    orderorder.appendChild(deletebutton);
                    orderorder.appendChild(span1);
                    orderorder.appendChild(span2);
                    //orderorder.appendChild(span3);
                    orderorder.appendChild(span4);
                    orderorder.appendChild(span5);
                    orderorder.appendChild(span6);
                    prices += gebühreneinkauf;
                    totalcost += prices;
                    break;

                case "Householdhelp":
                    prices = price * amount;
                    span1.innerHTML = " " + entry[1] + ":";
                    span2.innerHTML = " in " + amount + " Zimmer/n";
                    span3.innerHTML = " Preis: " + prices + "€";

                    console.log(item);

                    deletebutton.addEventListener("click", function (): void {
                        deleteanorder(prices, event, gesamt);

                    });
                    divhaushalt.appendChild(orderorder);
                    orderorder.appendChild(deletebutton);
                    orderorder.appendChild(span1);
                    orderorder.appendChild(span2);
                    orderorder.appendChild(span3);

                    totalcost += prices;
                    break;

                case "Bank":
                    let transfermon: HTMLInputElement = <HTMLInputElement>document.querySelector("#GeldÜberweisen");
                    let getmon: HTMLInputElement = <HTMLInputElement>document.querySelector("#GeldAbheben");



                    if (transfermon.checked == true) {

                        prices = amount + price; //amount ist hier das zu überweisende Geld und price die gebühren
                        span1.innerHTML = " Geld überweisen: ";
                        span2.innerHTML = "" + amount + "€";
                        span3.innerHTML = " Gebühren: " + price + "€";

                        deletebutton.addEventListener("click", function (): void {
                            deleteanorder(prices, event, gesamt);
                        });
                        divbank.appendChild(orderorder);
                        orderorder.appendChild(deletebutton);
                        orderorder.appendChild(span1);
                        orderorder.appendChild(span2);
                        orderorder.appendChild(span3);

                        totalcost += prices;

                    } else if (getmon.checked == true) {
                        span1.innerHTML = "Geld abheben: " + amount + "€";
                        span2.innerHTML = " Gebühren: " + price + "€";
                        deletebutton.addEventListener("click", function (): void {
                            deleteanorder(price, event, gesamt);
                        });
                        divbank.appendChild(orderorder);
                        orderorder.appendChild(deletebutton);
                        orderorder.appendChild(span1);
                        orderorder.appendChild(span2);

                        totalcost += price;
                    }
                    break;

                default:
                    break;
            }


            gesamt.innerHTML = totalcost.toFixed(2);


        }
        function deleteanorder(_prices: number, _event: any, _gesamt: any): void {
            totalcost -= _prices;
            _gesamt.innerHTML = "" + totalcost.toFixed(2);

            let deletespan: Node = <Node>_event.target;
            let getparentdiv: Node = <Node>deletespan.parentNode;
            let getgrandparentdiv: Node = <Node>getparentdiv.parentNode;
            getgrandparentdiv.removeChild(getparentdiv);
        }


    }
    function resetOrder(_event: Event): void {
        diveinkauf.innerHTML = "";
        divhaushalt.innerHTML = "";
        divbank.innerHTML = "";
        gesamt.innerHTML = "";
        totalcost = 0;
        
        //disable all fieldsets again
        fieldeinkauf.disabled = true;
        fieldhaus.disabled = true;
        fieldbank.disabled = true;
    }


}