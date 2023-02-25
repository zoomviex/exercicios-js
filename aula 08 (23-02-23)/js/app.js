function montarVetor(){
  const B = [];
  for (let index = 0; index < 10; index++) {
    let valor = Math.floor(Math.random() * 100) + 1;
    
    if (index % 2 == 0){
      B[index] = 0;
    }else{
      B[index] = 1;
    }
  }
  document.querySelectorAll(".saidaTexto").item.innerHTML = B;
}