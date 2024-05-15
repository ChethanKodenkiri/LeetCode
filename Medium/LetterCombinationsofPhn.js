/*
17. Letter Combinations of a Phone Number
Medium
Topics
Companies
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    const queue = ['']
    const map={'2':'abc',
            '3':'def',
            '4':'ghi',
            '5':'jkl',
            '6':'mno',
            '7':'pqrs',
            '8':'tuv',
            '9':'wxyz'}

    for(let digit of digits){
       
        const len=queue.length
        for(let i=0;i<len;i++){
            const current = queue.shift();
            map[digit].split('').forEach(element => {queue.push(current+element)});

        }
    }
    return queue
};

// console.log(letterCombinations('92'))


//BackTracking 

var letterCombinationsBackTrack= function(digits) {
    if(digits.length === 0) return []
    const queue = []
    const map={'2':'abc',
            '3':'def',
            '4':'ghi',
            '5':'jkl',
            '6':'mno',
            '7':'pqrs',
            '8':'tuv',
            '9':'wxyz'}

    backtrack=(currentStr,i)=>{
        if(i>digits.length-1){
            queue.push(currentStr)
            return
        }

        for(let char of map[digits[i]])
            backtrack(currentStr+char,i+1)
    }
    backtrack('',0)
    return queue
}

console.log(letterCombinationsBackTrack('92'))
