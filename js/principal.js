var titulo = document.querySelector("h1");
titulo.textContent = "Teste título";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
tdImc.textContent = imc;

// console.log(imc);
// console.log(paciente);
// // console.log(tdPeso);
// // console.log(peso);
// console.log(tdAltura);
// console.log(altura);


