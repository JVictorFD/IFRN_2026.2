import { describe, expect, test } from 'vitest';
import { filtrarPares } from './exercicio5';

describe('Exercício 5 - Filtragem de números pares', () => {
  test('deve extrair apenas os números pares do array usando filter', () => {
    const entrada: number[] = [8, 3, 9, 5, 6, 12];
    const esperado: number[] = [8, 6, 12];

    expect(filtrarPares(entrada)).toEqual(esperado);
  });
});
