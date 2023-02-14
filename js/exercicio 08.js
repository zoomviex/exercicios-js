function ageCheck() {
   let anoEleitoral = (document.getElementById("anoVoto").value);
   let anoNascimento = (document.getElementById("anoNasc").value);
   let idade = anoEleitoral - anoNascimento;

   if (idade >= 18){
       document.getElementById("saidaTexto").innerHTML = `Você é elegível ao voto`
   }else{
       document.getElementById("saidaTexto").innerHTML = `Você é inelegível ao voto`
   }
}