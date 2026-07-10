const analyzeArray = (nums) => {
  const length = nums.length;
  const average = nums.reduce((acc, curr) => acc + curr, 0) / length;
  let min = nums[0];
  let max = nums[0];
  for (num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  };
  return { average, min, max, length };
}

module.exports = analyzeArray;
