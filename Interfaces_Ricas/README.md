# Interfaces Ricas

>De estudante para estudantes. 

>Utilizei bastante recurso de IA para correções, documentação e explicação, como poderá perceber ao ler este README.md

Este projeto contém a atividade de TypeScript sobre manipulação de arrays e orientação a objetos usando interfaces.



## Estrutura do projeto

A atividade está localizada em:

- [Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example](Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example)

Dentro dessa pasta, você vai encontrar:

- `package.json` — configura o projeto e os scripts de teste
- `vitest.config.ts` — configuração do ambiente de testes
- `src/` — arquivos com as funções e os testes

## Arquivos principais

- [Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-square.ts](Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-square.ts) — eleva elementos ao quadrado com `for` e `forEach`
- [Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-square.test.ts](Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-square.test.ts) — testes do exercício 1
- [Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-manipulation.ts](Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-manipulation.ts) — concatenação, ordenação, slice, filter e interface
- [Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-manipulation.test.ts](Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example/src/array-manipulation.test.ts) — testes dos exercícios 2 a 6

## Como abrir o projeto

Abra a pasta:

```bash
cd /workspaces/IFRN_2026.2/Interfaces_Ricas/venv_Interfaces_Ricas/typescript-example
```

## Como instalar as dependências

No terminal, execute:

```bash
npm install
```

Esse comando instala as bibliotecas necessárias para rodar os testes.

> Atenção: o npm pode mostrar avisos de vulnerabilidade em dependências. Isso não impede a execução do projeto, mas indica que algumas bibliotecas têm falhas de segurança conhecidas.

## Como rodar os testes

Para executar toda a suíte:

```bash
npm test -- --run
```

Ou de forma direta:

```bash
npx vitest run
```

## Saída esperada dos testes

Se tudo estiver correto, o resultado será algo parecido com:

```bash
 RUN  v4.1.8
 Test Files  3 passed (3)
      Tests  8 passed (8)
```

Também aparece um resumo de cobertura semelhante a este:

```bash
Statements   : 100% ( 26/26 )
Functions    : 100% ( 15/15 )
Lines        : 100% ( 22/22 )
```

## O que os testes validam

- Elevar os elementos ao quadrado com `for` e `forEach`
- Concatenar strings com espaço usando `join`
- Ordenar elementos em ordem decrescente com `sort`
- Selecionar os dois primeiros elementos com `slice`
- Filtrar números pares com `filter`
- Trabalhar com interface e classes em TypeScript

## Explicação didática do código

### 1) Arquivo `src/array-square.ts`

Este arquivo contém duas formas de elevar cada número ao quadrado.

#### Função `squareWithFor(values: number[]): number[]`

```ts
export function squareWithFor(values: number[]): number[] {
  const squaredValues: number[] = [];

  for (let index = 0; index < values.length; index += 1) {
    squaredValues.push(values[index] ** 2);
  }

  return squaredValues;
}
```

O que acontece:

- cria um array vazio chamado `squaredValues`
- percorre o array original com `for`
- calcula `values[index] ** 2`, que significa: valor ao quadrado
- adiciona o resultado no novo array

#### Função `squareWithForEach(values: number[]): number[]`

```ts
export function squareWithForEach(values: number[]): number[] {
  const squaredValues: number[] = [];

  values.forEach((value) => {
    squaredValues.push(value ** 2);
  });

  return squaredValues;
}
```

O que acontece:

- percorre cada elemento do array com `forEach`
- para cada valor, calcula o quadrado
- guarda o resultado em `squaredValues`

### 2) Arquivo `src/array-square.test.ts`

```ts
import { squareWithFor, squareWithForEach } from './array-square.js';

const values = [3, 5, 7, 3, 8, 9, 1];
const expectedSquaredValues = [9, 25, 49, 9, 64, 81, 1];

test('eleva os elementos ao quadrado usando for simples', () => {
  expect(squareWithFor(values)).toEqual(expectedSquaredValues);
});

test('eleva os elementos ao quadrado usando forEach', () => {
  expect(squareWithForEach(values)).toEqual(expectedSquaredValues);
});
```

