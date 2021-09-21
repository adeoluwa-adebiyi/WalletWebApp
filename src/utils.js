import { NAIRA_SYMBOL, DOLLAR_SYMBOL, EURO_SYMBOL, BITCOIN_SYMBOL, POUND_SYMBOL } from "./config/data";

const currencySymbolHash = {
    "NGN": NAIRA_SYMBOL,
    "USD": DOLLAR_SYMBOL,
    "EUR": EURO_SYMBOL,
    "BTC": BITCOIN_SYMBOL,
    "GBP": POUND_SYMBOL
}

export const getCurrencySymbol = (currency) => {
    const symbol = currencySymbolHash[currency];
    return symbol ?? "$$";
}

export const transformWalletData = (value) => value?({...value,balance: { ...value, currency: "NGN", currencySymbol: getCurrencySymbol(value.currency)} }):({})