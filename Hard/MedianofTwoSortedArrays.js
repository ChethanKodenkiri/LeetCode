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