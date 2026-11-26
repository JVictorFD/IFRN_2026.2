export function filtrarPares(numeros: number[]): number[] {
  return numeros.filter((numero: number) => numero % 2 === 0);
}
