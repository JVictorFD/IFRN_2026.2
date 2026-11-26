import { describe, expect, test } from 'vitest';
import { ordenarDecrescente } from './exercicio3';

describe('Exercício 3 - Ordenação decrescente', () => {
  test('deve ordenar o array de strings em ordem decrescente', () => {
    const entrada: string[] = ['carro', 'boneco', 'ave', 'lapis'];
    const esperado: string[] = ['lapis', 'carro', 'boneco', 'ave'];

    expect(ordenarDecrescente(entrada)).toEqual(esperado);
  });
});
