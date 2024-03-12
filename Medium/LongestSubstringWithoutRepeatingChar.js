/* 
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let maxlength = 0,
    start = 0,
    end = 0;
  let map = {};

  for (start; start < s.length; start++) {
    const exist = map[s[start]]; // this checks the char is present in map or not

    if (exist !== undefined && end <= exist) {
      end = exist + 1;
    }

    map[s[start]] = start; // => map{'a':0 ....}

    maxlength = Math.max(maxlength, start - end + 1);
  }
  return maxlength;
};

console.log(lengthOfLongestSubstring("abcbcbb"));
