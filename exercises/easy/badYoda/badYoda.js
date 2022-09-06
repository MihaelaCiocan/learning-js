/**
 * Write a function that takes a string and reverses the order of the words in
 * the string, keeping the words themselves intact.
 * 
 * Example: 
 * "May the force be with you" => "you with be force the May"
 */

export const badYoda = (string) => {
    const words =string.split(' ');
    const reverswords= [];
 for (let i=words.length-1; i>=0; i--)
 {
     reverswords.push(words[i]);
}
    return reverswords.join(' ');
};

console.log(badYoda("May the force be with you"));