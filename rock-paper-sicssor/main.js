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
const clickButton = (e) => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;

    // 점수 계산 및 화면 표시
    const myChoice =
      e.target.textContent === '바위'
        ? 'rock'
        : e.target.textContent === '가위'
        ? 'scissors'
        : 'paper';

    if (myChoice === 'rock') {
      if (computerChoice === 'rock') {
        console.log('무승부');
      } else if (computerChoice === 'scissors') {
        console.log('승리');
      } else if (computerChoice === 'paper') {
        console.log('패배');
      }
    } else if (myChoice === 'scissors') {
      if (computerChoice === 'rock') {
        console.log('패배');
      } else if (computerChoice === 'scissors') {
        console.log('무승부');
      } else if (computerChoice === 'paper') {
        console.log('승리');
      }
    } else if (myChoice === 'paper') {
      if (computerChoice === 'rock') {
        console.log('승리');
      } else if (computerChoice === 'scissors') {
        console.log('패배');
      } else if (computerChoice === 'paper') {
        console.log('무승부');
      }
    }

    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
};

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
