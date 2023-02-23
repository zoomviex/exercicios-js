function figureController(){
  let side = parseFloat(document.querySelector(".numSides").value)
  let measure = document.querySelector(".sidesMeasure")
  
  if(side == 3){
    console.log("triangulo");
  }
  else if(side == 4){
    console.log("quadrado");
  }
  else if(side == 5){
    console.log("pentágono");
  }
}