const candidate = Array(45)
  .fill()
  .map((v, i) => {
    return i + 1;
  });
const shuffle = [];

while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);

  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle);

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const colorize = (number, $tag) => {
  if (number < 10) {
    $tag.style.backgroundColor = 'red';
    $tag.style.color = 'white';
  } else if (number < 20) {
    $tag.style.backgroundColor = 'orange';
  } else if (number < 30) {
    $tag.style.backgroundColor = 'yellow';
  } else if (number < 40) {
    $tag.style.backgroundColor = 'blue';
    $tag.style.color = 'white';
  } else {
    $tag.style.backgroundColor = 'green';
    $tag.style.color = 'white';
  }
};

const showBall = (number, $target) => {
  setTimeout(() => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    colorize(number, $ball);
    $ball.textContent = number;
    $target.append($ball);
  }, 1000);
};

// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     showBall(winBalls[i], $result);
//   }, (i + 0) * 1000);
// }

Array(6)
  .fill()
  .map((ele, i) => {
    return setTimeout(() => {
      showBall(winBalls[i], $result);
    }, (i + 0) * 1000);
  });

setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);
