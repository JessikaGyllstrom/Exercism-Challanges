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
*/