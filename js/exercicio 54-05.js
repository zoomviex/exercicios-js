let averageScore = 0;

// Controlling area // 
function gradeController(){
    // Data entrance // 
    let grade1 = parseFloat(document.querySelector("#grade--1").value);
    let grade2 = parseFloat(document.querySelector("#grade--2").value);
    let grade3 = parseFloat(document.querySelector("#grade--3").value);
    let grade4 = parseFloat(document.querySelector("#grade--4").value);
    let result = averageCalculator(grade1, grade2, grade3, grade4);
    // Data exit //
    document.querySelector("#saidaTexto").innerHTML = result;
}

function showExame(){
    let formExame = document.querySelector("#form--exame");
    formExame.style.display ='block';
}

function exameController(){
    // Data entrance //
    let exame = parseFloat(document.querySelector("#final--exame").value);
    let result = newGradeController(exame);
    // Data exit //
    document.querySelector("#saidaTexto").innerHTML = result;
}

// Processing area // 
function  averageCalculator(g1 = 0, g2 = 0, g3 = 0, g4 = 0){
    let result = "";
    averageScore = (g1 + g2 + g3 + g4) / 4;

    if(averageScore >= 7){
        result = `Aprovado - Media: ${averageScore}`;
    }else{
        result = `Exame - Media: ${averageScore}`;
        showExame();
    }
    return result;
}

function newGradeController(finalExame = 0){
    let result = "";
    let newAverage = (averageScore + finalExame) / 2;

    if(newAverage >= 5){
        result = `Aprovado em exame - Media: ${newAverage}`;
    }else{
        result = `Reprovado em exame - Media: ${newAverage}`;
    }
    return result; 
}