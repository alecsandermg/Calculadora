const botoes = document.querySelector(".botoes")
const botao = botoes.querySelector(".Botao")
const linha1= document.querySelector("#linha1")
const linha2= document.querySelector("#linha2")

var display1 = document.getElementById("linha1")
var equation = ''
 
function insert(n)
{
    var display1 = document.getElementById("row1")
    number = display1.innerHTML
    equation += n 
    if (n.includes('/100*')){
        n = '%'
    }
    if (n.includes('**2')){
        n = '^2'
        calculate()
        equation = document.getElementById("row2").innerHTML
        document.getElementById("row1").innerHTML = ''
        document.getElementById("row1").innerHTML = equation
    }
    if (n.includes('*')){
        n = 'X'
    }

    if (number.length < 26 ){
    display1.innerHTML = number + n
    }
    
}

function clean()
{
    document.getElementById("row1").innerHTML = ''
    document.getElementById("row2").innerHTML = ''
    equation = ''
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
    result.innerHTML = eval(equation)
    document.getElementById("row1").innerHTML = ''
    equation = ''
    }
    else{
    window.alert("Digite alguma coisa...")
    }
    return
}