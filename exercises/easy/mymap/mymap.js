/**
 * Your function receives two parameters, an array and another function. 
 * You don't know much about the elements of the array, other than the fact
 * that the function can take any element of the array as a parameter and 
 * returns some other value. 
 * 
 * Return an array that contains the values that result from calling the 
 * provided function with each element of the original array. 
 * 
 * 
 * Example:
 * 
 * ([1, 2, 3, 4], double) => [2, 4, 6, 8]
 * 
 * Where double is defined as:
 * 
 * const double = (n) => n*2;
 * 
 * Note that you do not need to define an additional function - the above 
 * `guess` function is just an example.
 */

export const mymap = (arr, fn) => {
    const b = [];
    for (leti=0; i<arr.length; i++){
       b.push(fn(arr[i]));
    }
    return b;
}

console.log(mymap([1,2,3],(elemb)=>{
    return elemb*2;
}));