//STEP 1
// let alphabeticalOrder = function (text) {
//     let newText = text.split(' ').toString().toLowerCase();
//     let textSorted = newText.split('');
//     textSorted = textSorted.sort().join('').replace(/[,]/g, '').trim(); 
//     return textSorted;
// }
// let text = prompt('Please enter some text here'); 
// console.log(`The text in aplphabetical order: ${alphabeticalOrder(text)}.`);

//STEP 2
// let textLine = [];
// let upprCase = function (text) {
//     text = text.split(' ');
//      for (let i = 0; i < text.length; i++) {
//         let word = text[i];
//         let firstChar = word.charAt(0).toUpperCase();
//         word = word.slice(1);
//         word = firstChar.concat(word);
//         textLine +=' ' + word;
//     };
//     return textLine;
// };
    
// let text = prompt('Please enter some text here');
// console.log(`The text with all capital first letters: ${upprCase(text)}.`);

//STEP 3
// let vowelsCount = (text) => {
//    text = text.toLowerCase();
//    let vowelNumber = text.match(/[aeiou]/g);
//    return vowelNumber.length;
// };

// let text = prompt('Please enter some text here');
// console.log(`This text contains ${vowelsCount(text)} vowels.`);

//STEP 4
// let randomChar = (num) => {
//     let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let output = '';
//      for (i = 0; i < num; i++) {
//         let randomIndex = Math.ceil(Math.random() * characters.length);
//         output += characters.charAt(randomIndex);
//     }
//     return output;
// }; 
// let num = Number(prompt('Please enter a number of random characters you want to generate'));
// console.log(randomChar(num));

//STEP 5
let countries = prompt('Please enter countries for comparison');
let output = '';
let longest_country_name = (countries) => {
   countries = countries.split(',');
   for (let i = 0; i < countries.length; i++) {
      if (countries[i].length >= output.length) {
         output = countries[i];
         } 
   }
   return output;
};
console.log(`The longest name of all the entered countries:${longest_country_name(countries)}.`);