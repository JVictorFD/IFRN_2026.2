export function ordenarDecrescente(itens: string[]): string[] {
  return [...itens].sort((a: string, b: string) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
}
