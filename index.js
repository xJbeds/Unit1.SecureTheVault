let code1;
code1 = 7 + 3;
console.log(code1);

const code2 = 15 + 15 + 10;
console.log(code2);

const code3 = 99 % 60;
console.log(code3);

let message = `The vault has been secured. The Combination is:`;

const codeA = code1 + `-` + code2 + `-` + code3;
console.log(codeA);

const codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

console.log(message, codeA, codeB);

console.log(message, codeA === codeB);
