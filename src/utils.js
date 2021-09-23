import { NAIRA_SYMBOL, DOLLAR_SYMBOL, EURO_SYMBOL, BITCOIN_SYMBOL, POUND_SYMBOL, USER_PROFILE_KEY } from "./config/data";

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

export const getUserProfile = () => {
    const userProfileData = JSON.parse(localStorage.getItem(USER_PROFILE_KEY));
    return userProfileData ?? { email: "akuybe@gmail.com" }
}

export const delayComputation = (computation,ms=5000) => {
    return setTimeout(computation,ms);
}