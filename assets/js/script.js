//Definição de variáveis / Captura de elementos DOM

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

let fecharBMW = document.getElementById('fechar-bmw')
let fecharLambo = document.getElementById('fechar-lambo')
let fecharPorsche = document.getElementById('fechar-porsche')
let fecharChevy = document.getElementById('fechar-chevy')
let fecharSupra = document.getElementById('fechar-supra')
let fecharMustang = document.getElementById('fechar-mustang')
let fecharAudi = document.getElementById('fechar-audi')

//Funções

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

fecharBMW.addEventListener('click', ()=>{
    popBMW.style.display = 'none';
})
fecharLambo.addEventListener('click', ()=>{
    popLambo.style.display = 'none';
})
fecharPorsche.addEventListener('click', ()=>{
    popPorsche.style.display = 'none';
})
fecharChevy.addEventListener('click', ()=>{
    popChevy.style.display = 'none';
})
fecharSupra.addEventListener('click', ()=>{
    popSupra.style.display = 'none';
})
fecharMustang.addEventListener('click', ()=>{
    popMustang.style.display = 'none';
})
fecharAudi.addEventListener('click', ()=>{
    popAudi.style.display = 'none';
})



