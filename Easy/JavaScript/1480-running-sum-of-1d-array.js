/**
 * Given an array `nums`. We define a running sum of an array as
 * `runningSum[i] = sum(nums[0]...nums[i])`
 *
 * return the running `nums`
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [1, 2, 3, 4];
var runningSum = function (nums) {
  var sum = [];
  var init = 0;
  for (let i = 0; i < nums.length; i++) {
    let element = (init += nums[i]);
    sum.push(element);
  }
  return sum;
};

console.log(runningSum(nums));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
