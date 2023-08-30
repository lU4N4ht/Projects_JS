'use strict'

function mudarCadastro(){
    const nomeAtual = document.getElementById('texto-nome')
    const mudarNome = prompt('Qual é o seu nome?')
    nomeAtual.textContent = `Nome: ${mudarNome}`
    const idadeAtual = document.getElementById('texto-idade')
    const mudarIdade = prompt('Qual é a sua idade?')
    idadeAtual.textContent = `Idade: ${mudarIdade}`
    const cidadeAtual = document.getElementById('texto-cidade')
    const mudarCidade = prompt('Qual é a sua cidade?')
    cidadeAtual.textContent = `Cidade: ${mudarCidade}`
    const generoAtual = document.getElementById('texto-genero')
    const mudarGenero = prompt('Qual é o seu gênero?')
    generoAtual.textContent = `Gênero: ${mudarGenero}`;

    if(mudarGenero == 'feminino' || mudarGenero == 'Feminino'){
        generoAtual.className = ''
        generoAtual.classList.add('roxo')
    } else if (mudarGenero == 'masculino'|| mudarGenero == 'Masculino'){
        generoAtual.className = ''
        generoAtual.classList.add('verde')
    }
}
const botaoCadastrar = document.getElementById('cadastrar')
botaoCadastrar.addEventListener('click', mudarCadastro)