window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.lang = "pt"
recognition.start()

recognition.addEventListener('result', onSpeak) //Obrigatóriamente tem que ser "Result", deve ser uma palavra reservada como o "click"

const dica = document.querySelector(".dica")

function onSpeak(event) {
    const chute = event.results[0][0].transcript
    chuteValido(chute)
    resultadoCerto(chute)
}

function chuteValido(chute) {
    const erro = document.querySelector(".erro")
    const incorreto = document.querySelector(".incorreto")
    const num = +chute
    if(!parseInt(chute)){
        erro.classList.add("aparecer")
        incorreto.classList.remove("aparecer")
    }else if(num < menorValor || num > maiorValor){
        incorreto.classList.add("aparecer")
        erro.classList.remove("aparecer")
    }else{
        exibirResultado(chute)
        erro.classList.remove("aparecer")
        incorreto.classList.remove("aparecer")
    }
    return
}

function exibirResultado(chute) {
    const valor = document.querySelector(".box")
    valor.innerHTML = chute
}

function resultadoCerto(chute) {
    if(parseInt(chute) === numSecreto){
        document.body.innerHTML = `
            <h2>PARABENS!! Você acertou!!</h2>
            <h3>O número secreto era ${numSecreto}!</h3>
            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(chute > numSecreto) {
        dica.innerHTML = `
        <p>O número secreto é menor <i class="fa-regular fa-hand-point-down"></i></p>
        `
    }else{
        dica.innerHTML = `
        <p>O número secreto é maior <i class="fa-regular fa-hand-point-up"></i></p>
        `
    }
}
recognition.addEventListener('end', () => recognition.start())

document.body.addEventListener('click', e => {
    if(e.target.id === "jogarNovamente"){
        window.location.reload()
    }
})
