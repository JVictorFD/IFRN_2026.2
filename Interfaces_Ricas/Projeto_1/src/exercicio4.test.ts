import { describe, expect, test } from 'vitest';
import { pegarDoisPrimeiros } from './exercicio4';

describe('Exercício 4 - Extração dos dois primeiros elementos', () => {
  test('deve retornar apenas os dois primeiros elementos do array usando slice', () => {
    const entrada: number[] = [2, 4, 6, 2, 8, 9, 5];
    const esperado: number[] = [2, 4];

    expect(pegarDoisPrimeiros(entrada)).toEqual(esperado);
  });
});
