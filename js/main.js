// let form = new FormData();

// console.log(Data.append("text", document.getElementById("uname").value));
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



  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';
  let p_tag = document.querySelector('#result');

  switch (randomNumber) {
    case 1:
      eightBall = 'It is certain';
      break;
    case 2:
      eightBall = 'It is decidedly so';
      break;
    case 3:
      eightBall = 'Reply hazy try again';
      break;
    case 4:
      eightBall = 'Cannot predict now';
      break;
    case 5:
      eightBall = 'Do not count on it';
      break;
    case 6:
      eightBall = 'My sources say no';
      break;
    case 7:
      eightBall = 'Outlook not so good';
      break;
    case 8:
      eightBall = 'Signs point to yes';
      break;
  }

  if (userQuestion === '') {
    p_tag.innerHTML = 'Please Fill in the Question'
  } else {
    p_tag.innerHTML = userName === '' ? 'Hello!' : `Hello ${userName}!`;
    p_tag.innerHTML += '<br />' + 'Question: ' + (userName === '' ? userQuestion : `${userName} asked ${userQuestion}`);
    p_tag.innerHTML += '<br /><br />' + eightBall;
  }
  

}


// userName ? console.log(`Hello ${userName}!`)
// : console.log('Hello!');

// if (userName == '') {
//   console.log(userQuestion);
// } else {
//   console.log(`${userName} Asked ` + userQuestion);
// }



// console.log(eightBall);
