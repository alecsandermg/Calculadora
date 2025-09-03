const botoes = document.querySelector(".botoes")
const botao = botoes.querySelector(".Botao")
const linha1= document.querySelector("#linha1")
const linha2= document.querySelector("#linha2")

botao.addEventListener("click", leitura)

function leitura()
{
linha1.innerHTML+= 'lido'
linha2.innerHTML+= 'lido'
}
console.log(nomePessoa)