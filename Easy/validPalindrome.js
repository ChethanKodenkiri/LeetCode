/*

125. Valid Palindrome
Easy
Topics
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let sm= s.split(" ").join("").split(",").join("").split(":").join("").toLocaleLowerCase()
    return sm == sm.split('').reverse().join('')
    // for(let i=0;i<Math.floor(sm.length/2);i++){
    //     if(sm[i]!==sm[sm.length-1-i]){return false}
    // }
    // return true
};

//console.log(isPalindrome("A man, a plan, a canal: Panama"));

var isPalindromes= function(s){
    let sm = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    return sm == sm.split('').reverse().join('')
}
//console.log(isPalindromes("A man, a plan, a canal: Panama"));


var isPalindromess = function(s){
    let [r,l]=[s.length-1,0]
   while(l<r){
    while(l<r && !isAlphaNum(s[l])){
        l++
    }
    while(r>l && !isAlphaNum(s[r])){
        r--
    }

    if(s[r].toLowerCase()!=s[l].toLowerCase()){return false}
    l++;
    r--;
   }
   return true
}

function isAlphaNum(s){
    return ("A".charCodeAt(0)<= s.charCodeAt(0) && s.charCodeAt(0) <="Z".charCodeAt(0) ||
        "a".charCodeAt(0)<=s.charCodeAt(0)&&s.charCodeAt(0)<='z'.charCodeAt(0)||
        "0".charCodeAt(0)<= s.charCodeAt(0)&& s.charCodeAt(0)<="9".charCodeAt(0))
}

console.log(isPalindromess("race a car"))