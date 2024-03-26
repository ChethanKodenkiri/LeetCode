// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000



/**
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newNums = nums1.concat(nums2);
    newNums.sort((x, y) => { 
        return x - y;
     });
    const middleIdx = Math.floor(newNums.length / 2);

    if(newNums.length % 2 === 0) {
        return (newNums[middleIdx - 1] + newNums[middleIdx]) / 2;
    } else {
        return newNums[middleIdx];
    }
};

console.log(findMedianSortedArrays([],[1,2,3,4,5]))


