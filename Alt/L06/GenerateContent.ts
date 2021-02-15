namespace Nachbarschaftshilfe_06 {
    export interface Task {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Task[];
    }

    export function generateContent(_data: Data): void {

        for (let category in _data) {
            let items: Task[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "Shopping":
                    group = createShopping(items, category);
                    break;
                case "Supermarked":
                    group = createSupermarked(items, category);
                    break;
                case "Household":
                    group = createHousehold(items, category);
                    break;
                case "Withdrawals":
                    group = createWithdrawals(items, category);
                    break;
                default:
                    break;
            }
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }


    function createShopping(_items: Task[], _category: string): HTMLElement | null {
        let input: HTMLInputElement = document.createElement("input");
        input.name = _category;
        input.type = "text";
        input.setAttribute("list", "shopping");
        input.id = "Shoppinginput";

        let datalist: HTMLDataListElement = document.createElement("datalist");
        datalist.id = "shopping";
        input.append(datalist);
        for (let item of _items) {

            let option: HTMLOptionElement = document.createElement("option");
            option.value = item.name;
            option.setAttribute("name", item.name);
            option.setAttribute("price", item.price.toFixed(2));
            option.textContent = item.name;
            datalist.appendChild(option);

        }
        return input;

    }
    function createSupermarked(_items: Task[], _category: string): HTMLElement | null {

        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let input: HTMLInputElement = document.createElement("input");

            input.id = item.name;
            input.value = item.name;
            input.type = "radio";
            input.name = _category;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;

            group.appendChild(input);
            group.appendChild(label);

        }

        return group;
    }
    function createHousehold(_items: Task[], _category: string): HTMLElement | null {
        let input: HTMLInputElement = document.createElement("input");
        input.name = _category;
        input.type = "text";
        input.setAttribute("list", "household");

        let datalist: HTMLDataListElement = document.createElement("datalist");
        datalist.id = "household";
        input.append(datalist);
        for (let item of _items) {

            let option: HTMLOptionElement = document.createElement("option");
            option.value = item.name;
            option.setAttribute("name", item.name);
            option.setAttribute("price", item.price.toFixed(2));
            option.textContent = item.name;
            datalist.appendChild(option);

        }
        return input;

    }
    function createWithdrawals(_items: Task[], _category: string): HTMLElement | null {

        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let input: HTMLInputElement = document.createElement("input");

            input.id = item.name;
            input.value = item.name;
            input.type = "radio";
            input.name = _category;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;

            group.appendChild(input);
            group.appendChild(label);

        }
        return group;
    }
}