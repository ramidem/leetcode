// const nums = [2, 7, 11, 15];
// const nums = [2, 7, 11, 2];
const nums = [];

/**
 * given an array of integers, find if the array contains any duplicates.
 *
 * input: [1,2,3,1]
 * output: true
 *
 * input: [1,2,3]
 * output: false
 *
 * @param {number[]} nums
 * @return {boolean} boolean
 */

function containsDuplicate(nums) {
  let lookup = {};
  if (nums.length <= 0) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (!lookup[item]) {
      lookup[item] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate(nums));

// 11/22/2020 23:20 - Accepted - 84 ms - 46.7 MB - javascript
