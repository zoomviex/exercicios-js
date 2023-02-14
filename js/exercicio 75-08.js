function oddBetween(){
   let exit = ""

   for (let numberList = 100; numberList <= 200; numberList = numberList + 1) {
   let forOdd = numberList % 2; 
   if (forOdd != 0) {
       exit += numberList + (", ")
       } 
   }

   document.querySelector("#saidaTexto").innerHTML = exit;
}