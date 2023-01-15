const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
  scissors: '0',
  rock: '-220px',
  paper: '-440px',
};

let computerChoice = 'scissors';
const changeComputerHand = () => {
  if (computerChoice === 'scissors') {
    // 가위면
    computerChoice = 'rock';
  } else if (computerChoice === 'rock') {
    // 바위
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    // 보
    computerChoice = 'scissors';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
  console.log('rock');
};

let intervalId = setInterval(changeComputerHand, 50);

// 버그수정 첫번째 방법
// const clickButton = () => {
//   clearInterval(intervalId);
//   $rock.removeEventListener('click', clickButton);
//   $scissors.removeEventListener('click', clickButton);
//   $paper.removeEventListener('click', clickButton);

//   setTimeout(() => {
//     intervalId = setInterval(changeComputerHand, 50);
//     $rock.addEventListener('click', clickButton);
//     $scissors.addEventListener('click', clickButton);
//     $paper.addEventListener('click', clickButton);
//   }, 1000);
// };

// 버그수정 두번째 방법
let clickable = true;
const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;

    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
};

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
