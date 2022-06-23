import * as rawExchangeRates from "@/common/toEurRatesRaw.json";

export const exchangeRates = Object.values(rawExchangeRates) as ICurrency[];

export interface ICurrency {
  code: string;
  alphaCode: string;
  numericCode: string;
  name: string;
  rate: number;
  date: string;
  inverseRate: number;
}
