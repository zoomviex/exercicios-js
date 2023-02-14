function calculoCaixas(){
   let comp =parseFloat(document.getElementById("comprimento").value)
   let lar = parseFloat(document.getElementById("largura").value)
   let alt = parseFloat(document.getElementById("altura").value)
   let areaT = 2*((lar*comp)+(lar*alt)+(comp*alt))
   let quantCx = areaT/1.5

   alert(`A área total da cozinha é de ${areaT}m² e serão necessárias ${Math.ceil(quantCx)} caixas de azuleijos`)
}