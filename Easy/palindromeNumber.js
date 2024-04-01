// 9. Palindrome Number

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0){return false}
    if(x%11 == 0 & x.toString().length == 2){return true}
    let value = x.toString();
    for(let i=0;i<value.length/2;i++){
      if(value[i] !== value[value.length-1-i]){
        return false
      }
     
    }
    return true

};

console.log(isPalindrome(12321))

//Optimum solution

let isPalindrome = function(x){
    if(x<0) return false
    let temp=x,revNum=0

    while(temp>0){
        var digit = temp%10
        revNum = revNum*10+digit
        temp = parseInt(temp/10)
    }
    if(revNum==x){return true}
    else{return false}
}

console.log(isPalindrome(121))