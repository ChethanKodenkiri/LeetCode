/*

Generic solution for N th sum 
example 2Sum,3Sum,4Sum etc ...

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var KSum = function(nums, target,k) {
    nums.sort((a,b)=>a-b)
    return KsumHelper(nums,target,k,0)
}

function KsumHelper(nums,target,k,start){
    const result=[]
    const n =nums.length;

    //base case
    if(k==2){
        let left = start
        let right = n-1

        while(left<right){
            const sum = nums[left]+nums[right]
            if(sum==target){
                result.push([nums[left]+nums[right]])

                while(left<right && nums[left]==nums[left+1]) left++
                while(left<right && nums[right]==nums[right-1]) right--
                left++
                right--
            }else if(sum<target) left++
            else right--
        }
    }else{
        //Recusrsively reduce k
        for(let i=start;i<n-k+1;i++){
            if(i>start && nums[i-1]===nums[i]) continue
            const subResults = KsumHelper(nums,target-nums[i],k-1,i+1)
            for(const subResult of subResults){
                result.push([nums[i],...subResult])

            }
        }
    }
    return result;
}

console.log(KSum([1,0,-1,0,-2,2],0,4))