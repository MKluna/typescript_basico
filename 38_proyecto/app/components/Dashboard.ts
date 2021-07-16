import { CurrencyService } from "../service/CurrencyService";
import { ChangeBehavior } from "../models/ChangeBehavior";
import { Currency } from "../models/Currency";

export class Dashboard {
    currencies: Currency[];
    currencyService: CurrencyService;
    el: HTMLTableElement

    constructor(public target: string, public sourceUrl: string) {
        // instiance service
        this.currencyService = new CurrencyService(sourceUrl);

        // get element
        this.el = document.getElementById(target) as HTMLTableElement;

        // Initialize
        this.init();
    }

    private async init() {
        // retrieve data
        this.currencies = await this.currencyService.getAll();

        // render table
        this.render();
    }

    private render(): void {
        let rows: string[] = [];

        // flight number
        this.currencies.forEach(item => {
            rows.push(`<tr>
                <td class="has-text-centered" style="width:60px;">
                    <i class="flag-icon flag-icon-${item.country.code}"></i>
                </td>
                <td>${item.country.name}</td>
                <td class="has-text-right" style="width:100px;">
                    ${item.valueToMoneyFormat}
                </td>
                <td class="has-text-centered ${item.behaviour === ChangeBehavior.down ? 'has-text-danger' : ''}" style="width:60px;">
                    <i class="fas fa-caret-${item.behaviour === ChangeBehavior.up ? 'up' : 'down'} fa-2x"></i>
                </td>
            </tr>`);
        });

        this.el.querySelector('tbody').innerHTML = rows.join('');
    }
}