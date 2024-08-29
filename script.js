const perguntas = [
    {
        enunciado: "qual o nome do ninja conhecido como relampago amarelo de konoha?"
        alernativas: [
            { texto: "minato", pontuacao: 3 },
            { texto: "naruto", pontuacao: 1 }
        ]
    },
    {
        enunciado: "quem é o setimo hokage?",
        alternativas: [
            { texto: "Kakashi hatake", pontuacao: 3 },
            { texto: "Konohamaru", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Quem é o grande vilão no arco da quarta grande guerra ninja?",
        alternativas: [
            { texto: "Orochimaru", pontuacao: 1 },
            { texto: "Madara uchiha", pontuacao: 3 }
        ]
    },
    {
        enunciado: "Quantas são as bestas com cauda?",
        alternativas: [
            { texto: "8", pontuacao: 1 },
            { texto: "10", pontuacao: 3 }
        ]
    },
    {
        enunciado: "Qual o nome do atual kazekage",
        alternativas: [
            { texto: "Kankuro", pontuacao: 1 },
            { texto: "Gaara da areia", pontuacao: 3 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
