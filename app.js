"use strict";

//question 1 about my hair color
var hairColor = prompt('Do I have blonde hair?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Do I have blonde hair? User\'s answer: ' + hairColor);

if (hairColor == 'yes' || hairColor == 'y') {
  alert('Correct! I have had blonde hair for my whole life. Most of my family is blonde haired as well.');
  console.log('User\'s answer: ' + hairColor);
  hairColor = 1;
} else if (hairColor == 'no' || hairColor == 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + hairColor + '\nMy hair color actually is blonde.');
  console.log('User\'s answer: ' + hairColor);
  hairColor = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
}

//question 2 about my hometown
var hometown = prompt('Is my hometown Bellingham, WA?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Is my hometown Bellingham, WA? User\'s answer: ' + hometown);

if (hometown == 'no' || hometown == 'n') {
  alert('Correct!\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.');
  console.log('User\'s answer: ' + hometown);
  hometown = 1;
} else if (hometown == 'yes' || hometown == 'y') {
  alert('Sorry, that\'s incorrect. You answered ' + hometown + '\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.');
  console.log('User\'s answer: ' + hometown);
  hometown = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
}

//question 3 about my previous job
var previousJob = prompt('My previous job was in construction?\nPlease answer "yes" or "no"').toLowerCase();
console.log('My previous job was in construction? User\'s answer: ' + previousJob);

if (previousJob == 'no' || previousJob == 'n') {
  alert('Correct!\nMy previous job was in marketing for a software company called Faithlife.');
  console.log('User\'s answer: ' + previousJob);
  previousJob = 1;
} else if (previousJob == 'yes' || previousJob == 'y') {
  alert('Sorry, that\'s incorrect. You answered ' + previousJob + '\nMy previous job was in marketing for a software company called Faithlife.');
  console.log('User\'s answer: ' + previousJob);
  previousJob = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
}

//question 4 about my favorite baseball team
var favBaseballTeam = prompt('Is my favorite baseball team the Seattle Mariners?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Is my favorite baseball team the Seattle Mariners? User\'s answer: ' + favBaseballTeam);

if (favBaseballTeam == 'yes' || favBaseballTeam == 'y') {
  alert('Correct! I have been a huge Seattle Mariners fan since I was a little kid playing t-ball.');
  console.log('User\'s answer: ' + favBaseballTeam);
  favBaseballTeam = 1;
} else if (favBaseballTeam == 'no' || favBaseballTeam == 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + favBaseballTeam + '\nI have been a huge Seattle Mariners fan since I was a little kid playing t-ball.');
  console.log('User\'s answer: ' + favBaseballTeam);
  favBaseballTeam = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
}

//question 5 about my nickname
var myNickName = prompt('Is my nickname Jonny?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Is my nickname Jonny? User\'s answer: ' + myNickName);

if (myNickName == 'yes' || myNickName == 'y') {
  alert('Correct! I have gone by the nickname "Jonny" since 2nd grade.');
  console.log('User\'s answer: ' + myNickName);
  myNickName = 1;
} else if (myNickName == 'no' || myNickName == 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + myNickName + '\nI have gone by the nickname "Jonny" since 2nd grade.');
  console.log('User\'s answer: ' + myNickName);
  myNickName = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
}

//Results
var userScore = hairColor + hometown + previousJob + favBaseballTeam + myNickName;
console.log('User\'s final score: ' + userScore);
alert('Your final score ' + userScore + ' out of 5');
document.write('<h4 class="final_score">Your Score: ' + userScore + ' out of 5</h4>');
