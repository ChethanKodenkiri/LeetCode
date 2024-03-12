/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map ={}
    for (i=0;i<nums.length;i++){
        let num = nums[i];
        let complement = target - num;

        if(map[num] !== undefined){
            return ([map[num],i])
        }

        map[complement]=i
    }
}


var twoSums = function(nums,target){
    let map={} // value : index

    for (let i=0;i<nums.length;i++){

        if(map[target-nums[i]] !== undefined){
            return[map[target-nums[i]],i] 
        }
        else{
        map[nums[i]]=i
        }
    }
}

console.log(twoSums([2,7,11,5],9))