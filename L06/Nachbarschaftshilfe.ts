namespace Nachbarschaftshilfe_06 {
    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    let url: string = "https://eia-repository-mb.herokuapp.com/";
    async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        form = <HTMLFormElement>document.querySelector("form");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        form.addEventListener("change", handleChange);

        displayOrder();
        submit.addEventListener("click", sendOrder);
    }
    async function sendOrder(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }
    function displayOrder(): void {
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";
        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            if (item == null)
                continue;
            let itemPrice: number = Number(item.getAttribute("price"));

            switch (entry[0]) {
                case "Supermarked":
                    order.innerHTML += item.value + "<br>";
                    break;
                case "Amount":
                    break;
                case "Shopping":
                    let amount: number = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " x " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Household":
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                case "Withdrawals":
                    let money: number = Number(formData.get("Money"));
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
}