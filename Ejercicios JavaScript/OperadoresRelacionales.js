// Operadores de Relacionales (comparación)
let a = 5;
let b = '5';
console.log(a);
console.log(b);

// Operadores igualdad ==
// (Solo compara valores, y hace una conversion si es necesario)
console.log("a == b -> ", a == b);
// String interpolation
console.log(`${a} == ${b} -> ${a == b}`);
// Operador igualdad estricta o exacto
// Se compara el valor y el tipo de dato
console.log(" a === b -> ", a === b);
// String interpolation
console.log(`${a} === ${b} -> ${a === b}`);

// Operador distintos
// compara valor y convierte el tipo de dato si es necesario
console.log(`${a} != ${b} -> ${a != b}`);

// Operador distinto pero exacto
// Compara el valor y el tipo de dato
console.log(`${a} !== ${b} -> ${a !== b}`);

// Operador menor que
console.log(`${a} < ${b} -> ${a < b}`);

// Operador menor o igual que 
console.log(`${a} <= ${b} -> ${a <= b}`);

// Operador mayor que
console.log(`${a} > ${b} -> ${a >b}`);

// Operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`);
