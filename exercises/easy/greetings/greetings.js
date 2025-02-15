/**
 * This function should take a string
 * and return a string in the form of:
 *
 * "Hello, {name}!";
 *
 * So calling this function with the name
 * "Jane Doe" should result in:
 *
 * "Hello, Jane Doe!"
 */

export const greetings = (name) => {
    return (`Hello, ${name}!`);
};
console.log(greetings());