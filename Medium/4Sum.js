/*
18. 4Sum

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if(nums.length ==0) return []
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if(nums[i]+nums[nums.length-3]+nums[nums.length-2]+nums[nums.length-1] <target) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if(nums[i]+nums[j]+nums[j+1]+nums[j+2]>target) break;
      if (j > i+1 && nums[j] === nums[j - 1]) continue;
      if(nums[j]+nums[nums.length-3]+nums[nums.length-2]+nums[nums.length-1] <target) continue;
      let start = j + 1;
      let last = nums.length - 1;

      while (start < last) {
        let sum = nums[i] +nums[j]+ nums[start] + nums[last];
        if (sum === target) {
          res.push([nums[i],nums[j], nums[start], nums[last]]);
          while (nums[start] === nums[start + 1]) start++;
          while (nums[last] === nums[last - 1]) last--;
          start++;
          last--;
        } else if (sum < target) {
          start++;
        } else last--;
      }
    }
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
