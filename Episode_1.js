
//
// Scope Homework: Who Dunnit
// Learning Objectives
// Understand function scope
// Know the difference in between the let and const keywords
// Brief
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.
// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Return I would expect:
// 'The murder is Miss Scarlet'
// Reason: A constants scope can be either global or local

//Returned 'The murder is Miss Scarlet'
