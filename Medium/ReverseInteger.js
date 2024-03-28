// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1



/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let result = parseInt(x.toString().split('').reverse().join(''));
    
    if(result > ((2**31)-1) || result < -(2**31)){
        return 0;
    }

    if(x<0){
        return -result;
    }else{
        return result;
    }

};

console.log(reverse(1563847412))


//Top Answer

var reverse = function(x) {
    let lessThan0 = x < 0
    if (lessThan0) {
      x = -x
    }
    let arr = []
    while (x > 0) {
      arr.push(x%10)
      x = Math.floor(x/10)
    }
  
    let result = Number(arr.join(''))
    if (lessThan0) result = -result
  
    if (result > 2**31 - 1 || result < -(2**31)) return 0
  
    return result
  };