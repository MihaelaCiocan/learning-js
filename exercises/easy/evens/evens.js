// Given an array of numbers a, return an array b containing only those elements
// of a that are Even

// Example:

// [1,2,3,4,5,6] -> [2,4,6]

import {filter} from '../filter/filter.js'
export default function evens(a) {
   return filter(a,(n)=>{
      return n % 2===0; 
      
    })
}

console.log(evens([1,2,3,4,5,6]));