'use strict';

var username = prompt('Welcome! Before I take you to my profile, Lets play a quick game. What is your name?');
console.log(username);

//Identify user
var user = prompt('Hi ' + username + ', I will be asking you 5 random questions. Are you ready?');

if (user === 'Yes' || user === 'Yes'.toLowerCase() || user === 'Y'.toLowerCase() || user === 'Yes'.toUpperCase()) {
  console.log('Question 1');
  alert('Awesome! Lets get started.');
} else {
  alert('Ding! Ding! Ding! Wrong answer.');
}

//First Question
alert('First question, this is going to test your math skills');
var q1 = prompt('What is the sum of 1 + 1 - 1 + 1 - 1 + 1 - 1 - 1 + 1 + 1 - 1?');
while (q1 !== '1') {
  q1 = prompt('Wrong, try again. \n 1 + 1 - 1 + 1 - 1 + 1 - 1 - 1 + 1 + 1 - 1?');
}
console.log('Math skills in a while Loop');
alert('Good job!');

//Second question
var q2 = prompt('Question dos: Can you dream and snore at the same time?');

if (q2 === 'No' || q2 === 'No'.toLowerCase() || q2 === 'N'.toLowerCase() || q2 === 'No'.toUpperCase()) {
  console.log('if else');
  alert('Thats correct! According to the research you cant snore and dream at the same time.');
} else {
  alert('Fun fact, you cant dream and snore at the same time.');
}

//Third Question
do {
  var q3 = prompt('Question tres: True or False. banging your head against a wall burns 150 calories an hour?');
} while (q3 === 'True' || q3 === 'True'.toLowerCase() || q3 === 'T'.toLowerCase() || q3 === 'True'.toUpperCase());
console.log('do whole workout');
alert('That is correct, banging your head against the wall can burn 150 calories an hour.');

//Fourth Question
var q4 = prompt('Question four: True or False. A "buttload" is a real measurement of weight?');
if (q4 === 'True' || q4 === 'True'.toLowerCase() || q4 === 'T'.toLowerCase() || q4 === 'True'.toLowerCase()) {
  console.log('if else buttload');
  alert('That is correct, according to research "buttload" is a real weight measurement. ');
} else{
  alert('True! buttload is a real weight measurement according to reaserch.');
}

//Fifth Question
var q5 = prompt('Question five, who is the most awesome person in the galaxy? (Hint : Keith)');
while (q5 !== 'Keith') {
  q5 = prompt('Wrong, try again.');
}
console.log('While Loop');
