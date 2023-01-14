function threeSum(arr, target) {
  //your code here
 
    arr.sort((a, b) => a - b);
    let closest = Infinity;
    let result = 0;
  
    for (let i = 0; i < arr.length - 2; i++) {
      let j = i + 1;
      let k = arr.length - 1;
  
      while (j < k) {
        let sum = arr[i] + arr[j] + arr[k];
        let diff = Math.abs(sum - target);
  
        if (diff < closest) {
          closest = diff;
          result = sum;
        }
  
        if (sum < target) {
          j++;
        } else if (sum > target) {
          k--;
        } else {
          return sum;
        }
      }
    }
  
    return result;
  }
  
  let S = [-1, 2, 1, -4];
  let target = 1;
  console.log(threeSum(arr, target)); 

module.exports = threeSum;
