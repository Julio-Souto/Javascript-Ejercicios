'use strict'

// Al cargar la página
document.querySelector('#innerHTML').innerHTML = '<strong>Julio Souto</strong>'
document.querySelector('#textContent').textContent = 'Julio Souto'

// document.querySelector('#append').textContent = document.querySelector('#append').textContent + 'mundo'
document.querySelector('#append').textContent += 'mundo'

document.querySelector('#prepend').textContent = 'Hola ' + document.querySelector('#prepend').textContent

document.getElementById('value').value = 'Julio'

// Funciones

function escribirMensaje (mensaje) {
  btn.value = mensaje
}

// Eventos

const btn = document.querySelector('#click-dblclick')
btn.addEventListener(
  'click',
  () => {
    escribirMensaje('Hice un click')
  }
)

document.querySelector('#click-dblclick').addEventListener(
  'dblclick',
  (event) => {
    event.target.value = 'Hice dos clicks'
  }
)

const textoOri = document.querySelector(".origen");
let textoDes = document.getElementById("destino")

document.getElementById("copiar").addEventListener("click",copiar)

function copiar(){
  if(!textoOri.value.length<1)
    textoDes.textContent = textoDes.textContent + textoOri.value
}

document.getElementById("cdn").addEventListener("click",mostrar)

function mostrar(){
  document.querySelector(".oculto").style.display="block"
}

document.querySelector(".cerrar").addEventListener("click",cerrar)

function cerrar(){
  document.querySelector(".oculto").style.display="none"
}

const list = document.getElementById("add-remove-class")

document.getElementById("addClass").addEventListener("click",() => {
  list.classList.add("addlist");
})

document.getElementById("removeClass").addEventListener("click",() => {
  list.classList.remove("addlist");
})

document.querySelector("h1").addEventListener("click",() => {
  alert("Hola mundo")
})

document.getElementById("miBoton").addEventListener("click",() => {
  document.getElementById("miBoton").style.display="none"
})

document.getElementById("meMuero").addEventListener("mouseover",() => {
  document.getElementById("meMuero").style.display="none"
})

document.getElementById("miCaja").addEventListener("click", () => {
  alert(document.getElementById("miCaja").value)
})

document.getElementById("isNaN").addEventListener("input", () => {
  if(!isNaN(document.getElementById("isNaN").value))
    document.getElementById("pColor").style.color = "red"
  else
    document.getElementById("pColor").style.color = "black"
})