// fase 0.1 - Criando personagens
const personagens = [
    {
        nome: "Mario",
        atributos: {
            velocidade: 4,
            manobrabilidade: 3,
            poder: 3
        },
        pontos: 0
    },
    {
        nome: "Peach",
        atributos: {
            velocidade: 3,
            manobrabilidade: 4,
            poder: 2
        },
        pontos: 0
    },
    {
        nome: "Yoshi",
        atributos: {
            velocidade: 2,
            manobrabilidade: 4,
            poder: 3
        },
        pontos: 0
    },
    {
        nome: "Bowser",
        atributos: {
            velocidade: 5,
            manobrabilidade: 2,
            poder: 5
        },
        pontos: 0
    },
    {
        nome: "Luigi",
        atributos: {
            velocidade: 3,
            manobrabilidade: 4,
            poder: 4
        },
        pontos: 0
    },
    {
        nome: "Mario",
        atributos: {
            velocidade: 2,
            manobrabilidade: 2,
            poder: 5
        },
        pontos: 0
    },
];

// fase 0.2 - Criando pistas
const pistas = [
    "reta",
    "curva",
    "confronto"
]

// fase 1 - Escolhendo os personagens
const jogador1 = personagens[0];
const jogador2 = personagens[3];

console.log(`🏁🚦Corrida entre ${jogador1.nome} e ${jogador2.nome} começando!`);

// fase 2 - Criando função para escolher a pista
function escolherPista() {
    return pistas[Math.floor(Math.random() * (3 - 0) + 0)];
}

// fase 3 - Criando função de rolar dados
function rolarDado() {
    return Math.floor(Math.random() * (7 - 1) + 1);
}

// fase 4 - Executar o jogo
for (let i = 0; i < 5; i++) {
    console.log(`🏁Rodada numero ${i + 1}`)

    const tipoBlocoAtual = escolherPista();
    // const tipoBlocoAtual = "reta";
    console.log(`bloco atual: ${tipoBlocoAtual}\n`);
    // Caso a pista seja uma reta, serão realizadas as rolagens e os resultados somados com o atributo de VELOCIDADE
    if (tipoBlocoAtual === "reta") {
        const rolagemJogador1 = rolarDado();
        const rolagemJogador2 = rolarDado();

        const resultadoRolagemMaisAtributoJogador1 = rolagemJogador1 + jogador1.atributos.velocidade;
        const resultadoRolagemMaisAtributoJogador2 = rolagemJogador2 + jogador2.atributos.velocidade;

        let vencedor;

        if (resultadoRolagemMaisAtributoJogador1 > resultadoRolagemMaisAtributoJogador2) {
            vencedor = jogador1.nome;
            jogador1.pontos++;
        } else if (resultadoRolagemMaisAtributoJogador1 < resultadoRolagemMaisAtributoJogador2) {
            vencedor = jogador2.nome;
            jogador2.pontos++;
        } else {
            vencedor = null;
        }

        console.log("Aqui apenas os mais rápidos sobrevivem!\n");
        console.log(`${jogador1.nome} 🎲 rolou um dado de velocidade! ${rolagemJogador1} + ${jogador1.atributos.velocidade} = ${resultadoRolagemMaisAtributoJogador1}`);
        console.log(`${jogador2.nome} 🎲 rolou um dado de velocidade! ${rolagemJogador2} + ${jogador2.atributos.velocidade} = ${resultadoRolagemMaisAtributoJogador2}\n`);
        console.log(`${vencedor != null ? `${vencedor} ganha essa rodada! ${vencedor} ganha 1 ponto.\n` : "Disputa acirrada! Parece que houve um empate."}\n`);
    } else if (tipoBlocoAtual === "curva") {
        const rolagemJogador1 = rolarDado();
        const rolagemJogador2 = rolarDado();

        const resultadoRolagemMaisAtributoJogador1 = rolagemJogador1 + jogador1.atributos.manobrabilidade;
        const resultadoRolagemMaisAtributoJogador2 = rolagemJogador2 + jogador2.atributos.manobrabilidade;

        let vencedor;

        if (resultadoRolagemMaisAtributoJogador1 > resultadoRolagemMaisAtributoJogador2) {
            vencedor = jogador1.nome;
            jogador1.pontos++;
        } else if (resultadoRolagemMaisAtributoJogador1 < resultadoRolagemMaisAtributoJogador2) {
            vencedor = jogador2.nome;
            jogador2.pontos++;
        } else {
            vencedor = null;
        }

        console.log("Espero que estejam com os cintos apertados!\n");
        console.log(`${jogador1.nome} 🎲 rolou um dado de manobrabilidade! ${rolagemJogador1} + ${jogador1.atributos.manobrabilidade} = ${resultadoRolagemMaisAtributoJogador1}`);
        console.log(`${jogador2.nome} 🎲 rolou um dado de manobrabilidade! ${rolagemJogador2} + ${jogador2.atributos.manobrabilidade} = ${resultadoRolagemMaisAtributoJogador2}\n`);
        console.log(`${vencedor != null ? `${vencedor} ganha essa rodada! ${vencedor} ganha 1 ponto.\n` : "Disputa acirrada! Parece que houve um empate."}\n`);
    } else if (tipoBlocoAtual === "confronto") {
        const rolagemJogador1 = rolarDado();
        const rolagemJogador2 = rolarDado();

        const resultadoRolagemMaisAtributoJogador1 = rolagemJogador1 + jogador1.atributos.poder;
        const resultadoRolagemMaisAtributoJogador2 = rolagemJogador2 + jogador2.atributos.poder;

        let vencedor, perdedor;

        if (resultadoRolagemMaisAtributoJogador1 > resultadoRolagemMaisAtributoJogador2) {
            vencedor = jogador1.nome;
            perdedor = jogador2.nome;

            if(jogador2.pontos > 0) jogador2.pontos--;
        } else if (resultadoRolagemMaisAtributoJogador1 < resultadoRolagemMaisAtributoJogador2) {
            vencedor = jogador2.nome;
            perdedor = jogador1.nome;

            if(jogador1.pontos > 0) jogador1.pontos--;
        } else {
            vencedor = null;
        }

        console.log("Tens o que é necessário para aniquilar seu adversário?!\n");
        console.log(`${jogador1.nome} 🎲 rolou um dado de poder! ${rolagemJogador1} + ${jogador1.atributos.poder} = ${resultadoRolagemMaisAtributoJogador1}`);
        console.log(`${jogador2.nome} 🎲 rolou um dado de poder! ${rolagemJogador2} + ${jogador2.atributos.poder} = ${resultadoRolagemMaisAtributoJogador2}\n`);
        console.log(`${vencedor != null ? `${vencedor} ganha essa rodada! ${perdedor} perde 1 ponto.\n` : "Disputa acirrada! Parece que houve um empate."}\n`);
    };
};

// fase 5 - Declarando o vencedor da corrida
console.log("Pontuação");
console.log(`${jogador1.nome} - ${jogador1.pontos}`);
console.log(`${jogador2.nome} - ${jogador2.pontos}`);
if (jogador1.pontos > jogador2.pontos) {
    // jogador 1 vence
    console.log(`${jogador1.nome} é o(a) vencedor da corrida!\n`);
} else if (jogador1.pontos < jogador2.pontos) {
    // jogador 2 vence
    console.log(`${jogador2.nome} é o(a) vencedor da corrida!\n`);
} else {
    // empate
    console.log("Parece que ambos os jogadores deram o seu máximo e finalizaram em um empate!\n");
}