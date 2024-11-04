import { HANKAKU, isAlphabet, isNumber } from './key';

const alphabets: ReadonlyArray<string> = [
  ...['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u'],
  ...['v', 'w', 'x', 'y', 'z'],
];

const Alphabets: ReadonlyArray<string> = [
  ...['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'],
  ...['V', 'W', 'X', 'Y', 'Z'],
];

const numbers: ReadonlyArray<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

test.each<[boolean, ReadonlyArray<string>]>([
  [true, alphabets],
  [true, Alphabets],
  [false, numbers],
  [false, [HANKAKU]],
])('isAlphabet', (expected, inputs) => {
  inputs.forEach((input) => {
    expect(isAlphabet(input)).toBe(expected);
  });
});

test.each<[boolean, ReadonlyArray<string>]>([
  [false, alphabets],
  [false, Alphabets],
  [true, numbers],
  [false, [HANKAKU]],
])('isNumber', (expected, inputs) => {
  inputs.forEach((input) => {
    expect(isNumber(input)).toBe(expected);
  });
});
