const shuffle = (nums, n) => {
    const result = new Array(2 * n);
    let j = 0;
    for (let i = 0; i < n; i++) {
      result[j++] = nums[i];
      result[j++] = nums[i + n];
    }
    return result;
  };