/**
 * This function should take a string
 * and return a greeting in the form of:
 *
 * "Hello, {name}!";
 *
 * but only if the name is "Alice" or "Bob".
 * So if we pass "Jane Doe" as the name, we
 * should get:
 *
 * "Hello!"
 *
 * but if we pass "Alice" we should get:
 *
 * "Hello, Alice!"
 */

export const discriminator = (name) => {
  if(name==="Alice" || name==="Bob"){
          return(`Hello, ${name}!`);
  } else return("Hello!");
  
};

console.log(discriminator());