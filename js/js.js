let captacaoDados = document.getElementById('form');//criando var captacaoDados que é proveniente da id 'form'

let quadro = "normal";

function notRefresh() { //Função principal que ativa as outras embaixo
    event.preventDefault() //Comando para nao atualizar

    let peso = captacaoDados.querySelector('.peso'); //captando value de peso
    peso.value = Number(peso.value);//transformando valor de peso de string para number
    if(peso.value === 'NaN'){//Se peso.value é NaN, imprimir {}
        document.getElementById('resultado').style.display = 'flex';
        document.getElementById('resultado').innerHTML = `Peso inválido`;
        return;
    }

    let altura = captacaoDados.querySelector('.altura');//captando value de altura
    altura.value = Number(altura.value);//transformando valor de altura de string para number
    if(altura.value === 'NaN'){//Se altura.value é NaN, imprimir {}
        document.getElementById('resultado').style.display = 'flex';
        document.getElementById('resultado').innerHTML = ` Altura inválida`;
        return;
    }

    let imc = peso.value / ((altura.value / 100) ** 2);//criando var imc e seu valor é a formula do IMC (dividi altura/100 porque o input está pedindo em cm, e a formula é em metros)
    imc = imc.toFixed(2);//limitando casas decimais

    if (imc < 18.5){//Se 'imc' menor que 18.5, executar {...}
        let quadro = "Abaixo do peso";//var quadro = abaixo do peso
        document.getElementById('resultado').style.display ='flex';//Mudando display do 'resultado', vir de 'none' para 'flex'
        document.getElementById('resultado').style.backgroundColor = 'dodgerblue';//background de 'resultado' se altera
        document.getElementById('resultadoImc').innerHTML = ` ${imc}`;//substituir o id "resultadoImc" pela var 'imc'
        document.getElementById('resultadoQuadro').innerHTML = ` ${quadro}`//mudar a id "resultadoQuadro" pela var 'quadro'

    } else if (imc >= 18.5 && imc < 24.9){
        let quadro = "Peso normal";
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.backgroundColor = 'chartreuse';
        document.getElementById('resultadoImc').innerHTML = ` ${imc}`; 
        document.getElementById('resultadoQuadro').innerHTML = ` ${quadro}`
    } else if (imc >= 24.9 && imc < 29.9){
        let quadro = "Sobrepeso";
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.backgroundColor = 'darkgoldenrod';
        document.getElementById('resultadoImc').innerHTML = ` ${imc}`; 
        document.getElementById('resultadoQuadro').innerHTML = ` ${quadro}`
    } else if (imc >= 29.9 && imc < 34.9){
        let quadro = "Obesidade grau 1";
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.backgroundColor = 'crimson';
        document.getElementById('resultadoImc').innerHTML = ` ${imc}`; 
        document.getElementById('resultadoQuadro').innerHTML = ` ${quadro}`
    } else if (imc >= 34.9 && imc < 39.9){
        let quadro = "Obesidade grau 2";
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.backgroundColor = 'firebrick';
        document.getElementById('resultadoImc').innerHTML = ` ${imc}`; 
        document.getElementById('resultadoQuadro').innerHTML = ` ${quadro}`
    } else if (imc > 39.9){
        let quadro = "Obesidade grau 3";
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.backgroundColor = 'maroon';
        document.getElementById('resultadoImc').innerHTML = ` ${imc}`; 
        document.getElementById('resultadoQuadro').innerHTML = ` ${quadro}`
    }}