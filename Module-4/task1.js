arr = [8, 13, 2,7,11,15]


// SOLUTION-1: Brute Force solution 
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function twoSum(nums, target){
    n = nums.length;
    for (let i=0; i<n; i++){
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}

let output =  twoSum(arr, 21);
console.log(output);



// SOLUTION-2: applying hash table 
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSumHashTable(nums, target){
    let seen = {};

    for (let i=0; i< nums.length; i++){
        let need = target - nums[i];
        if (need in seen){
            return [seen[need], i];
        } else {
            seen[nums[i]] = i;
        }
    }
    return null;
}

let output2 =  twoSumHashTable(arr, 21);
console.log("Output from hash table method:")
console.log(output2);




// SOLUTION-3:  binary search approach
// Time Complexity:
// Space Complexity: