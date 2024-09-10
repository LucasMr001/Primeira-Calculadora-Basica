var resul = document.getElementById('resultado');
var som = document.getElementById("soma");
var sub = document.getElementById('subtrai');
var mul = document.getElementById('multiplica');
var divi = document.getElementById('dividi');
sub.addEventListener('click', subtrair);
divi.addEventListener('click', dividir);
som.addEventListener('click', somar);
mul.addEventListener('click', multiplicar);
function somar() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 + num2;
    resul.innerText = `O valor da soma é ${res}`;
} 

function subtrair(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 - num2;
    resul.innerText = `O valor da subtração é ${res}`
}

function multiplicar(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 * num2;
    resul.innerText = `O valor da multiplicação é ${res}`;
}

function dividir(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 / num2;
    resul.innerText = `O valor da divisão é ${res}`;

}