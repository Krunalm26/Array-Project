
let str = "hello";
let hasUppercase = str.split('').some(word => word.toUpperCase() !== word.toLowerCase());
console.log(hasUppercase); 