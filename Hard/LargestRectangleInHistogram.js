/*
84. Largest Rectangle in Histogram
Hard
Topics
Companies
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
 

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104
*/

'use strict';
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack=[];
    let maxArea=0;

    for(let i=0;i<heights.length;i++){
        let start =i
        while(stack.length && stack[stack.length-1][1]>heights[i]){
            let [index,height] = stack.pop()
            maxArea= Math.max(maxArea,height*(i-index))
            start=index
        }
        stack.push([start,heights[i]]);
    }
    for(let [index,height]of stack){
        maxArea=Math.max(maxArea,height*(heights.length-index))
    }
    return maxArea

};

console.log(largestRectangleArea([2,4]))