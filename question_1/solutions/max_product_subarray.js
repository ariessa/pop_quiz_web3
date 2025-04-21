const max_product_subarray = (nums) => {
  if (nums.length === 0) return 0;

  let max_product = nums[0],
    min_product = nums[0],
    result = nums[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      // If the current number is negative, swap max and min
      [max_product, min_product] = [min_product, max_product];
    }

    // Update the max and min product for the current element
    max_product = Math.max(nums[i], max_product * nums[i]);
    min_product = Math.min(nums[i], min_product * nums[i]);

    // Update the result to the maximum product found so far
    result = Math.max(result, max_product);
  }

  return result;
};

module.exports = max_product_subarray;
