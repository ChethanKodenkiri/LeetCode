/*
10. Regular Expression Matching
Hard
Topics
Companies
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 

Constraints:

1 <= s.length <= 20
1 <= p.length <= 20
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/*
var isMatch = function(s, p) {
  function dfs(i,j){
    if(i>= s.length && j>= p.length)
        return true;

    if(j>=p.length)
        return false;


    const match = (i<= (s.length)) && (s[i] == p[j])||(p[j]=='.')

    
    if(j+1 <p.length && p[j+1]=='*'){
        return dfs(i,j+2) || (match && dfs(i+1,j));
    }

    if(match){ 
       return dfs(i+1,j+1)
    }
     return false;

  }
  return dfs(0,0)

};

console.log(isMatch('aa','aa'))

*/



var isMatch = function(s, p) {
    // recursion basic case
    if (!p || !p.length) return !Boolean(s.length);
    
    // first char match condition
    const first_match = s.length && (p[0] === s[0] || p[0] === '.');
	
    if (p.length > 1 && p[1] === '*') {
		// If the second char is wildcard, then result to two cases:
		
		// 1.the first char doesn't match, so the second wildcard can repeat the first char of p 0 times
		// then continue to match the rest part of s
		const condition1 = isMatch(s, p.substring(2));
		
		// Example
		// s: aab
		// p: c*a*b*
		
		// Explaination: c* can repeat c 0 times, then continue to match s with the rest part of p
		
		// 2.The first char does matches, so the second wildcard can repeat the first char any times
		// then continue to match the rest part of s
		const condition2 = first_match && isMatch(s.substring(1), p);
		
		// Example 1
		// s: aa
		// p: a*
		
		// Explaination: a* can repeat a two times then becomes to aa which matches aa
		
		// Example 2
		// s: ab
		// p: .*
		
		//Explaination: .* can repeat . two times then becomes to .. which matches ab
		
		return condition1 || condition2;
    } else {
        // The normal case is to match the first char then recursively match the rest chars
        return first_match && isMatch(s.substring(1), p.substring(1));
    }
};

console.log(isMatch('aa','a*'))