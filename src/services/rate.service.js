var myHeaders = new Headers();
myHeaders.append("apikey", "YXOgKmNWzgNNI5rRAFrCMaU1ZSIs5Fp6");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export const rateServiceConertTo = (from, to, amount) => {
  return fetch(
    `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  );
};

export const rateServiceSymbols = () => {
  return fetch("https://api.apilayer.com/fixer/symbols", requestOptions);
};
export const rateServiceLatest = async (base, symbols) => {
  return fetch(
    `https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${base}`,
    requestOptions
  );
};
