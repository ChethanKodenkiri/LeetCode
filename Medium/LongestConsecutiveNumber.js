/*


128. Longest Consecutive Sequence
Medium
Topics
Companies
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109


*/


/**
 * @param {number[]} nums
 * @return {number}
 */

//Brute force
var longestConsecutive = function(nums) {

    if(nums.length==0){return 0}
    let newNums = [... new Set(nums)].sort((a,b)=>a-b)
    let count=1
    let maxCount=1
    console.log(newNums.length)
    for(let i=0;i<newNums.length-1;i++){
        console.log("nums ",newNums[i])
        console.log("count ",count)
        if(newNums[i]+1=== newNums[i+1]){count++}
        else{      
            count=1
        }
        maxCount =Math.max(maxCount,count)
    }

    return maxCount

};


//Optimized
var longestConsecutives = function(nums) {
    let numSet = new Set(nums)
    let longest=0

    for(let value of numSet){
        if(!numSet.has(value-1)){
            let length=0

            while(numSet.has(value+length) ){
                length++
            }
            longest= Math.max(longest,length);
        }      
    }
    return longest
}

console.log(longestConsecutives([0,3,7,2,5,8,4,6,0,1]));