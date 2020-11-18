// const nums = [2, 7, 11, 15];
const nums = [];
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
  if (nums.length < 2) return [];
  let indices = [];
  // debugger;
  let index = 0;
  while (indices.length < 2) {
    for (let i = 0; i < nums.length; i++) {
      if (index !== i) {
        if (nums[index] + nums[i] === target) {
          indices.push(index);
          indices.push(i);
        }
      }
    }
    index++;
  }
  return indices;
}

console.log(twoSum(nums, target));

// 11/18/2020 10:50 - Accepted - 7136 ms - 46.8 MB -javascript
