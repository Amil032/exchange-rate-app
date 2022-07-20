import axios from "axios";
var myHeaders = new Headers();
myHeaders.append("apikey", "9UqoOhiPilJxtW67gDuXFqCKahmK8QV7");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export const rateServiceConertTo = () => {
  return fetch("https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount={amount}", requestOptions)
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

  const request = await fetch(`https://api.apilayer.com/fixer/latest?symbols=${symbols}&base=${base}`, requestOptions)
  const response = await request.text();
  const data=await response
  return await data
  
}
// .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));