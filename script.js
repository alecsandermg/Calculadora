const botoes = document.querySelector(".botoes")
const botao = botoes.querySelector(".Botao")
const linha1= document.querySelector("#linha1")
const linha2= document.querySelector("#linha2")

var display1 = document.getElementById("linha1")

function insert(n)
{
    var display1 = document.getElementById("row1")
    number = display1.innerHTML
    if (number.length < 26 ){
    display1.innerHTML = number + n
    }
    
}

function clean()
{
    document.getElementById("row1").innerHTML = ''
    document.getElementById("row2").innerHTML = ''
}

function back(){
    var typed = document.getElementById("row1").innerHTML
    document.getElementById("row1").innerHTML = typed.substring(0, typed.length -1)
}

function calculate()
{
    var typed = document.getElementById("row1").innerHTML
    if (typed){
    var result = document.getElementById("row2")
    result.innerHTML = eval(typed)
    document.getElementById("row1").innerHTML = ''
    }
    else{
    window.alert("Digite alguma coisa...")
    }
}