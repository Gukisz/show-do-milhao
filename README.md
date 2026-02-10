## Show do Milhão – O Desafio dos Mil Bytes

### Descrição

Jogo de perguntas e respostas inspirado no formato do Show do Milhão.

O jogador deve responder corretamente às perguntas para acumular pontos.
Ao errar uma pergunta, o jogo termina e a pontuação final é exibida.

### Como executar

1. Clonar o repositório:

```bash
git clone https://github.com/Gukisz/show-do-milhao.git
```

2. Navegar até a pasta do projeto:

```bash
cd show-do-milhao
```

3. Instalar dependências (se houver):

```bash
npm install
```

4. Executar o jogo com Node.js:

```bash
node jogo.js
```

ou, se preferir usar o script do `package.json`:

```bash
npm start
```

### Tecnologias

- JavaScript (Node.js)
- Terminal (console)

### Funcionalidades

- Sistema de perguntas e respostas
- Múltipla escolha (A, B, C, D)
- Controle de pontuação
- Encerramento do jogo ao errar uma pergunta
- Mensagem final com pontuação e desempenho

### Gitflow utilizado

- Branches principais: `main` (produção) e `develop` (desenvolvimento contínuo)
- Branches de funcionalidade: `feature/*`
- Commits seguindo padrão semântico:
  - `feat:` nova funcionalidade
  - `fix:` correção de bug
  - `docs:` alterações na documentação
  - `refactor:` melhorias no código sem alterar comportamento
  - `test:` código de teste
  - `chore:` tarefas auxiliares (ex: configurações)
- Merge das funcionalidades via branches:
  - `feature/*` → `develop` → `main`

---

## Funcionamento do jogo

### 1. Tela inicial

- Exibe o título do jogo e uma mensagem de boas-vindas.
- Pergunta ao jogador se deseja iniciar o jogo.

### 2. Sistema de perguntas

- O jogo apresenta uma sequência de perguntas de múltipla escolha.
- Cada pergunta possui quatro alternativas: A, B, C e D.
- As perguntas estão armazenadas em um array de objetos no código.

### 3. Regras

- O jogador escolhe uma alternativa digitando A, B, C ou D.
- Se acertar, avança para a próxima pergunta.
- Se errar, o jogo termina imediatamente.

### 4. Pontuação

- Cada pergunta correta vale uma quantidade fixa de pontos (por padrão, 10 pontos).
- A pontuação máxima é atingida ao acertar todas as perguntas.

### 5. Exibição final

Ao final do jogo, são exibidos:

- Total de perguntas respondidas
- Pontuação final
- Mensagem personalizada de acordo com o desempenho

---

## Exemplo de interface no console

```txt
==============================
  Show do Milhão
Vença para ganhar 1 milhão de Riais iranianos
==============================

Pergunta 1:
Qual é a linguagem usada para este jogo?
A) Python
B) JavaScript
C) C++
D) PHP

Sua resposta: B

Correto! +10 pontos!

Pergunta 2:
Qual comando usamos para executar um arquivo JavaScript no Node.js?
A) run
B) start
C) node
D) execute

Sua resposta: A

Errado! A resposta correta era: C) node

Fim de jogo!

Pontuação final: 10 pontos
```


