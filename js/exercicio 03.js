function calculoCtoF(){
   let tempC2 = parseFloat(document.getElementById("temp02").value);
   let tempF2 = (tempC2 * 9/5) + 32

   alert(`${tempC2}°C  é igual a ${tempF2}F°`)
}