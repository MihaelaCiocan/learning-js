/**
 * Implement the JavaScript Array.prototype.filter() method, according
 * to the spec:
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
 */

export const filter = (arr, fn) => {
    const b= [];
    for(let i=0; i<arr.length; i++){
        if (fn(arr[i])) { 
            b.push(arr[i])
            }
    }
    return b;
}


