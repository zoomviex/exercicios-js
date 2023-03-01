let numArray = []

function getArray(){
  for (n = 0;numArray.length < 10; n++){
    numArray[n] = Math.floor(Math.random() * 30)
    console.log(numArray)
  } 
}