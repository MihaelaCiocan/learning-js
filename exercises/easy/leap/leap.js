/**
 * Return a list of the next `n` leap years.
 * For `n` being 2, the function should return
 * [2024, 2028]
 */

const leapYears=[2024];
export const leap = (n) => {
  for (let i=1; i<n; i++){

   leapYears.push(leapYears[i-1]+4);
  }
  return(leapYears);
  
};

console.log(leap(3));