function calculoWtoM(){
   let potenciaW = parseFloat(document.getElementById("watts").value);
   let lar = parseFloat(document.getElementById("largura").value);
   let comp = parseFloat(document.getElementById("comprimento").value);
   let result = ((lar*comp) * 18)/potenciaW;
   let saidaTexto = document.getElementById("")

   alert(`Serão necessárias ${result} lâmpadas de ${potenciaW}watts para iluminar um cômodo de ${comp*lar}m²`)
}