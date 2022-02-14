const button = document.getElementById('ask-question');
const userNameInput = document.getElementById('uname');
const userQuestionInput = document.getElementById('question');
const result = document.getElementById('result');

const eightBallAnswers = [
  'It is certain',
  'It is decidedly so',
  'Reply hazy try again',
  'Cannot predict now',
  'Do not count on it',
  'My sources say no',
  'Outlook not so good',
  'Signs point to yes'
];

button.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  let userName = userNameInput.value;
  let userQuestion = userQuestionInput.value;

  let randomNumber = Math.floor(Math.random() * eightBallAnswers.length);
  let eightBall = eightBallAnswers[randomNumber];
  if (/will +i +become +god/i.exec(userQuestion)) {
    eightBall = 'It is certain';
  }

  let res = '';

  if (userQuestion === '') {
    res = 'Please Fill in the Question'
  } else {
    if (userName === '') {
      res = `Hello!`;
      res += `<br />Question: ${userQuestion}`;
    } else {
      res = `Hello ${userName}!`;
      res += `<br />Question: ${userName} asked ${userQuestion}`;
    }

    res += '<br /><br />' + eightBall;
  }

  result.innerHTML = res;
}
