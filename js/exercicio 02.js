function calculoFtoC(){
   let tempF = parseFloat(document.getElementById("temp").value);
   let tempC = (tempF - 32) * 5 / 9;

   alert(`${tempF}°F  é igual a ${tempC}C°`)
}