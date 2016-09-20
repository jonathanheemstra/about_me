"use strict";

var job = prompt('Do you like your job?').toLowerCase();
console.log('Do you like your job? User\'s answer: ' + job);

if (job == "yes") {
  var opportunity = prompt('Do you feel like you have opportunity for growth in your career?').toLowerCase();
  console.log('Do you feel like you have opportunity for growth in your career? User\'s answer: ' + opportunity);
  if (opportunity == "yes") {
    opportunity = 1;
    console.log('value = ' + opportunity);
  } else {
    opportunity = 0;
    console.log('value = ' + opportunity);
  }

  var switchCareers = prompt('Would you be willing to switch careers?').toLowerCase();
  console.log('Would you be willing to switch careers? User\'s answer: ' + switchCareers);
  if (switchCareers == "yes") {
    switchCareers = 1;
    console.log('value = ' + switchCareers);
  } else {
    switchCareers = 0;
    console.log('value = ' + switchCareers);
  }

  var softDev = prompt('Have you ever considered a career in software development?').toLowerCase();
  console.log('Have you ever considered a career in software development? User\'s answer: ' + softDev);
  if (softDev == "yes") {
    softDev = 1;
    console.log('value = ' + softDev);
  } else {
    softDev = 0;
    console.log('value = ' + softDev);
  }

  var moveSeattle = prompt('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment?').toLowerCase();
  console.log('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment? User\'s answer: ' + moveSeattle);
  if (moveSeattle == "yes") {
    moveSeattle = 1;
    console.log('value = ' + moveSeattle);
  } else {
    moveSeattle = 0;
    console.log('value = ' + moveSeattle);
  }

  var surveyScore = opportunity + switchCareers + softDev + moveSeattle;

  if (surveyScore >= 3) {
    alert('Based on your it seems you are happy with your career but a career in software development is just a few short months away!');
    console.log('User\'s total score: ' + surveyScore);
    console.log('Survey result: Based on your it seems you are happy with your career but a career in software development is just a few short months away!')
  } else {
    alert('Software Development is a growing field and there are numerous ways to learn more. Based on your answers it seems like a field you should spend more time investigating. CodeFellows is a place where you can accelerate your software development career.');
    console.log('User\'s total score: ' + surveyScore);
    console.log('Survey result: Software Development is a growing field and there are numerous ways to learn more. Based on your answers it seems like a field you should spend more time investigating. CodeFellows is a place where you can accelerate your software development career.')
  }
} else {
  var switchCareers = prompt('Would you be willing to switch careers?').toLowerCase();
  console.log('Would you be willing to switch careers? User\'s answer: ' + switchCareers);
  if (switchCareers == "yes") {
    switchCareers = 1;
    console.log('value = ' + switchCareers);
  } else {
    switchCareers = 0;
    console.log('value = ' + switchCareers);
  }

  var opportunity = prompt('Do you want a career with endless opportunities for growth?').toLowerCase();
  console.log('Do you want a career with endless opportunities for growth? User\'s answer: ' + opportunity)
  if (opportunity == "yes") {
    opportunity = 1;
    console.log('value = ' + opportunity);
  } else {
    opportunity = 0;
    console.log('value = ' + opportunity);
  }

  var softDev = prompt('Have you ever considered a career in software development?').toLowerCase();
  console.log('Have you ever considered a career in software development? User\'s answer: ' + softDev);
  if (softDev == "yes") {
    softDev = 1;
    console.log('value = ' + softDev);
  } else {
    softDev = 0;
    console.log('value = ' + softDev);
  }

  var moveSeattle = prompt('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment?').toLowerCase();
  console.log('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment? User\'s answer: ' + moveSeattle);
  if (moveSeattle == "yes") {
    moveSeattle = 1;
    console.log('value = ' + moveSeattle);
  } else {
    moveSeattle = 0;
    console.log('value = ' + moveSeattle);
  }

  var surveyScore = switchCareers + opportunity + softDev + moveSeattle;

  if (surveyScore >= 3) {
    alert('Based on your answers taking classes at CodeFellows seems like the right thing for you!');
    console.log('User\'s total score: ' + surveyScore);
    console.log('Survey result: Based on your answers taking classes at CodeFellows seems like the right thing for you!')
  } else {
    alert('Software Development is a growing field and there are numerous ways to learn more. Based on your answers it seems like a field you should spend more time investigating. CodeFellows is a place where you can accelerate your software development career.');
    console.log('User\'s total score: ' + surveyScore);
    console.log('Survey result: Software Development is a growing field and there are numerous ways to learn more. Based on your answers it seems like a field you should spend more time investigating. CodeFellows is a place where you can accelerate your software development career.')
  }
}
