'use strict';

//opening question about users name
var userName = prompt('What is your name?');
console.log('User\'s name: ' + userName);
alert('Hi, ' + userName + '!\nAre you ready to play a fun guessing game?\nLet\'s get started!');

//question 1 about my hair color
var hairColor = prompt('Do I have blonde hair?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Do I have blonde hair?');

if (hairColor === 'yes' || hairColor === 'y') {
  alert('Correct! I have had blonde hair for my whole life. Most of my family is blonde haired as well.');
  console.log('User\'s answer: ' + hairColor);
  hairColor = 1;
} else if (hairColor === 'no' || hairColor === 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + hairColor + '\nMy hair color actually is blonde.');
  console.log('User\'s answer: ' + hairColor);
  hairColor = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
  hairColor = 0;
}

//question 2 about my hometown
var hometown = prompt('Is my hometown Bellingham, WA?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Is my hometown Bellingham, WA?');

if (hometown === 'no' || hometown === 'n') {
  alert('Correct!\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.');
  console.log('User\'s answer: ' + hometown);
  hometown = 1;
} else if (hometown === 'yes' || hometown === 'y') {
  alert('Sorry, that\'s incorrect. You answered ' + hometown + '\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.');
  console.log('User\'s answer: ' + hometown);
  hometown = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
  hometown = 0;
}

//question 3 about my previous job
var previousJob = prompt('My previous job was in construction?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: My previous job was in construction?');

if (previousJob === 'no' || previousJob === 'n') {
  alert('Correct!\nMy previous job was in marketing for a software company called Faithlife.');
  console.log('User\'s answer: ' + previousJob);
  previousJob = 1;
} else if (previousJob === 'yes' || previousJob === 'y') {
  alert('Sorry, that\'s incorrect. You answered ' + previousJob + '\nMy previous job was in marketing for a software company called Faithlife.');
  console.log('User\'s answer: ' + previousJob);
  previousJob = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
  previousJob = 0;
}

//question 4 about my favorite baseball team
var favBaseballTeam = prompt('Is my favorite baseball team the Seattle Mariners?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Is my favorite baseball team the Seattle Mariners?');

if (favBaseballTeam === 'yes' || favBaseballTeam === 'y') {
  alert('Correct! I have been a huge Seattle Mariners fan since I was a little kid playing t-ball.');
  console.log('User\'s answer: ' + favBaseballTeam);
  favBaseballTeam = 1;
} else if (favBaseballTeam === 'no' || favBaseballTeam === 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + favBaseballTeam + '\nI have been a huge Seattle Mariners fan since I was a little kid playing t-ball.');
  console.log('User\'s answer: ' + favBaseballTeam);
  favBaseballTeam = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
  favBaseballTeam = 0;
}

//question 5 about my nickname
var myNickName = prompt('Is my nickname Jonny?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Is my nickname Jonny?');

if (myNickName === 'yes' || myNickName === 'y') {
  alert('Correct! I have gone by the nickname "Jonny" since 2nd grade.');
  console.log('User\'s answer: ' + myNickName);
  myNickName = 1;
} else if (myNickName === 'no' || myNickName === 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + myNickName + '\nI have gone by the nickname "Jonny" since 2nd grade.');
  console.log('User\'s answer: ' + myNickName);
  myNickName = 0;
} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');
  myNickName = 0;
}

//question 6 guess how many years I played baseball
for (var i = 0; i < 4; i++) {
  var yearsPlaying = parseFloat(prompt('How many years did I play baseball?\nPlease provide a number between 0 and 20.'));
  var remainingGuesses = 4 - i;
  var currentGuess = i + 1;
    if (yearsPlaying === 12) {
      alert('Great guess! That is correct. I played baseball for 12 years');
      console.log('User\'s guess: ' + yearsPlaying + '\nGuessed correctly on try ' + currentGuess +' of 4');
      yearsPlaying = 1;
      break;
    } else if (yearsPlaying > 12) {
      alert('That\'s to HIGH. Guess again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
      console.log('User\'s guess: ' + yearsPlaying + '\nGuessed incorrectly on try ' + currentGuess +' of 4');
      yearsPlaying = 0;
    } else {
      alert('That\'s to LOW. Guess again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
      console.log('User\'s guess: ' + yearsPlaying + '\nGuessed incorrectly on try' + currentGuess +' of 4');
      yearsPlaying = 0;
    }
}

//question 7 where have I lived
var myFavoriteThings = ['backcountry skiing', 'hanging out with friends', 'hiking', 'rock climbing', 'running', 'playing board games', 'watching classic sitcoms', 'kayaking', 'playing video games', 'watching baseball'];
var a = 0
while (a < 6) {
  var favoriteThings = prompt('Can you guess one of my favorite things to do in my spare time?');
  favoriteThings = favoriteThings.toLowerCase();
  var foundAnswer = false;
  var remainingGuesses = 6 - a;
  var currentGuess = a + 1;
  for (var i = 0; i < myFavoriteThings.length; i++) {
    if (myFavoriteThings[i] === favoriteThings) {
        foundAnswer = true;
      }
  }
  if (foundAnswer === true) {
    alert('Nicely done!\n' + favoriteThings + ' is one of my favorite things to do.');
    console.log('User\'s guess: ' + favoriteThings + '\nGuessed correctly on try ' + currentGuess +' of 6');
    favoriteThings = 1
    break;
  } else {
    console.log('User\'s guess: ' + favoriteThings + '\nGuessed incorrectly on try ' + currentGuess +' of 6');
    alert('You guessed incorrectly. Try again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
  }
  favoriteThings = 0;
  a++
}

//Results
var userScore = hairColor + hometown + previousJob + favBaseballTeam + myNickName + yearsPlaying + favoriteThings;
console.log('User\'s final score: ' + userScore + ' out of 7');
alert(userName + ', Your final score was ' + userScore + ' out of 7.\nGood work!' );
document.write('<h4 class="final_score">Your Score: ' + userScore + ' out of 7</h4>');
