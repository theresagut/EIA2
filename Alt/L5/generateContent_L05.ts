namespace L05_Haushaltshilfe {
    console.log("startgenerateContent");

    export interface Category {
        name: string; //name of input
        items: string[]; //article, unit, price

    }

    export interface Data {
        [category: string]: Category[]; //category=fieldset
    }


    export function generateContent(_data: Data): void {

        //get form
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");

        //alle fieldsets erstellen 
        let fieldsets: HTMLFieldSetElement = document.createElement("fieldset");
        fieldsets.id = "fieldsets";
        //+ fieldsets deaktivieren
        let fieldeinkauf: HTMLFieldSetElement = document.createElement("fieldset");
        fieldeinkauf.id = "fieldeinkauf";
        fieldeinkauf.disabled = true;
        let fieldhaus: HTMLFieldSetElement = document.createElement("fieldset");
        fieldhaus.id = "fieldhaus";
        fieldhaus.disabled = true;
        let fieldbank: HTMLFieldSetElement = document.createElement("fieldset");
        fieldbank.id = "fieldbank";
        fieldbank.disabled = true;

        //fieldsets benennen
        let legendfieldsets: HTMLLegendElement = document.createElement("legend");
        legendfieldsets.innerHTML = "Aufgaben";
        let legendeinkauf: HTMLLegendElement = document.createElement("legend");
        legendeinkauf.innerHTML = "Einkauf";
        let legendhaus: HTMLLegendElement = document.createElement("legend");
        legendhaus.innerHTML = "Haushaltsarbeiten";
        let legendbank: HTMLLegendElement = document.createElement("legend");
        legendbank.innerHTML = "Bankangelgenheiten";

        //fieldsets an formtag anhängen
        form.appendChild(fieldsets);
        form.appendChild(fieldeinkauf);
        form.appendChild(fieldhaus);
        form.appendChild(fieldbank);

        //legends an fieldsets anhängen
        fieldsets.appendChild(legendfieldsets);
        fieldeinkauf.appendChild(legendeinkauf);
        fieldhaus.appendChild(legendhaus);
        fieldbank.appendChild(legendbank);


        //for of --> Wert
        //for in --> schlüssel
        for (let category in _data) {
            let items: Category[] = _data[category]; // items = die gefundene Kategorie, also Drink, Containers oder Extras
            /*  console.log("items:", items); //Alles innerhalb eines gefundenen fieldsets
             console.log("_data[category]:", _data[category]);
             console.log("catgeory:", category); //fieldset string, also nur der Name
             console.log("_data:", _data); //Alle fieldsets*/


            let group: HTMLElement | null = null;
            switch (category) {
                case "fieldsets":
                    group = createTasks(items);
                    break;
                case "fieldeinkauf":
                    group = createEinkauf(items);
                    break;
                case "fieldhaus":
                    group = createHouse(items);
                    break;
                case "fieldbank":
                    group = createBank(items);
                    break;


                default:
                    break;
            }

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }



    }
    function createTasks(_items: Category[]): HTMLElement | null {
        console.log("starttasks");
        let group: HTMLDivElement = document.createElement("div");


        for (let property of _items) {


            let radiotasks: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            radiotasks.name = property.name;
            radiotasks.type = "radio";
            radiotasks.id = property.items[0];
            radiotasks.value = property.items[0];

            label.htmlFor = radiotasks.id;
            label.textContent = property.items[0];

            group.appendChild(label);
            group.appendChild(radiotasks);

            console.log("group:", group);


        }
        return group;
    }


    function createEinkauf(_items: Category[]): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        let selectarticle: HTMLSelectElement = document.createElement("select");
        let amount: HTMLInputElement = document.createElement("input");
        let selectstore: HTMLSelectElement = document.createElement("select");
        let okbutton: HTMLButtonElement = document.createElement("button");
        okbutton.id = "buttoneinkauf";
        okbutton.type = "button";
        okbutton.textContent = "OK";



        for (let property of _items) {

            switch (property.name) {
                case "Groceries":
                    selectarticle.name = property.name;
                    group.appendChild(selectarticle);
                    let optionarticle: HTMLOptionElement = document.createElement("option");
                    optionarticle.setAttribute("price", property.items[2]);
                    optionarticle.setAttribute("unit", property.items[1]);
                    optionarticle.value = property.items[0];
                    optionarticle.text = property.items[0];
                    selectarticle.appendChild(optionarticle);
                    break;

                case "Amount":
                    amount.type = "number";
                    amount.name = property.name;
                    amount.min = "0.5";
                    amount.max = "10.0";
                    amount.step = "0.5";
                    amount.id = property.items[0];
                    amount.placeholder = "Anzahl";
                    group.appendChild(amount);
                    break;

                case "Store":
                    selectstore.name = property.name;
                    group.appendChild(selectstore);

                    let optionstore: HTMLOptionElement = document.createElement("option");
                    optionstore.value = property.items[0];
                    optionstore.text = property.items[0];
                    selectstore.appendChild(optionstore);
                    break;
                default:
                    break;
            }

            group.appendChild(okbutton);
        }
        return group;

    }
    function createHouse(_items: Category[]): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        let amount: HTMLInputElement = document.createElement("input");
        let okbutton: HTMLButtonElement = document.createElement("button");
        okbutton.id = "buttonhausarbeiten";
        okbutton.type = "button";
        okbutton.textContent = "OK";


        for (let property of _items) {
            switch (property.name) {
                case "Householdhelp":
                    let checkboxen: HTMLInputElement = document.createElement("input");
                    let label: HTMLLabelElement = document.createElement("label");
                    checkboxen.type = "checkbox";
                    checkboxen.name = property.name;
                    checkboxen.id = property.items[0];
                    checkboxen.value = property.items[0];
                    checkboxen.setAttribute("price", property.items[2]);
                    checkboxen.setAttribute("unit", property.items[1]);
                    label.htmlFor = checkboxen.id;
                    label.textContent = property.items[0];

                    group.appendChild(label);
                    group.appendChild(checkboxen);
                    break;

                case "Amount":
                    amount.type = "number";
                    amount.name = property.name;
                    amount.min = "1.0";
                    amount.max = "15.0";
                    amount.step = "1.0";
                    amount.id = property.items[0];
                    amount.placeholder = "Anzahl";
                    group.appendChild(amount);
                    break;

                default:
                    break;
            }
            group.appendChild(okbutton);
        }
        return group;
    }

    function createBank(_items: Category[]): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");

        let spanamount: HTMLSpanElement = document.createElement("span");
        let amount: HTMLInputElement = document.createElement("input");
        let okbutton: HTMLButtonElement = document.createElement("button");
        okbutton.id = "buttonbankange";
        okbutton.type = "button";
        okbutton.textContent = "OK";

        for (let property of _items) {

            switch (property.name) {
                case "Bank":
                    let radiobank: HTMLInputElement = document.createElement("input");
                    let label: HTMLLabelElement = document.createElement("label");
                    radiobank.name = property.name;
                    radiobank.type = "radio";
                    radiobank.id = property.items[0];
                    radiobank.setAttribute("price", property.items[2]);
                    radiobank.setAttribute("unit", property.items[1]);

                    radiobank.value = property.items[0];

                    label.htmlFor = radiobank.id;
                    label.textContent = property.items[0];

                    group.appendChild(label);
                    group.appendChild(radiobank);
                    break;

                case "Amount":
                    amount.type = "range";
                    amount.name = property.name;
                    amount.min = "20.0";
                    amount.max = "200.0";
                    amount.step = "10.0";
                    amount.value = "50.0";
                    amount.id = property.items[0];

                    group.appendChild(spanamount);
                    spanamount.innerHTML = "20€ - 200€";
                    group.appendChild(amount);
                    break;

                default:
                    break;
            }

            group.appendChild(okbutton);

        }
        return group;
    }
}