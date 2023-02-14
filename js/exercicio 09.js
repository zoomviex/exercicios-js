function macaCheck() {
   let maca = (document.getElementById('quantMacas').value)
   let macaPreco

   if (maca >= 12){
       macaPreco = maca * 0.25
       document.getElementById("saidaTexto").innerHTML = `O valor de ${maca} maçãs é R$${macaPreco.toFixed(2)}`
   }else{
       macaPreco = maca * 0.30
       document.getElementById("saidaTexto").innerHTML = `O valor de ${maca} maçãs é R$${macaPreco.toFixed(2)}`
   }
}