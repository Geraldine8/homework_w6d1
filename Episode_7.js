//
// Scope Homework: Who Dunnit
// Learning Objectives
// Understand function scope
// Know the difference in between the let and const keywords
// Brief
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.
// Episode 7
let murderer = 'Professor Plum'; //Global scope

const changeMurderer = function() {
  murderer = 'Mr. Green'; //Updated global scope

  const plotTwist = function() {
    let murderer = 'Colonel Mustard'; // local scope

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet'; //updated local scope
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Return expected: The murder is Mr. Green
// Reason: The variable inside changeMurder function has updated the variable 'let murderer',
// moreover, the variable murderer inside unexpectedOutcome function updated the local variable which has a different scope and therefore
// is not affecting global variable.
//
