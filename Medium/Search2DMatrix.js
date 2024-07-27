/*
74. Search a 2D Matrix


You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let matrixs =matrix.flat()
    let [start,end]=[0,matrixs.length-1]
    while(start<=end){
        let middle = Math.floor((start+end)/2)
        if(matrixs[middle]===target){
            return true
        }
        else if(matrixs[middle]>target){
            end=middle-1
        }else if(matrixs[middle]<target){
            start=middle+1
        }
    }
    return false
};


function searchMatrixs(matrix,target){
    let [ROW,COL]=[matrix.length,matrix[0].length]
 
    let[top,bot]=[0,ROW-1]

    while(top<=bot){
        let row = Math.floor((top+bot)/2)
       
        if(matrix[row][COL-1] <target){  
            top=row+1
        }else if(matrix[row][0]>target){   
            bot=row-1
        }else{break}
    }
    if(!(top<=bot)){return false}

    let row = Math.floor((top+bot)/2)
    console.log(row)
    let[start,end]=[0,COL-1]
    while(start<=end){
       let middle = Math.floor((start+end)/2)
       if(matrix[row][middle]>target){end=middle-1}
       else if(matrix[row][middle]<target){start=middle+1}
       else if(matrix[row][middle]===target){return true} 
    }
    return false
}



console.log(searchMatrixs([[1,3,5,7],[10,11,16,20],[23,30,34,60],[100,300,340,600]],3))