O teste faz o seguinte:

- define a entrada: `[3, 5, 7, 3, 8, 9, 1]`
- define a saída esperada: `[9, 25, 49, 9, 64, 81, 1]`
- verifica se a função retorna exatamente esse resultado

### 3) Arquivo `src/array-manipulation.ts`

Este arquivo reúne os outros exercícios da atividade:

#### `joinWithSpace(values: string[]): string`

```ts
export function joinWithSpace(values: string[]): string {
  return values.map((value) => value).join(' ');
}
```

Explicação:

- `map` percorre cada palavra
- `join(' ')` une todas com um espaço entre elas

Exemplo:

```ts
['Arrays', 'com', 'TypeScript']
```

Resultado:

```ts
'Arrays com TypeScript'
```

#### `sortDescending(values: string[]): string[]`

```ts
export function sortDescending(values: string[]): string[] {
  return [...values].sort((first, second) => second.localeCompare(first));
}
```

Explicação:

- cria uma cópia do array para não alterar o original
- `sort` organiza os itens
- `localeCompare` compara as strings em ordem alfabética
- `second.localeCompare(first)` faz a ordenação decrescente

#### `firstTwoNumbers(values: number[]): number[]`

```ts
export function firstTwoNumbers(values: number[]): number[] {
  return values.slice(0, 2);
}
```

Explicação:

- `slice(0, 2)` pega apenas os dois primeiros elementos

#### `filterEvenNumbers(values: number[]): number[]`

```ts
export function filterEvenNumbers(values: number[]): number[] {
  return values.filter((value) => value % 2 === 0);
}
```

Explicação:

- `filter` mantém somente os valores que passam na condição
- `value % 2 === 0` significa: o número é par

#### Interface e classes

```ts
export interface DescricaoVeiculo {
  descricao(): string;
}
```

Uma interface define um contrato: qualquer classe que a implementar precisa ter o método `descricao()`.

```ts
export class Carro implements DescricaoVeiculo {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number,
  ) {}

  descricao(): string {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }
}
```

```ts
export class Moto implements DescricaoVeiculo {
  constructor(
    public marca: string,
    public cilindrada: number,
    public cor: string,
  ) {}

  descricao(): string {
    return `${this.marca} ${this.cilindrada}cc ${this.cor}`;
  }
}
```

Essas classes têm atributos diferentes, mas ambas obedecem a mesma interface.

### 4) Arquivo `src/array-manipulation.test.ts`

Este arquivo verifica os exercícios de 2 a 6.

```ts
import {
  Carro,
  Moto,
  filterEvenNumbers,
  firstTwoNumbers,
  joinWithSpace,
  sortDescending,
  type DescricaoVeiculo,
} from './array-manipulation.js';
```

Cada `expect(...)` compara a saída real com a saída esperada.

Exemplos:

```ts
expect(joinWithSpace(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript');
```

```ts
expect(firstTwoNumbers([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
```

```ts
expect(filterEvenNumbers([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
```

A última parte testa a interface:

```ts
const carro = new Carro('Ford', 'Focus', 2021);
const moto = new Moto('Honda', 250, 'azul');
const veiculos: DescricaoVeiculo[] = [carro, moto];
```

Isso mostra que objetos de tipos diferentes podem ser armazenados em um array quando ambos implementam a mesma interface.

## Dica para iniciantes

Se você está começando, o ideal é seguir esta ordem:

1. abrir o arquivo `src/array-square.ts`
2. entender a lógica de cada função
3. ler os testes em `src/array-square.test.ts`
4. depois estudar `src/array-manipulation.ts`
5. validar tudo com `npm test -- --run`

Esse fluxo ajuda a entender como a lógica e os testes se relacionam.
