let btns = document.getElementsByClassName('botoes-nav');

btns[0].addEventListener('mouseover', () => {
    btns[0].style.background = '#ff5349'
    btns[0].style.transition = 'all 0.1s'
    btns[0].style.boxShadow = '0px 1px 6px black'
})
btns[1].addEventListener('mouseover', () => {
    btns[1].style.background = '#ff5349'
    btns[1].style.transition = 'all 0.1s'
    btns[1].style.boxShadow = '0px 1px 6px black'
})
btns[2].addEventListener('mouseover', () => {
    btns[2].style.background = '#ff5349'
    btns[2].style.transition = 'all 0.1s'
    btns[2].style.boxShadow = '0px 1px 6px black'
})

btns[0].addEventListener('mouseout', ()=>{
    btns[0].style = '';
});
btns[1].addEventListener('mouseout', ()=>{
    btns[1].style = '';
});
btns[2].addEventListener('mouseout', ()=>{
    btns[2].style = '';
});