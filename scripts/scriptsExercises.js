(function () {
    'use strict';

    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------

    //Purpose Statement

    /*function description*/
    /* parameter description*/
    /*return description*/

    //Determines the largest of two number

    /*Find largest number between two numbers*/
    /* num1 and num2 are two numbers to compare*/
    /*Larger of the two numbers*/

    function max(num1, num2) {
        if (num1 <= num2) {
            return num2;
        } else {
            return num1;
        }
    }


    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------

    //Determines the largest of three number

    /*Find largest number between two numbers*/
    /*num1 and num2 and num3 are three numbers to compare*/
    /*Largest of the three numbers*/

    function maxOfThree(num1, num2, num3) {
        if (num1 <= num2 && num2 <= num3) {
            return num3;
        } else if (num1 <= num2) {
            return num2;
        } else {
            return num1;
        }
    }


    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------

    //Check is character is a vowel

    /*Check if a 1 character string is a vowel*/
    /*Letter to check if vowel*/
    /*Returns true if vowel, else false*/

    function isVowel(letter) {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            return true;
        } else {
            return false;
        }
    }

    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------

    //Translates text into rövarspråket

    /*Takes text and converts it to rövarspråket*/
    /*Text to convert into rövarspråket*/
    /*returns text converted to rövarspråket*/

    function rovarspraket(text) { 
        let newText = ''
        for(let i = 0; i < text.length; i++){
            if (text[i] !== 'a' && text[i] !=='e' && text[i] !== 'i' && text[i] !== 'o' && text[i] !== 'u' && text[i] !== 'A' && text[i] !== 'E' && text[i] !== 'I' && text[i] !== 'O' && text[i] !== 'U' && text[i] !== ' '){
                newText += text[i] + 'o' + text[i];  
            } else {
                newText += text[i];
            }
        }
        return newText;
    } 


    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------

    //Add the value of an array or mulitply the value of an array

    /*Find the value of an arraay*/
    /*An array to add or muliple*/
    /*The value of the array*/

    function sum(arr) {
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
            num += arr[i];
        }
        return num;
    }


    function multiply(arr) {
        let num = arr[0];
        for (let i = 0; i < arr.length; i++) {
            num *= arr[i];
        }
        return num;
    }


    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------

    //Reverse a string

    /*Takes an inputed string and reverse the value*/
    /*String to reverse*/
    /*Reversed string*/

    function reverse(str) {
        let newString = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }


    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------

    //Finds the longest word in an array

    /*Takes array of words and returns the longest word*/
    /*Array of words to find the longest word*/
    /*Longest word in the array*/

    function findLongestWord(arr) {
        let longestWord = '';
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > longestWord.length) {
                longestWord = arr[i];
            }

        }
        return longestWord.length;
    }



    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------

    //Returns words that are longer then a specified value

    /*Finds words in an array that are bigger then an arguement input 'i' and returns an array of those words*/
    /*Array to find what words are larger then 'i'*/
    /*New array of words that are larger then arguement input 'i'*/

    function filterLongWords(arr, i) {
        let newArr = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length > i) {
                newArr.unshift(arr[j]);
            }
        }
        return newArr;
    }


    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------

    //Creates a frequency of a string and create an object

    /*Takes a string and returns an object with the frequency of that string*/
    /*String to find a frequency, Frequency integer*/
    /*Object with that frequency*/

    // function charFreq(str) {
    //     let frequency = {};
    //     for(let i = 0; i < str.length; i++){
    //         if(str[i] == freq) {

    //         }
    //      }
    //     return frequency;
    // }
    function charFreq(str) {
        var freq = {};
        for (let i = 0; i < str.length; i++) {
            let character = str.charAt(i);
            if (freq[character]) {
                freq[character]++;
            } else {
                freq[character] = 1;
            }
        }

        return freq;
    };


    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////

    console.assert(max(2, 4) === 4, 'function max error');

    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

    console.assert(isVowel('a') === true, 'ERROR function isVowel');

    console.assert(isVowel('b') == false, 'ERROR function isVowel');

    console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

    console.assert(findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

    console.assert(filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();