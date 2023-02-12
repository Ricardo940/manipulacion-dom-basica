const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btSuma = document.getElementById('btnSuma');
const resultado =document.getElementById('resultado');
const form =document.getElementById('form');

form.addEventListener("submit",btnOnClic);

function btnOnClic(event){
    resultado.innerText = 'Resultado = ' + (Number(input1.value)+ Number(input2.value));
    event.preventDefault();
}




