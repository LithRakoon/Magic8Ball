const button = document.querySelector('#ask-question');
let userName = 'Joe Biden';
let userQuestion = 'Will I die';

window.onload = function() {
  button.addEventListener('click', handleButtonClick);
};

function handleButtonClick(event)
{
  userName = document.querySelector('#uname').value;
  userQuestion = document.querySelector('#question').value;


  let eightBall = '';
  let p_tag = document.querySelector('#result');

const eightBallAnswers = new Array(
    'It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes'
);

let randomNumber = Math.floor(Math.random() * eightBallAnswers.length);

eightBall = eightBallAnswers[randomNumber]

   if (userQuestion === '') {
     p_tag.innerHTML = 'Please Fill in the Question'
   } else if (userQuestion === 'will i become god') {
     p_tag.innerHTML = userName === '' ? 'Hello!' : `Hello ${userName}!`;
     p_tag.innerHTML += '<br />' + 'Question: ' + (userName === '' ? userQuestion : `${userName} asked ${userQuestion}`);
     p_tag.innerHTML += '<br /><br />' + 'It is certain';
   } else {
    p_tag.innerHTML = userName === '' ? 'Hello!' : `Hello ${userName}!`;
    p_tag.innerHTML += '<br />' + 'Question: ' + (userName === '' ? userQuestion : `${userName} asked ${userQuestion}`);
    p_tag.innerHTML += '<br /><br />' + eightBall;
  }
}