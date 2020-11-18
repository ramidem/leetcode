const nums = [2, 7, 11, 15];
// const nums = [];
const target = 9;

// const nums = [3, 2, 4];
// const nums = [3, 3];
// const target = 6;

/**
 * @param {number[]} nums The numbers
 * @param {number} target The sum
 * @return {number[]} [0, 0] indices of the nums
 */
function twoSum(nums, target) {
  let loop = true;
  let index = 0;
  while (loop) {
    for (let i = 0; i < nums.length; i++) {
      if (index !== i) {
        if (nums[index] + nums[i] === target) {
          loop = false;
          return [index, i];
        }
      }
    }
    index++;
  }
}

console.log(twoSum(nums, target));

// 11/18/2020 11:00 - Accepted - 8760 ms - 47.1 MB - javascript
// 11/18/2020 10:50 - Accepted - 7136 ms - 46.8 MB - javascript
