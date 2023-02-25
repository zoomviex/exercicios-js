function figureController() {
  let sideQuant = parseFloat(document.getElementById("numSides").value);
  let geometricalForm = "";

  if (sideQuant == 3) {
    geometricalForm = "triangle";
    document.getElementById("inputs-sides").innerHTML = `
       <p>
           Indique os valores de cada lado do triângulo para calcular seuperímetro:
       </p>
       <form action="">
           <input type="number" id="l-1"  placeholder="Tamanho em cm">
           <input type="number" id="l-2" placeholder="Tamanho em cm">
           <input type="number" id="l-3" placeholder="Tamanho em cm"> 
           <button type="button" onclick="trianglePerimeter()">Verificar</button>
           <p id="saidaTexto"></p>
       </form>`;
  } else if (sideQuant == 4) {
    geometricalForm = "quadrado";
    document.getElementById("inputs-sides").innerHTML = `
       <p>
           Indique o valor dos lados do quadrado para calcular seuperímetro:
       </p>
       <form action="">
           <input type="number" id="l-1"  placeholder="Tamanho em cm">
           <button type="button" onclick="squareArea()">Verificar</button>
           <p id="saidaTexto"></p>
       </form>`;
  } else if (sideQuant == 5) {
    geometricalForm = "pentagon";
    document.getElementById("inputs-sides").innerHTML = `
       <p>
           A figura é um pentágono.
       </p>`;
  } else {
    window.alert("Digite um valo válido! Ex: 3, 4 ou 5");
  }
}

function trianglePerimeter() {
  let side1 = parseFloat(document.getElementById("l-1").value);
  let side2 = parseFloat(document.getElementById("l-2").value);
  let side3 = parseFloat(document.getElementById("l-3").value);

  let perimetro = side1 + side2 + side3;

  if ((geometricalForm = "triangle")) {
    document.getElementById(
      "saidaTexto"
    ).innerHTML = `O perímetro do triângulo é igual a ${perimetro}cm`;
  } else if (
    side1 + side2 > side3 ||
    side3 + side2 > side1 ||
    side1 + side3 > side2
  ) {
    window.alert(`Não é um triângulo!`);
  }
}

function squareArea() {
  let side1 = parseFloat(document.getElementById("l-1").value);

  let area = side1 ** 2;

  if ((geometricalForm = "quadrado")) {
    document.getElementById(
      "saidaTexto"
    ).innerHTML = `A área do quadrado é igual a ${area}cm²`;
  }
}
