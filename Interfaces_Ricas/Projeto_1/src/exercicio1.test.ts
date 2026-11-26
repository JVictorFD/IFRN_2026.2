import { describe, expect, test } from 'vitest';
import { quadradoComFor, quadradoComForEach } from './exercicio1';

describe('Exercício 1 - Elevar elementos ao quadrado', () => {
  const entrada: number[] = [3, 5, 7, 3, 8, 9, 1];
  const esperado: number[] = [9, 25, 49, 9, 64, 81, 1];

  test('deve calcular o quadrado dos elementos usando for simples', () => {
    expect(quadradoComFor(entrada)).toEqual(esperado);
  });

  test('deve calcular o quadrado dos elementos usando forEach', () => {
    expect(quadradoComForEach(entrada)).toEqual(esperado);
  });
});
