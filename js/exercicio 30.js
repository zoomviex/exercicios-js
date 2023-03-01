var alunos = [];

function maincontroller() {
  var nome = document.querySelector("#nome").value;
  var nota1 = parseFloat(document.querySelector("#nota1").value);
  var nota2 = parseFloat(document.querySelector("#nota2").value);

  if (cadastrar(nome, nota1, nota2)) {
    //mostrar("Cadastrado!");
    alert("Cadastrado!");
  }
}

function cadastrar(nome = "", nota1 = 0, nota2 = 0) {
  var aluno = nome + ", " + nota1 + ", " + nota2 + ", " + (nota1 + nota2 / 2);
  alunos[alunos.length] = aluno;
  return true;
}

function listar() {
  var lista = "";
  for (var index = 0; index < alunos.length; index++) {
    lista += alunos[index] + "<br>";
  }
  return lista;
}

function mostrar(texto = "") {
  document.querySelector("#saida").innerHTML = texto;
}



//ToDo: executar e analisar a divisão de responsabilidade de cada função.
