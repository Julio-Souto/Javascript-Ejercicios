'use strict'

document.getElementById("b_ej1").addEventListener("click", () => {
  let perimetro = 4*Number(prompt("Lado del cuadrado",1))
  document.getElementById("r_eje1").textContent = "Perimetro del cuadrado: "+perimetro
})

document.getElementById("b_ej2").addEventListener("click", () => {
  let area = Number(prompt("Base del triangulo",1))*Number(prompt("Altura del triangulo",1))/2
  document.getElementById("r_ej2").textContent = "Area del triangulo: "+area
})

document.getElementById("b_ej3").addEventListener("click", () => {
  let suma = Number(prompt("Numero 1",1))+Number(prompt("Numero 2",1))
  let producto = Number(prompt("Numero 3",1))*Number(prompt("Numero 4",1))
  document.getElementById("r_ej3").textContent = "Suma: "+suma+"\n Producto: "+producto
})

document.getElementById("b_ej4").addEventListener("click", () => {
  let num1 = Number(prompt("Numero 1",1))
  let num2 = Number(prompt("Numero 2",1))
  let num3 = Number(prompt("Numero 3",1))
  let num4 = Number(prompt("Numero 4",1))
  let suma = num1+num2+num3+num4
  let producto = num1*num2*num3*num4
  document.getElementById("r_ej4").textContent = "Suma: "+suma+"\n Producto: "+producto
})

let positivo = 0
let negativo = 0
document.getElementById("b_ej5").addEventListener("click", () => {
  let num1 = Number(prompt("Numero 1",1))
  let num2 = Number(prompt("Numero 2",1))
  let num3 = Number(prompt("Numero 3",1))
  let num4 = Number(prompt("Numero 4",1))
  countPositivo(num1);
  countPositivo(num2);
  countPositivo(num3);
  countPositivo(num4);
  document.getElementById("r_ej5").textContent = "Positivos: "+positivo+"\n Negativos: "+negativo
})

function countPositivo(num){
  if(num>=0)
    positivo++;
  else
    negativo++;
}

document.getElementById("b_ej6").addEventListener("click", () => {
  let edad = Number(prompt("Edad",1))
  if(edad>=18)
    alert("Puede conducir")
  else
    alert("No puede conducir")
})

document.getElementById("b_ej7").addEventListener("click", () => {
  let nota = Number(prompt("Edad",1))
  let calificacion = ""
  if(nota>=9&&nota<=10)
    calificacion="Sobresaliente"
  else if(nota<9&&nota>=7)
    calificacion="Notable"
  else if(nota<7&&nota>=6)
    calificacion="Bien"
  else if(nota<6&&nota>=5)
    calificacion="Suficiente"
  else if(nota<5&&nota>=3)
    calificacion="Insuficiente"
  else if(nota<3&&nota>=0)
    calificacion="Muy deficiente"
  else
    calificacion="Nota no valida"
  document.getElementById("r_ej7").textContent = calificacion
})

