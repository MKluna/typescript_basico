import { Currency } from "../models/Currency";
import { Country } from "../models/Country";

export class CurrencyService {
    constructor(public sourceUrl: string) { }

    async getAll(): Promise<Currency[]> {
        let promise = await fetch(this.sourceUrl);
        return parse(await promise.json());

        function parse(data: any[]): Currency[] {
            return data.map(x => {
                return new Currency(
                    new Country(x.country.code, x.country.name, x.country.locale, x.country.currency),
                    x.value,
                    x.behavior
                )
            });
        }
    }
}