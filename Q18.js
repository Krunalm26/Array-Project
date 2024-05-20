
let str = "banana";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let allVowels = str.split('').every(word => vowels.includes(word));
console.log(allVowels); 