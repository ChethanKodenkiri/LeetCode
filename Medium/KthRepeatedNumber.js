/*
347. Top K Frequent Elements
Medium
Topics
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequency= {}
    for(let num of nums){
        if(frequency[num]){
            frequency[num]++;
        }else{
            frequency[num]=1
        }
    }

    let bucket = Array(nums.length+1).fill(null).map(()=>[]);

    for(let num in frequency){
        let freq = frequency[num];
        bucket[freq].push(Number(num))
    }

    let result = [];
    console.log(bucket)
    console.log(bucket.length)
    console.log("-----------------------------")
    
    for(let i=bucket.length-1;i>=0&& result.length<k;i--){
        console.log(i)
        if(bucket[i].length>0){
            result.push(...bucket[i])
        }
    }

    return result.slice(0,k)

}

// Simple solution
var topKFrequents= function(nums, k) {
    const frequencyMap = new Map();

 nums.forEach(num => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
});
console.log(frequencyMap)
// Create an array of the elements sorted by frequency
const sortedElements = [...frequencyMap.keys()].sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));
console.log(sortedElements)
// Return the top k elements
return sortedElements.slice(0, k);

};

console.log(topKFrequents([1,,2,2,3,3,3],2))