namespace L03_Haushaltshilfe {
    window.addEventListener("load", handleLoad);

    let totalCost: number = 0;
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    let confirm: HTMLButtonElement = <HTMLButtonElement>document.getElementById("confirm");
    let cash: HTMLInputElement = <HTMLInputElement>document.getElementById("cash");
    let shopping: HTMLInputElement = <HTMLInputElement>document.getElementById("shopping");
    let house: HTMLInputElement = <HTMLInputElement>document.getElementById("house");

    let grocery: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("grocery");
    let money: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("money");
    let household: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("household");
    let cart: HTMLButtonElement = <HTMLButtonElement>document.getElementById("cart");
    let getCash: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getCash");
    let householdDone: HTMLButtonElement = <HTMLButtonElement>document.getElementById("householdDone");
    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    let totalPrice: HTMLLabelElement = <HTMLLabelElement>document.getElementById("totalPrice");

    function handleLoad(): void {
        cart.addEventListener("click", handleChange);
        getCash.addEventListener("click", handleChange);
        householdDone.addEventListener("click", handleChange);
        submit.addEventListener("click", sendOrder);
    }

    function handleChange(_event: Event): void {
        let table: HTMLDivElement = <HTMLDivElement>document.getElementById("table");
        let table2: HTMLDivElement = <HTMLDivElement>document.getElementById("table2");
        let table3: HTMLDivElement = <HTMLDivElement>document.getElementById("table3");
        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);

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
                    let itemPrice: number = Number(item.getAttribute("price"));
                    let menge: number = Number(formData.get("Menge"));
                    let einheit: string = String(item.getAttribute("unit"));
                    let markt: string = String(formData.get("Bevorzugter Supermarkt"));

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
                    let money: string = String(item.getAttribute("value"));
                    if (money == "Geld abheben") {
                        let bargeld: number = Number(formData.get("bargeld"));

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
                    })
                    row.appendChild(td);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    table2.appendChild(row);

                    form.reset();
                    break;
            }
            break;
                case "toDo"; :
            let itemCost: number = Number(item.getAttribute("price"));
            td.innerHTML = "" + entry[1];
            td2.innerHTML = "" + itemCost + "€";
        })

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

}
    