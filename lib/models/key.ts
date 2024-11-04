export const BACK_SPACE = 'Backspace';
export const ENTER = String.fromCharCode(13);
export const TAB = String.fromCharCode(9);

export const HANKAKU = 'Hankaku';
export const NUM_LOCK = 'NumLock';

export function isAlphabet(c: string): boolean {
  if (c.length === 1) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
  }

  return false;
}

export function isNumber(c: string): boolean {
  if (c.length === 1) {
    return c >= '0' && c <= '9';
  }

  return false;
}

export function isSymbol(c: string): boolean {
  return c === '-'; // || c === "+" || c === "*" || c === "/" || c === "=" || c === "?" || c === "+" || c === "+" || c === "+";
}
