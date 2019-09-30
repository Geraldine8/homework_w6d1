//
// Scope Homework: Who Dunnit
// Learning Objectives
// Understand function scope
// Know the difference in between the let and const keywords
// Brief
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.
// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';
  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Retun expected: The murder is Mr. White.
//Reason: As any key words(var, let or conts) was included when the function was declared - the global variable has been updated.
