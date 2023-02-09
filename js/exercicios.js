// Exercício 01 //
function calculoArea(){
   let inputRaio = document.getElementById("raio").value;
   let result = 3.14 * (inputRaio**2);

   alert(`Resultado: ${result}`);
}

// Exercício 02//
function calculoFtoC(){
   let tempF = parseFloat(document.getElementById("temp").value);
   let tempC = (tempF - 32) * 5 / 9;

   alert(`${tempF}°F  é igual a ${tempC}C°`)
}

// Exercício 03 //
function calculoCtoF(){
   let tempC2 = parseFloat(document.getElementById("temp02").value);
   let tempF2 = (tempC2 * 9/5) + 32

   alert(`${tempC2}°C  é igual a ${tempF2}F°`)
}

// Exercício 04 //
function calculoWtoM(){
   let potenciaW = parseFloat(document.getElementById("watts").value);
   let lar = parseFloat(document.getElementById("largura").value);
   let comp = parseFloat(document.getElementById("comprimento").value);
   let result = ((lar*comp) * 18)/potenciaW;
   let saidaTexto = document.getElementById("")

   alert(`Serão necessárias ${result} lâmpadas de ${potenciaW}watts para iluminar um cômodo de ${comp*lar}m²`)
}

// Exercício 05 // 
