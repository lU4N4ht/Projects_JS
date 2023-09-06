'script'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultipos3e4 = document.getElementById('botao-multiplos-3-e-4')
const botaoMostrarNumerosMultipos3ou4 = document.getElementById('botao-multiplos-3-ou-4')
const botaoMostrarNumerosAnteriores = document.getElementById('botao-mostrar-numero-anterior')
const botaoMostrarNumerosAnterioresImpares = document.getElementById('botao-mostrar-numero-anterior-impar')
const botaoMostrarNumerosTriplos = document.getElementById('botao-mostrar-numero-triplo')
const botaoMostrarNumerosPrimo = document.getElementById('botao-mostrar-numero-primo')

function mostrarTodosNumeros() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-todos-numeros')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosPares() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-numeros-pares')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 2 == 0) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
            }
        }
    }
}
function mostrarNumerosImpares() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-numeros-impares')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 2 == 1) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
            }
        }
    }
}
function mostrarNumerosMultiplos3e4() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-multiplos-3-e-4')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
            }
        }
    }
}
function mostrarNumerosMultiplos3ou4() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-multiplos-3-ou-4')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 3 == 0 || numeros[contador] % 4 == 0) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
            }
        }
    }
}
function mostrarNumerosAnteriores() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-numero-anterior')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] - 1
            container.appendChild(novoSpan)
        }
    }
}
function mostrarNumerosAnterioresImpares() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-numero-anterior-impar')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if (numeros[contador] % 2 == 0) {
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[contador] - 1
                container.appendChild(novoSpan)
            }
        }
    }
}
function mostrarNumerosTriplos() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-numero-triplo')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] * 3
            container.appendChild(novoSpan)
        }
    }
}
function mostrarNumerosPrimos() {
    const numeros = (document.getElementById('numeros').value.split(','))
    const container = document.getElementById('container-numero-primo')
    const ultimoIndice = numeros.length
    container.replaceChildren('')

    if (numeros != '') {
        for (let contador = 2; contador <= Math.sqrt(ultimoIndice); contador++) {
            if (numeros[contador] % contador == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] 
            container.appendChild(novoSpan)
        }
    }
}
}
botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)
botaoMostrarNumerosMultipos3e4.addEventListener('click', mostrarNumerosMultiplos3e4)
botaoMostrarNumerosMultipos3ou4.addEventListener('click', mostrarNumerosMultiplos3ou4)
botaoMostrarNumerosAnteriores.addEventListener('click', mostrarNumerosAnteriores)
botaoMostrarNumerosAnterioresImpares.addEventListener('click', mostrarNumerosAnterioresImpares)
botaoMostrarNumerosTriplos.addEventListener('click', mostrarNumerosTriplos)
botaoMostrarNumerosPrimo.addEventListener('click', mostrarNumerosPrimos)