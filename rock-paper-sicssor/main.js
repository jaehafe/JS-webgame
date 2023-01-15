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
};

let intervalId = setInterval(changeComputerHand, 50);

const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

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

    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;

    // (diff === 2 || diff === -1) 또는 [2, -1].includes(diff)
    // 2, -1 승리조건 | -2, 1 패배조건, scoreTable 참고
    if ([2, -1].includes(diff)) {
      console.log('승리');
    } else if ([-2, 1].includes(diff)) {
      console.log('패배');
    } else if ([0].includes(diff)) {
      console.log('무승부');
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

// $rock.addEventListener('click', clickButton);
// $scissors.addEventListener('click', clickButton);
// $paper.addEventListener('click', clickButton);
