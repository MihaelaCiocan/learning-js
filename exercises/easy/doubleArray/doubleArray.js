// Given an array of numbers a , return an array b of the same length for
// which the value at each index is double the value of a at the same index
// Example:
// [1,2,3] -> [2,4,6]

export function doubleArray(a) {
 
  return a.map(x=> x*2);
}

console.log(doubleArray([3,4,12]));