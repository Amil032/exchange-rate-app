var myHeaders = new Headers();
myHeaders.append("apikey", "t7a0UtLt3FDeA4X3xvJC0cARYdaUnDsl");

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
