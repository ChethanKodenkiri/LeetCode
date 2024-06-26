/*

20. Valid Parentheses
Easy
Topics
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/




/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    let map=new Map()
    map.set('(',')')
    map.set('[',']')
    map.set('{','}')

  
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            stack.push(map.get(s[i]))
        }else if(s[i]!=stack.pop()){
            return false
        }
    }
    return stack.length==0
};


console.log(isValid('([)]'))

