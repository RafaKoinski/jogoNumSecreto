const menorValor = 2
const maiorValor = 5

function gerarNum(){
    return parseInt(Math.random() * ( (maiorValor+1) - menorValor ) + menorValor)
}

const mnValor = document.getElementById("mnValor")
const mrValor = document.getElementById("mrValor")
mnValor.innerHTML = menorValor
mrValor.innerHTML = maiorValor
const mudarMnValor = document.getElementById("menorValor")
mudarMnValor.innerHTML = menorValor
const mudarMaiorValor = document.getElementById("maiorValor")
mudarMaiorValor.innerHTML = maiorValor
const numSecreto = gerarNum()
console.log("O número secreto é: ", numSecreto);