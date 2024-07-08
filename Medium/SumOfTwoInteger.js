/*

371. Sum of Two Integers
Medium
Topics
Companies
Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 

Constraints:

-1000 <= a, b <= 1000

*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b!=0){
        let tmp = (a&b)<<1
        a=a^b
        b=tmp
    }
    return a
};

console.log(getSum(1,3))