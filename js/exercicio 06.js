function calculoLiq(){
   let iniOdo = (document.getElementById("inicio").value);
   let fimOdo = (document.getElementById("fim").value);
   let total = (document.getElementById("total").value);
   let litros = (document.getElementById("litros").value);
   let mediaCons = (fimOdo - iniOdo) / litros;
   let custoLitro = 4.87;
   let pagLiq = total - (litros * custoLitro);
   let saidaTexto = document.getElementById("saidaTexto");

   saidaTexto.innerHTML = `<p> Média de consumo em KM/l: ${mediaCons.toFixed(2)}</p>
   <p> e o faturamento do dia foi de R$${pagLiq.toFixed(2)}</p>`;
}