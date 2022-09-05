// Your function takes a string representing someone's name. You should return
// the abreviated initials of the first and last name.
// All the people have at least 2 names.
// Example:
// "John Doe" -> "J. D."
// "Marry Patrick Davis" -> "M. D."

export default function abbreviate(name) {
  const names = name.split(' ');
 
  return `${names[0].charAt(0)}. ${names[names.length-1].charAt(0)}.`;
}
console.log(abbreviate('Don Christoper Josh Aaron'));