//Definição de variáveis / Captura de elementos DOM
let btns = document.getElementsByClassName('botoes-nav');

let bmw = document.getElementById('bmw');
let lambo = document.getElementById('lambo');
let porsche = document.getElementById('porsche');
let chevy = document.getElementById('chevy');
let supra = document.getElementById('supra');
let mustang = document.getElementById('mustang');
let audi = document.getElementById('audi');

let popBMW = document.getElementById('listagem-bmw-aberto')
let popLambo = document.getElementById('listagem-lambo-aberto')
let popPorsche = document.getElementById('listagem-porsche-aberto')
let popChevy = document.getElementById('listagem-chevy-aberto')
let popSupra = document.getElementById('listagem-supra-aberto')
let popMustang = document.getElementById('listagem-mustang-aberto')
let popAudi = document.getElementById('listagem-audi-aberto')

let fechar = document.getElementsByClassName('fechar')
let popup = document.getElementsByClassName('popup')

//Funções

let btnUm = (e)=>{
    btns[0].style.background = '#ff5349'
    btns[0].style.transition = 'all 0.1s'
    btns[0].style.boxShadow = '0px 1px 6px black'
};
let btnDois = (e)=>{
    btns[1].style.background = '#ff5349'
    btns[1].style.transition = 'all 0.1s'
    btns[1].style.boxShadow = '0px 1px 6px black'
};
let btnTres = (e)=>{
    btns[2].style.background = '#ff5349'
    btns[2].style.transition = 'all 0.1s'
    btns[2].style.boxShadow = '0px 1px 6px black'
};

bmw.addEventListener('click', ()=>{
    popBMW.style.display = 'flex';
})
lambo.addEventListener('click', ()=>{
    popLambo.style.display = 'flex';
})
porsche.addEventListener('click', ()=>{
    popPorsche.style.display = 'flex';
})
chevy.addEventListener('click', ()=>{
    popChevy.style.display = 'flex';
})
supra.addEventListener('click', ()=>{
    popSupra.style.display = 'flex';
})
mustang.addEventListener('click', ()=>{
    popMustang.style.display = 'flex';
})
audi.addEventListener('click', ()=>{
    popAudi.style.display = 'flex';
})



//Eventos

btns[0].addEventListener('mouseover', btnUm)
btns[1].addEventListener('mouseover', btnDois)
btns[2].addEventListener('mouseover', btnTres)

btns[0].addEventListener('mouseout', ()=>{
    btns[0].style = ''
});
btns[1].addEventListener('mouseout', ()=>{
    btns[1].style = ''
});
btns[2].addEventListener('mouseout', ()=>{
    btns[2].style = ''
});

