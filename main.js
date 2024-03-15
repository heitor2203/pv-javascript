const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".botao");
for(let i=0;i < botoes.length;i++){
botoes[i].onclick = function(){

for(let j=0; j<botoes.length; j++){
botoes[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo");
 
botoes[j].classList.remove("ativo");
texto[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo")
textos[i].classList.add("ativo")
}

const contadores = document.querySelectorAll(".contador")
const tempoObjetivol = new Date ("2024-10-05t00:00:00")
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo - tempoAtual;