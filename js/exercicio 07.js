function quantLitros() {
  let comprimento = parseFloat(document.getElementById("pista").value);
  let totalVoltas = parseInt(document.getElementById("totalVoltas").value);
  let pit = parseInt(document.getElementById("abastecimento").value);
  let consumoL = parseFloat(document.getElementById("consumo").value);
  let litros = (((comprimento / 1000) * totalVoltas) / consumoL) / pit;

  
   document.getElementById("saidaTexto").innerHTML = `Serão necessários ${litros}L por abastecimento;`
}