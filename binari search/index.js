/**
* @param {number[]} arr
* @param {number} val
* @return {number}
*/

let binSearch = function (arr, val) {
  
    let start = 0;
    let end = arr.length-1;

    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid indevax
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===val) return mid;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < val)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}

console.log(binSearch([1,2,3,6], 6));
/*
function binSearch(arr, val) {
    let med = Math.round(arr.length / 2)
    
    for(x = 1; x < med; x++){

    }
}
*/