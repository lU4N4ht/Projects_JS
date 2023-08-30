'use strict'
const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')
const item8 = document.getElementById('item8')
const texto8 = document.getElementById('texto8')

let contadorCliques = 0;

function mudarCor() {
    //Toggle alterna a cor
    forma1.classList.toggle('amarelo')
}
function mudarForma() {
    forma2.classList.toggle('rodar')
    forma2.classList.toggle('circulo')
}
function mudarImagem() {
    forma3.classList.toggle('imagem')
}
function mudarTamanho() {
    forma4.classList.toggle('tamanho')
}
function mudarRodar() {
    forma5.classList.toggle('rodar')
}
function mudarLugar() {
    contadorCliques++;

    if (contadorCliques === 1) {
        forma6.classList.toggle('cutucar')
        alert("Para de me cutucar.");
    } else if (contadorCliques === 2) {
        forma6.classList.toggle('cutucar')
        alert("Vai cutucar outro botão! 😠");    
    } else if (contadorCliques === 3) {
        forma6.classList.toggle('cutucar')
        alert("Já falei para parar! 😡");
    } else {
        forma6.classList.toggle('transparente')
        forma6.classList.toggle('cursor')
        alert("Quero ver você me cutucar agora!");
    }
}
function mudarTransparencia() {
    forma7.classList.toggle('transparente')
}
function mudarTema() {
    forma8.classList.toggle('formaClaro')
    item8.classList.toggle('fundoEscuro')
    texto8.classList.toggle('letraClara')
}
forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarImagem)
forma4.addEventListener('click', mudarTamanho)
forma5.addEventListener('click', mudarRodar)
forma6.addEventListener('click', mudarLugar)
forma7.addEventListener('click', mudarTransparencia)
forma8.addEventListener('click', mudarTema)