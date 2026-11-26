# 📘 Interfaces Ricas — Atividade I.II (TypeScript)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-26.11.1-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-12.11.2-F69220?style=flat-square&logo=pnpm&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-5.0.3-6E9F18?style=flat-square&logo=vitest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

Resolução da **Atividade I.II — Prática com TypeScript no GitHub** da disciplina **Interfaces Ricas** (IFRN · 2026.2), baseada no template [`typescript-example`](https://github.com/persapiens-classes/typescript-example), com testes unitários automatizados via **Vitest** e integração contínua no **GitHub Actions**.

---

## 📂 Estrutura do Repositório

```text
IFRN_2026.2/
├── .github/
│   └── workflows/
│       └── node.yml              # Pipeline de CI (pnpm + Vitest)
├── Interfaces_Ricas/
│   └── Projeto_1/
│       ├── src/
│       │   ├── exercicio1.ts     # Quadrado dos elementos (for e forEach)
│       │   ├── exercicio1.test.ts
│       │   ├── exercicio2.ts     # Concatenação de strings (join + arrow function)
│       │   ├── exercicio2.test.ts
│       │   ├── exercicio3.ts     # Ordenação decrescente (sort + arrow function)
│       │   ├── exercicio3.test.ts
│       │   ├── exercicio4.ts     # Extração dos 2 primeiros elementos (slice)
│       │   ├── exercicio4.test.ts
│       │   ├── exercicio5.ts     # Filtragem de números pares (filter)
│       │   ├── exercicio5.test.ts
│       │   ├── exercicio6.ts     # Interfaces e Classes (OO)
│       │   └── exercicio6.test.ts
│       ├── package.json
│       ├── pnpm-lock.yaml
│       ├── tsconfig.json
│       └── vitest.config.ts
└── README.md
```

---

## ✅ Exercícios Implementados

| # | Exercício | Conceito / Método | Entrada do Teste Unitário | Arquivos |
| :-: | :--- | :--- | :--- | :--- |
| **1** | Elevar elementos ao quadrado | `for` simples e `forEach` | `[3, 5, 7, 3, 8, 9, 1]` | `exercicio1.ts` · `exercicio1.test.ts` |
| **2** | Concatenação de strings | `join(' ')` em *arrow function* | `['Arrays', 'com', 'TypeScript']` | `exercicio2.ts` · `exercicio2.test.ts` |
| **3** | Ordenação decrescente | `sort` com *arrow function* | `['carro', 'boneco', 'ave', 'lapis']` | `exercicio3.ts` · `exercicio3.test.ts` |
| **4** | Extração dos 2 primeiros | `slice(0, 2)` | `[2, 4, 6, 2, 8, 9, 5]` | `exercicio4.ts` · `exercicio4.test.ts` |
| **5** | Filtragem de números pares | `filter` com *arrow function* | `[8, 3, 9, 5, 6, 12]` | `exercicio5.ts` · `exercicio5.test.ts` |
| **6** | Orientação a Objetos | Interface `Remuneravel` + classes `FuncionarioHorista` e `FuncionarioComissionado` | Instanciação, alteração de atributos e chamada ao método `calcularPagamento()` | `exercicio6.ts` · `exercicio6.test.ts` |

---

## ▶️ Como Executar os Testes Localmente

```bash
# Acesse o diretório do projeto
cd Interfaces_Ricas/Projeto_1

# Instale as dependências (o pnpm gerencia automaticamente o Node 26.11.1)
pnpm install --frozen-lockfile

# Execute a suíte de testes com relatório de cobertura
pnpm test run
```

---

## ⚙️ Integração Contínua (GitHub Actions)

A cada `push` ou `pull_request`, o workflow **Pnpm Node CI** (`.github/workflows/node.yml`) instala as dependências em `Interfaces_Ricas/Projeto_1` e executa toda a suíte de testes unitários no Vitest. O status pode ser acompanhado na aba **Actions** do repositório.

---

## 👤 Autor

**João Victor (`@JVictorFD`)** — TADS · IFRN 2026.2