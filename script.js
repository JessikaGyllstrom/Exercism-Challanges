// Determine if a sentence is a pangram. 
function checkIfPangram (string) {
    string = string.toLowerCase();
    var regex = /([a-z])(?!.*\1)/g;
    return (string.match(regex) || []).length === 26;
}
console.log(checkIfPangram('The quick brown fox jumps over the lazy dog.')); //true
console.log(checkIfPangram('Quick zephyrs blow, vexing daft Jim')); //true
console.log(checkIfPangram('Am I a panagram?')); //false

/* w3schools: RegExp Object
A regular expression is a pattern of characters.
The pattern is used to do pattern-matching "search-and-replace" functions on text.
In JavaScript, a RegExp Object is a pattern with Properties and Methods.
Syntax: 
/pattern/modifier(s);
g	Perform a global match (find all matches rather than stopping after the first match)
i	Perform case-insensitive matching
m	Perform multiline matching
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified
*/
function regExTest (string) {
    let regex = /[q]/g;
    const myArray = string.match(regex);
    return myArray.length;
}
console.log(regExTest('The quick brown fox jumps over the lazy dog.')); //true
console.log(regExTest('The quick qrown fox qumps over the qazy dog.')); //true

// Convert a resistor bands color to its numeric representation 
function getColorBand (string) {
    if (/[a-z]/.test(string.charAt(0))) {
        string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    const resistor = {
        Black: 0, 
        Brown: 1, 
        Red: 2, 
        Orange: 3, 
        Yellow: 4, 
        Green: 5, 
        Blue: 6, 
        Violet: 7, 
        Grey: 8, 
        White: 9,
    }
    for (const [key, value] of Object.entries(resistor)) {
        if (string == key) {
           return `${value}`;
        }
    }
}
console.log(getColorBand("Black")); //0
console.log(getColorBand("brown")); //1
console.log(getColorBand("violet")); //7 

// Space Age
// Given an age in seconds, calculate how old someone would be:
function spaceAge (planet, seconds) {
    const earthYear = 31557600;
    const planets = {
        Earth: 1,
        Mercury: 0.2408467,
        Venus: 0.61519726,
        Mars: 1.8808158,
        Jupiter: 11.862615, 
        Saturn: 29.447498,
        Uranus: 84.016846,
        Neptune: 164.79132,
    }
    return Number((seconds/earthYear/planets[planet])).toFixed(2);
}
console.log(spaceAge("Earth", 1000000000));

/* Two Fer
Two-fer or 2-fer is short for two for one. One for you and one for me.
Given a name, return a string with the message:
One for name, one for me.*/ 
const twoFer = (string) => "One for " + `${string},` + " one for me";
console.log(twoFer("Zaphod"));