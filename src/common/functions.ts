import { exchangeRates, ICurrency } from "@/common/config";

export const getExchangeResult = (
  value: number,
  fromCurrencyName: string,
  toCurrencyName: string
): number => {
  const fromCurrency = findCurrencyByName(fromCurrencyName);
  const toCurrency = findCurrencyByName(toCurrencyName);

  const exchangeRate = getExchangeRate(fromCurrency, toCurrency);

  return +(value * exchangeRate).toFixed(2);
};

const getExchangeRate = (
  fromCurrency: ICurrency | undefined,
  toCurrency: ICurrency | undefined
): number => {
  if (fromCurrency && toCurrency)
    return fromCurrency.inverseRate * toCurrency.rate;

  return 0;
};

const findCurrencyByName = (name: string): ICurrency | undefined => {
  const found = exchangeRates.find((currency) => currency.name === name);
  return found;
};
