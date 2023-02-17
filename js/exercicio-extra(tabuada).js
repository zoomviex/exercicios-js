function multipliTableController(){
  let number = parseInt(document.querySelector("#user--number").value);
  let result = document.querySelector("#saidaTexto");
  let exit = ""


  for(let i = 1; i <= 10; i++){
    exit += `${number} X ${i} = ${number * i}</br>`
    
    result.innerHTML = exit; 
   }
  }