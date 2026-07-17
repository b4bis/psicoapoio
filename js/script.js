// =========================
// MODO CLARO / ESCURO
// =========================

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        botaoTema.innerHTML = "☀️";
    }else{
        botaoTema.innerHTML = "🌙";
    }
});


// =========================
// QUIZ
// =========================

function resultadoQuiz(){

    const resposta = Number(document.getElementById("resposta").value);

    const resultado = document.getElementById("resultado");

    switch(resposta){

        case 0:
            resultado.innerHTML =
            "😊 Você demonstra poucos sinais de ansiedade. Continue cuidando da sua saúde mental!";
            break;

        case 1:
            resultado.innerHTML =
            "🙂 Você apresenta um nível leve de ansiedade. Reserve momentos para descansar e praticar atividades relaxantes.";
            break;

        case 2:
            resultado.innerHTML =
            "😟 Seu nível de ansiedade parece moderado. Exercícios de respiração e conversar com alguém de confiança podem ajudar.";
            break;

        case 3:
            resultado.innerHTML =
            "⚠️ Seu resultado indica um nível elevado de ansiedade. Considere procurar apoio psicológico caso esses sentimentos sejam frequentes.";
            break;

    }

}


// =========================
// FRASES MOTIVACIONAIS
// =========================

const frases = [

"Você é mais forte do que imagina. 💙",

"Um passo de cada vez já é progresso. 🌿",

"Cuidar de si mesmo é uma prioridade. ✨",

"Respire. Dias difíceis também passam. ☀️",

"Você merece descanso e paz. 🌸",

"A sua história ainda está sendo escrita. 📖",

"Cada pequeno avanço importa. 💚",

"Não tenha medo de pedir ajuda quando precisar. 🤝",

"Hoje é uma nova oportunidade para recomeçar. 🌈",

"Você conseguiu superar muitos desafios até aqui. ⭐"

];

function novaFrase(){

    const indice = Math.floor(Math.random() * frases.length);

    document.getElementById("frase").innerHTML = frases[indice];

}



// =========================
// RESPIRAÇÃO
// =========================

function respirar(){

    const circulo = document.getElementById("circulo");

    circulo.style.transform = "scale(1.5)";

    circulo.innerHTML = "<h3>Inspirar</h3>";

    setTimeout(() => {

        circulo.style.transform = "scale(1)";

        circulo.innerHTML = "<h3>Expirar</h3>";

    },4000);

}



// =========================
// BOTÃO COMEÇAR AGORA
// =========================

const botaoComecar = document.querySelector(".btn");

botaoComecar.addEventListener("click",()=>{

    document.getElementById("quiz").scrollIntoView({

        behavior:"smooth"

    });

});



// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});



// =========================
// BOTÃO AGENDAR
// =========================

const botoes = document.querySelectorAll(".psicologo button");

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        alert("Agendamento realizado com sucesso! (Demonstração)");

    });

});



// =========================
// MENSAGEM DE BOAS-VINDAS
// =========================

window.onload = ()=>{

    setTimeout(()=>{

        alert("🌿 Bem-vindo(a) ao Mente Leve!\n\nCuide da sua saúde mental todos os dias.");

    },500);

}