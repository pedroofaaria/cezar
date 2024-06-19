const perguntas = [
    {
    enunciado: "Futsal é melhor que vôlei?",
    alternativas: [
    "Sim",
    "Não"
    ]
    },
    {
    
    enunciado: "Sushi ou churrasco?",
    alternativas: [
    "Shushi",
    "Churrasco"
    ]
    },
    {
    enunciado: "Vocẽ prefere homem ou mulher",
    alternativas: [
    "Adoro homens",
    "gosto das do job"
    ]
    },
    {
    enunciado: "neymar ou chico moedas",
    alternativas: [
    "Neymar o homem",
    "Chico eu tenteeeeei"
    ]
    },
    {
    enunciado: "Você joga FREE FIRE?",
    alternativas: [
    "Sim",
    "Não"
    ]
    
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();