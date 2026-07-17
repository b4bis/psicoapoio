const perguntas = [

    {
        pergunta: "Com que frequência você se sente preocupado(a)?",
        respostas: [
            "Nunca",
            "Às vezes",
            "Frequentemente",
            "Sempre"
        ]
    },

    {
        pergunta: "Você sente dificuldade para relaxar?",
        respostas: [
            "Nunca",
            "Raramente",
            "Às vezes",
            "Sempre"
        ]
    },

    {
        pergunta: "Como está sua qualidade de sono?",
        respostas: [
            "Muito boa",
            "Boa",
            "Regular",
            "Ruim"
        ]
    },

    {
        pergunta: "Você sente tensão durante o dia?",
        respostas: [
            "Nunca",
            "Pouco",
            "Frequentemente",
            "Sempre"
        ]
    }

];

let indice = 0;
let pontos = 0;
let respostaSelecionada = -1;

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const progresso = document.getElementById("progresso");
const botaoProximo = document.getElementById("proximo");

mostrarPergunta();

function mostrarPergunta() {

    respostaSelecionada = -1;

    pergunta.innerHTML = `(${indice + 1}/${perguntas.length}) ${perguntas[indice].pergunta}`;

    respostas.innerHTML = "";

    perguntas[indice].respostas.forEach((texto, i) => {

        const botao = document.createElement("button");

        botao.innerHTML = texto;

        botao.classList.add("opcao");

        botao.onclick = () => {

            document.querySelectorAll(".opcao").forEach(opcao =>
                opcao.classList.remove("selecionada")
            );

            botao.classList.add("selecionada");

            respostaSelecionada = i;

        };

        respostas.appendChild(botao);

    });

    progresso.style.width = ((indice) / perguntas.length) * 100 + "%";

    if (indice === perguntas.length - 1) {

        botaoProximo.innerHTML = "Finalizar";

    } else {

        botaoProximo.innerHTML = "Próxima";

    }

}

botaoProximo.onclick = () => {

    if (respostaSelecionada === -1) {

        alert("Escolha uma resposta antes de continuar.");

        return;

    }

    pontos += respostaSelecionada;

    indice++;

    if (indice < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

};

function mostrarResultado() {

    progresso.style.width = "100%";

    let texto = "";
    let cor = "";

    if (pontos <= 3) {

        texto = "😊 Seu resultado indica poucos sinais de ansiedade.";
        cor = "#16A34A";

    }

    else if (pontos <= 7) {

        texto = "🙂 Você apresenta sinais leves de ansiedade.";
        cor = "#D97706";

    }

    else {

        texto = "😟 Seu resultado indica um nível elevado de ansiedade. Caso esses sentimentos sejam frequentes, procure ajuda profissional.";
        cor = "#DC2626";

    }

    document.querySelector(".container").innerHTML = `

        <h1>Resultado</h1>

        <h2 style="color:${cor}; margin:25px 0;">
            ${texto}
        </h2>

        <h3 style="margin-bottom:30px;">
            Pontuação: <strong>${pontos}</strong> de 12
        </h3>

        <button onclick="location.reload()">
            Refazer Quiz
        </button>

        <button onclick="window.location.href='index.html'"
        style="margin-top:15px;">
            Voltar ao Início
        </button>

    `;

}

// ==========================
// MODO ESCURO
// ==========================

const tema = document.getElementById("tema");

// Recupera o tema salvo
if(localStorage.getItem("tema") === "dark"){

    document.body.classList.add("dark");
    tema.innerHTML = "☀️";

}

tema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        tema.innerHTML = "☀️";
        localStorage.setItem("tema","dark");

    }else{

        tema.innerHTML = "🌙";
        localStorage.setItem("tema","light");

    }

});