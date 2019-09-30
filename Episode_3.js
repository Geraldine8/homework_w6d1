
//
// Scope Homework: Who Dunnit
// Learning Objectives
// Understand function scope
// Know the difference in between the let and const keywords
// Brief
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.
// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Return expected: first veredic will be: 'The murderer is Mrs. Peacock'
//reason: let variable inside of the function has local scope.
//Second veredict 'The murderer is Professor Plum.'
//reason: will look for the 'murderer' declared at the global variable
