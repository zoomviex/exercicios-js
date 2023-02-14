function quantLitros() {
   var comprimento = parseFloat(document.getElementById("pista").value);
   var totalVoltas = parseInt(document.getElementById("totalVoltas").value);
   var pit = parseInt(document.getElementById("abastecimento").value);
   var consumoL = parseFloat(document.getElementById("consumo").value);
   var litros = (((comprimento / 1000) * totalVoltas) / consumoL) / pit;
   document.getElementById("saidaTexto").innerHTML = `Serão necessários ${litros}L por abastecimento;`
}