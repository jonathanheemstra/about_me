var job = prompt('Do you like your job?');
console.log('Do you like your job? User\'s answer: ' + job);
if (job == "yes") {
  var opportunity = prompt('Do you feel like you have opportunity for growth in your career?');
  console.log('Do you feel like you have opportunity for growth in your career? User\'s answer: ' + opportunity);

  var switchCareers = prompt('Would you be willing to switch careers?');
  console.log('Would you be willing to switch careers? User\'s answer: ' + switchCareers);

  var softDev = prompt('Have you ever considered a career in software development?');
  console.log('Have you ever considered a career in software development? User\'s answer: ' + softDev);

  var moveSeattle = prompt('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment?');
  console.log('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment? User\'s answer: ' + moveSeattle);

} else {
  var switchCareers = prompt('Would you be willing to switch careers?');
  console.log('Would you be willing to switch careers? User\'s answer: ' + switchCareers);

  var opportunity = prompt('Do you want a career with endless opportunities for growth?');
  console.log('Do you want a career with endless opportunities for growth? User\'s answer: ' + opportunity)

  var softDev = prompt('Have you ever considered a career in software development?');
  console.log('Have you ever considered a career in software development? User\'s answer: ' + softDev);

  var moveSeattle = prompt('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment?');
  console.log('Would you be willing to move to seattle and dedicate 6 months in order to get a new career in software devleopment? User\'s answer: ' + moveSeattle);

}
