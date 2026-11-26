import { describe, expect, test } from 'vitest';
import { concatenarComEspaco } from './exercicio2';

describe('Exercício 2 - Concatenação de strings', () => {
  test('deve concatenar as strings do array separadas por um espaço', () => {
    const entrada: string[] = ['Arrays', 'com', 'TypeScript'];
    expect(concatenarComEspaco(entrada)).toBe('Arrays com TypeScript');
  });
});
