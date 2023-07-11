const slider = document.querySelectorAll('.slider');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
let slideAtivo = 0;

const imagens = document.getElementById('img')
const imagenPortifolio = document.querySelectorAll('.portifolio-carrosel img');
const btnAnteriorPortifolio = document.getElementById('btn-anterior-portifolio')
const btnProximoPortifolio = document.getElementById('btn-proximo-portifolio')
let idx = 0;

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

function portifolioSliderProximo(){
    idx++;
    if(idx > imagenPortifolio.length -3){
        idx = 0;
    }
    imagens.style.transform = `translateX(${-idx * 400}px)`;
}

function portifolioSliderAnterior(e){
    idx--;
    if(idx < imagenPortifolio.length -1 ){
        idx = 0;
    }
    imagens.style.transform = `translateX(${-idx * 400}px)`;
}


setInterval(proximoSlider, 5000)

btnAnterior.addEventListener('click', anteriorSlider)
btnProximo.addEventListener('click', proximoSlider)

btnAnteriorPortifolio.addEventListener('click', portifolioSliderAnterior)
btnProximoPortifolio.addEventListener('click', portifolioSliderProximo)