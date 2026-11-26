export function ordenarDecrescente(itens: string[]): string[] {
  return [...itens].sort((a: string, b: string) => (a < b ? 1 : -1));
}
