//STEP 1
// let nameEntered = prompt("Please enter your name");

// if (nameEntered.includes(' ')) {
    // if the user entered double or first and last name

//     let firstName = nameEntered.split(' ', 1).toString();
//     let firstNameChar = firstName.split('');
//     let firstNameCharCount = firstNameChar.length;
    
//     let words = nameEntered.split(' ');
//     let len = words.length;
//     let lastName = words[len - 1].toString();
//     let lastNameChar = lastName.split('');
//     let lastNameCharCount = lastNameChar.length;
//     let charCount = Number(firstNameCharCount) + Number(lastNameCharCount);
   
//     alert(charCount);
// } else {
    // if the user entered first or single name
    
//     alert(nameEntered.length);
// }


//STEP 2
// let nameEntered = prompt('Please enter your name.');
// let letterNum = prompt('Please enter a number that will match the letter in the previous string');
// let letter = nameEntered.charAt(letterNum);
// alert(`${letterNum} matches the "${letter}"`);

// if we want the number entered by the user to coresspondent to the letter in the name but not to the string (since the string index is 0 and not 1 based), we need to do this: let letter = nameEntered.charAt(letterNum - 1);


//STEP 3
// let firstName = prompt('Please enter your first name');
// let lastName = prompt('Please enter your last name');
// let firstLast = firstName.concat(" ", lastName);
// alert(`Your name is: ${firstLast}`);


//STEP 4
// let text = "The quick brown fox jumped over the lazy dog";
// let newArr = text.split(' ');
// alert(newArr.indexOf('fox'));


//STEP 5
// let text = "The quick brown fox jumps over the lazy fox";
// let newArr = text.split(' ');
// alert(newArr.lastIndexOf('fox'));


//STEP 6
// let text = "The quick brown fox jumped over the lazy dog";
// let fullName = prompt("Please enter your full name");
// alert(text.replace('the lazy dog', fullName));


//STEP 7
// let text = "The quick brown fox jumped over the lazy dog";
// let word = prompt("Please enter a word here");
// if (text.indexOf(word) !== -1) {
//     alert(`The word "${word}" has been found in the text`);
// } else {
//     alert(`The word "${word}" has not been found in the text`)
// }


//STEP 8
// let old_string = "The quick brown fox jumped over the lazy dog";
// let indexThe = old_string.indexOf('the');
// let new_string = old_string.slice(indexThe);
// alert(new_string.toUpperCase());


//STEP 9
// let text = "        The quick brown fox jumped over the lazy dog        ".toUpperCase();
// alert(text.trim().toLowerCase());


//STEP 10
let text = "the quick brown fox jumped over the lazy dog";
let capLetter = text.charAt(0).toUpperCase();
let newText = text.slice(1);
alert(capLetter.concat(newText));
