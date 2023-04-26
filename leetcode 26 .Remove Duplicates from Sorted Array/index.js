/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arrLen = nums.length

    for(x = 0; x < arrLen; x++){
        for(y = 0; y < arrLen; y++){
            let val = y
            if(val !== x && nums[val] == nums[x]){
                nums.splice(x,1)   
            }
        }
    }
    return nums
};

console.log(removeDuplicates([0,0,0,0,0]))