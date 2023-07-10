//Definição de variáveis / Captura de elementos DOM
let btns = document.getElementsByClassName('botoes-nav');

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

