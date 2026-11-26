import { describe, expect, test } from 'vitest';
import {
  Remuneravel,
  FuncionarioHorista,
  FuncionarioComissionado,
} from './exercicio6';

describe('Exercício 6 - Orientação a Objetos e Interfaces', () => {
  test('deve instanciar FuncionarioHorista, alterar seus atributos e calcular o pagamento', () => {
    const horista = new FuncionarioHorista(50, 100);
    expect(horista.calcularPagamento()).toBe(5000);

    horista.valorHora = 60;
    horista.horasTrabalhadas = 120;
    expect(horista.calcularPagamento()).toBe(7200);
  });

  test('deve instanciar FuncionarioComissionado, alterar seus atributos e calcular o pagamento', () => {
    const comissionado = new FuncionarioComissionado(2000, 10000, 10);
    expect(comissionado.calcularPagamento()).toBe(3000);

    comissionado.salarioBase = 2500;
    comissionado.totalVendas = 20000;
    comissionado.percentualComissao = 5;
    expect(comissionado.calcularPagamento()).toBe(3500);
  });

  test('deve executar o método comum através do contrato da interface Remuneravel', () => {
    const folha: Remuneravel[] = [
      new FuncionarioHorista(40, 80),
      new FuncionarioComissionado(1500, 5000, 20),
    ];

    const pagamentos: number[] = folha.map((item: Remuneravel) =>
      item.calcularPagamento()
    );

    expect(pagamentos).toEqual([3200, 2500]);
  });
});
