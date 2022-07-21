import axios from "axios";
var myHeaders = new Headers();
myHeaders.append("apikey", "DJVpz5A5xkml04X6fbAivp3okQ5l8lay");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export const rateServiceConertTo = (from,to,amount) => {
  return fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
};

export const rateServiceSymbols = () => {
 return fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
//  .then(response => response.text())
//  .then(result => console.log(result))
//  .catch(error => console.log('error', error));
};
export const rateServiceLatest =async (base,symbols) => {
//   var myHeaders = new Headers();
// myHeaders.append("apikey", "9UqoOhiPilJxtW67gDuXFqCKahmK8QV7");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

  return fetch(`https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${base}`, requestOptions)
  
  
}
// .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));