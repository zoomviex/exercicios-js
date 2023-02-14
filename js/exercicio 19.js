function sum() {
   let number1= parseFloat(document.getElementById("n-1").value);
   let number2= parseFloat(document.getElementById("n-2").value);
   let number3= parseFloat(document.getElementById("n-3").value);


   if (number1 > number2 && number3 > number2){
       document.getElementById("saidaTexto").innerHTML = `${number1 + number3}`
   }else if (number1 > number3 && number2 > number3){
       document.getElementById("saidaTexto").innerHTML = `${number1 + number2}`
   }else if (number1 < number2 && number1 < number3){
       document.getElementById("saidaTexto").innerHTML = `${number2 + number3}`
   }else{
       window.alert('Digite três valores diferentes')
   }
}