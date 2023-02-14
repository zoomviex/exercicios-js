function numberController(){
   let exit = ""

   let highest = 0;
   let lowest = 1000;
   let randomNumber = 0;

   for (let fiftyNumbers = 1; fiftyNumbers <= 50; fiftyNumbers++){
       randomNumber = Math.floor(Math.random()* 1000) + 1; 

       if (randomNumber > highest){
           highest = randomNumber
       } else if (randomNumber < lowest){
           lowest = randomNumber
       }
   }
   
   document.querySelector("#saidaTexto").innerHTML = exit = `No maior numero foi ${highest} e menor foi ${lowest} e a média entre os dois foi ${(highest + lowest) /2}`
}