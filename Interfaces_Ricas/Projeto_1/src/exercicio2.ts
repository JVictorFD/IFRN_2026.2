// Array.prototype.join() aceita apenas string como separador;
// a arrow function encapsula a chamada ao método join(' ').
export const concatenarComEspaco = (palavras: string[]): string => {
  return palavras.join(' ');
};
