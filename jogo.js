const readline = require("readline");

const PONTOS_POR_ACERTO = 10;

const perguntas = [
  {
    enunciado: "Qual é a linguagem usada para este jogo?",
    alternativas: {
      A: "Python",
      B: "JavaScript",
      C: "C++",
      D: "PHP",
    },
    correta: "B",
  },
  {
    enunciado: "Qual comando usamos para executar um arquivo JavaScript no Node.js?",
    alternativas: {
      A: "run",
      B: "start",
      C: "node",
      D: "execute",
    },
    correta: "C",
  },
  {
    enunciado: "Qual destes tipos é primitivo em JavaScript?",
    alternativas: {
      A: "Number",
      B: "Function",
      C: "Array",
      D: "Date",
    },
    correta: "A",
  },
  {
    enunciado: "Qual símbolo é usado para comentar uma única linha em JavaScript?",
    alternativas: {
      A: "#",
      B: "//",
      C: "--",
      D: "%",
    },
    correta: "B",
  },
  {
    enunciado: "Qual palavra-chave é usada para declarar uma constante em JavaScript?",
    alternativas: {
      A: "let",
      B: "var",
      C: "const",
      D: "static",
    },
    correta: "C",
  },
  {
    enunciado: "Em qual ambiente este jogo está sendo executado?",
    alternativas: {
      A: "Navegador",
      B: "Banco de dados",
      C: "Terminal com Node.js",
      D: "Servidor web Apache",
    },
    correta: "C",
  },
];

function criarInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function mostrarTitulo() {
  console.clear();
  console.log("================================");
  console.log("        Show do Milhão");
  console.log("Vença para ganhar 1 milhão de");
  console.log("        Riais iranianos");
  console.log("================================\n");
}

function perguntarSimNao(rl, pergunta) {
  return new Promise((resolve) => {
    rl.question(`${pergunta} (s/n): `, (respostaBruta) => {
      const resposta = respostaBruta.trim().toLowerCase();
      if (resposta === "s" || resposta === "sim") {
        resolve(true);
      } else if (resposta === "n" || resposta === "nao" || resposta === "não") {
        resolve(false);
      } else {
        console.log("Digite apenas 's' para sim ou 'n' para não.\n");
        resolve(perguntarSimNao(rl, pergunta));
      }
    });
  });
}

function perguntarAlternativa(rl, pergunta, indice) {
  return new Promise((resolve) => {
    console.log(`Pergunta ${indice + 1}:`);
    console.log(pergunta.enunciado);
    console.log();
    console.log(`A) ${pergunta.alternativas.A}`);
    console.log(`B) ${pergunta.alternativas.B}`);
    console.log(`C) ${pergunta.alternativas.C}`);
    console.log(`D) ${pergunta.alternativas.D}`);
    console.log();

    rl.question("Sua resposta (A, B, C ou D): ", (respostaBruta) => {
      const resposta = respostaBruta.trim().toUpperCase();

      if (!["A", "B", "C", "D"].includes(resposta)) {
        console.log("Resposta inválida. Digite apenas A, B, C ou D.\n");
        return resolve(perguntarAlternativa(rl, pergunta, indice));
      }

      resolve(resposta);
    });
  });
}

function mostrarMensagemFinal(pontos, totalPerguntasRespondidas) {
  console.log("\n==============================");
  console.log("         Fim de jogo!");
  console.log("==============================");
  console.log(`Perguntas respondidas: ${totalPerguntasRespondidas}`);
  console.log(`Pontuação final: ${pontos} pontos`);

  if (pontos === 0) {
    console.log("Parece que hoje não foi o seu dia... tente novamente!");
  } else if (pontos < PONTOS_POR_ACERTO * 2) {
    console.log("Você começou bem, mas ainda há espaço para melhorar!");
  } else if (pontos < PONTOS_POR_ACERTO * (perguntas.length - 1)) {
    console.log("Boa! Você mandou bem nas perguntas!");
  } else if (pontos === PONTOS_POR_ACERTO * (perguntas.length - 1)) {
    console.log("Quase milionário! Faltou pouco para a glória máxima!");
  } else {
    console.log("Parabéns! Você conquistou o Desafio dos Mil Bytes!");
  }

  console.log("==============================\n");
}

async function jogar() {
  const rl = criarInterface();

  mostrarTitulo();

  const querJogar = await perguntarSimNao(
    rl,
    "Deseja iniciar o jogo do Show do Milhão?"
  );

  if (!querJogar) {
    console.log("\nTudo bem! Quando quiser jogar, é só executar o programa novamente.");
    rl.close();
    return;
  }

  let pontos = 0;
  let perguntasRespondidas = 0;

  for (let i = 0; i < perguntas.length; i++) {
    mostrarTitulo();

    const perguntaAtual = perguntas[i];
    const resposta = await perguntarAlternativa(rl, perguntaAtual, i);

    if (resposta === perguntaAtual.correta) {
      pontos += PONTOS_POR_ACERTO;
      perguntasRespondidas++;
      console.log("\nCorreto! +" + PONTOS_POR_ACERTO + " pontos!\n");
    } else {
      const alternativaCorreta = perguntaAtual.correta;
      const textoCorreto = perguntaAtual.alternativas[alternativaCorreta];

      console.log(
        `\nErrado! A resposta correta era: ${alternativaCorreta}) ${textoCorreto}`
      );
      perguntasRespondidas++;
      break;
    }
  }

  mostrarMensagemFinal(pontos, perguntasRespondidas);

  const querRepetir = await perguntarSimNao(
    rl,
    "Deseja jogar novamente para tentar uma pontuação melhor?"
  );

  if (querRepetir) {
    console.log("\nReiniciando o jogo...\n");
    rl.close();
    await jogar();
  } else {
    console.log("\nObrigado por jogar o Show do Javão! Até a próxima!");
    rl.close();
  }
}

jogar().catch((erro) => {
  console.error("Ocorreu um erro inesperado:", erro);
  process.exit(1);
});


