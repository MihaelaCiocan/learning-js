/**
 * Return true if a number is divisible by 10, false otherwise.
 * 
 * Example:
 * 10 => true
 * 200 => true
 * 42 => false
 * 
 * Hint: Can you do it one line?
 */

export const div10 = (N) => {
 
    return N % 10 === 0
}

console.log(div10(20));