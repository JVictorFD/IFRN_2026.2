export interface Remuneravel {
  calcularPagamento(): number;
}

export class FuncionarioHorista implements Remuneravel {
  valorHora: number;
  horasTrabalhadas: number;

  constructor(valorHora: number, horasTrabalhadas: number) {
    this.valorHora = valorHora;
    this.horasTrabalhadas = horasTrabalhadas;
  }

  calcularPagamento(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

export class FuncionarioComissionado implements Remuneravel {
  salarioBase: number;
  totalVendas: number;
  percentualComissao: number;

  constructor(salarioBase: number, totalVendas: number, percentualComissao: number) {
    this.salarioBase = salarioBase;
    this.totalVendas = totalVendas;
    this.percentualComissao = percentualComissao;
  }

  calcularPagamento(): number {
    return this.salarioBase + (this.totalVendas * this.percentualComissao) / 100;
  }
}
