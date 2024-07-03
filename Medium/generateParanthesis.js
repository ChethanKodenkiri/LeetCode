/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
};/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack=[];
    const result=[];

    const backTrack=(open,close)=>{

        if(open===close && open===n){
            result.push(stack.join(''));
        }
        if(open<n){
            stack.push('(');
            backTrack(open+1,close);
            stack.pop();
        }

        if(close<open){
            stack.push(')');
            backTrack(open,close+1);
            stack.pop();
        }

    }

    backTrack(0,0);
    return result
};

//console.log(generateParenthesis(2))



/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthe = function(n) {
    let result=[]

    const generate=(current,open,close)=>{
        if(current.length === n*2){
            result.push(current)
            return;
        }

        if(open<n){
            generate(current + '(',open +1 ,close)
        }

        if(close<open){
            generate(current+')',open,close+1)
        }

    }

    generate('',0,0)

    return result
};
console.log(generateParenthe(3))