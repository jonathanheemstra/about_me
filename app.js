'use strict';

var yesNoQuestions = [
  'Do I have blonde hair?\nPlease answer "yes" or "no"',
  'Is my hometown Bellingham, WA?\nPlease answer "yes" or "no"',
  'My previous job was in construction?\nPlease answer "yes" or "no"',
  'Is my favorite baseball team the Seattle Mariners?\nPlease answer "yes" or "no"',
  'Is my nickname Jonny?\nPlease answer "yes" or "no"'
];
var yesNoAnswers = [
  ['y', 'yes'],
  ['n', 'no'],
  ['n', 'no'],
  ['y', 'yes'],
  ['y', 'yes']
];
var oppositeAnswers = [
  ['n', 'no'],
  ['y', 'yes'],
  ['y', 'yes'],
  ['n', 'no'],
  ['n', 'no'],
];
var yesNoAnswersCorrect = [
  'Correct! I have had blonde hair for my whole life. Most of my family is blonde haired as well.',
  'Correct!\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.',
  'Correct!\nMy previous job was in marketing for a software company called Faithlife.',
  'Correct! I have been a huge Seattle Mariners fan since I was a little kid playing t-ball.',
  'Correct! I have gone by the nickname "Jonny" since 2nd grade.'
];
var userAnswer;
var yesNoAnswersIncorrect = [
  'Sorry, that\'s incorrect. You answered ' + userAnswer + '\nMy hair color actually is blonde.',
  'Sorry, that\'s incorrect. You answered ' + userAnswer + '\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.',
  'Sorry, that\'s incorrect. You answered ' + userAnswer + '\nMy previous job was in marketing for a software company called Faithlife.',
  'Sorry, that\'s incorrect. You answered ' + userAnswer + '\nI have been a huge Seattle Mariners fan since I was a little kid playing t-ball.',
  'Sorry, that\'s incorrect. You answered ' + userAnswer + '\nI have gone by the nickname "Jonny" since 2nd grade.'
];
var nonYesNoResponse = 'Please only answer questions with "yes" or "no"';

var userScore = 0;

//opening question about users name
function provideName() {
  var userName = prompt('What is your name?');
  console.log('User\'s name: ' + userName);
  alert('Hi, ' + userName + '!\nAre you ready to play a fun guessing game?\nLet\'s get started!');
  return userName;
}

function askYesNoQuestions() {
  for (var i = 0; i < yesNoQuestions.length; i++) {
    var userAnswer = prompt(yesNoQuestions[i]).toLowerCase();
    console.log(yesNoQuestions[i]);
    console.log(userAnswer);
    if (userAnswer === yesNoAnswers[i][0] || userAnswer === yesNoAnswers[i][1]) {
      alert(yesNoAnswersCorrect[i]);
      console.log('User\'s answer: ' + userAnswer);
      userScore += 1;
    } else if (userAnswer === oppositeAnswers[i][0] || userAnswer === oppositeAnswers[i][1]) {
      alert(yesNoAnswersIncorrect[i]);
      console.log('User\'s answer: ' + userAnswer);
    } else {
      alert(nonYesNoResponse);
      console.log('User answer did not contain a "yes" or "no"');
    }
  }
}

//question 6 guess how many years I played baseball
function question_6() {
  var randomNumber = Math.floor(Math.random() * 20) + 1; //had done work with random numbers previously but had to consult http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript to jog my memory
  console.log('Random number generated for question 6: ' + randomNumber);
  for (var i = 0; i < 4; i++) {
    var yearsPlaying = parseFloat(prompt('How many years did I play baseball?\nPlease provide a number between 0 and 20.'));
    var remainingGuesses = 4 - i;
    var currentGuess = i + 1;
    if (yearsPlaying === randomNumber) {
      alert('Great guess! That is correct. I played baseball for ' + randomNumber + ' years');
      console.log('User\'s guess: ' + yearsPlaying + '\nGuessed correctly on try ' + currentGuess + ' of 4');
      userScore += 1;
      break;
    } else if (yearsPlaying > randomNumber) {
      alert('That\'s too HIGH. Guess again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
      console.log('User\'s guess: ' + yearsPlaying + '\nGuessed incorrectly on try ' + currentGuess + ' of 4');
    } else {
      alert('That\'s too LOW. Guess again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
      console.log('User\'s guess: ' + yearsPlaying + '\nGuessed incorrectly on try ' + currentGuess + ' of 4');
    }
  }
  if (i === 4) {
    alert('Sorry, you didn\'t guess the right number. The right number was ' + randomNumber);
  }
}

//question 7 what are my favorite things
function question_7() {
  var myFavoriteThings = ['backcountry skiing', 'hanging out with friends', 'hiking', 'rock climbing', 'running', 'playing board games', 'watching classic sitcoms', 'kayaking', 'playing video games', 'watching baseball'];
  var a = 0;
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
      console.log('User\'s guess: ' + favoriteThings + '\nGuessed correctly on try ' + currentGuess + ' of 6');
      userScore += 1;
      break;
    } else {
      console.log('User\'s guess: ' + favoriteThings + '\nGuessed incorrectly on try ' + currentGuess + ' of 6');
      alert('You guessed incorrectly. Try again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
    }
    a++;
  }
  if (a === 6) {
    alert('Sorry, you didn\'t guess any of my favorite things to do. Some of my favorite things to do are ' + myFavoriteThings);
  }
}

//Results
function results(){
  console.log('User\'s final score: ' + userScore + ' out of 7');
  if (userScore >= 6) {
    alert(userName + ', Your final score was ' + userScore + ' out of 7.\nGood work! You really know me well or are really good at guessing.' );
  } else if (userScore >= 4) {
    alert(userName + ', Your final score was ' + userScore + ' out of 7.\nGood work! You seem to know a bit about me.');
  } else {
    alert(userName + ', Your final score was ' + userScore + ' out of 7.\nI think we should hangout sometime because you don\'t know very much about me');
  }
  document.write('<h4 class="final_score">Your Score:<br>' + userScore + ' out of 7</h4>');
}

var userName = provideName();
askYesNoQuestions();
question_6();
question_7();
results();
