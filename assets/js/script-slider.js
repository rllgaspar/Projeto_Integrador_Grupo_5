const slider = document.querySelectorAll('.slider');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
let slideAtivo = 0;

function esconderSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function mostrarSlider() {
    slider[slideAtivo].classList.add('on')
}

function proximoSlider() {
    esconderSlider()
    if(slideAtivo === slider.length -1) {
        slideAtivo = 0
    } else {
        slideAtivo++
    }
    mostrarSlider()
}

function anteriorSlider() {
    esconderSlider()
    if(slideAtivo === 0) {
        slideAtivo = slider.length -1
    } else {
        slideAtivo--
    }
    mostrarSlider()
}

setInterval(proximoSlider, 5000)

btnAnterior.addEventListener('click', anteriorSlider)
btnProximo.addEventListener('click', proximoSlider)