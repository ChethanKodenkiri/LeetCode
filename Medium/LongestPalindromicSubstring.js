// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.



/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function (s) {
    if(s.length<2){return s}
    let start =0,maxlength=1;

    function expandFromMiddle(left,right){
        while(s[left]===s[right] && left>=0 && right <s.length){
            if(right-left+1 > maxlength){
                start =left
                maxlength = right-left+1
            }
            left--;
            right++;
        }
    }

    for(let i=0;i<s.length;i++){
        expandFromMiddle(i,i);
        expandFromMiddle(i,i+1)
    }

    return s.substring(start,start+maxlength)
};


console.log(longestPalindrome("babad"))


//Second Solution

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length === 0) return '';
    
    let result = '';
    
    // Function to expand around the center and find the longest palindrome
    function getPalindrome(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right); // Return last string before while loop broke (right is exclusive, so no need to -1)
    }

    for (let i = 0; i < s.length; i++) {
        // Handle odd and even length palindromes
        let odd = getPalindrome(s, i, i);
        let even = getPalindrome(s, i, i + 1);

        // Update result if longer palindrome found
        if (odd.length > result.length) result = odd;
        if (even.length > result.length) result = even;
    }
    
    return result;
};