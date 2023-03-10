const candidate = Array(45)
  .fill()
  .map((v, i) => {
    return i + 1;
  });
const shuffle = [];

while (candidate.length > 0) {
  // 무작위 인덱스 뽑기
  const random = Math.floor(Math.random() * candidate.length);

  // 뽑은 값은 배열에 들어 있다
  const spliceArray = candidate.splice(random, 1);

  // 배열에 들어 있는 값을 꺼내서
  const value = spliceArray[0];

  // shuffle 배열에 넣기
  shuffle.push(value);
}

console.log(shuffle);

// 오름차순 정렬 // slice를 붙이면 원본을 안 바꿀 수 있다.
const winBalls = shuffle.slice(0, 6).sort((a, b) => {
  return a - b;
});
const bonus = shuffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const showBall = (number, $target) => {
  setTimeout(() => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = number;
    $target.appendChild($ball);
  }, 1000);
};

// for문
// for (let i = 0; i < winBalls.length; i++) {
//   setTimeout(() => {
//     showBall(winBalls[i], $result);
//   }, (i + 1) * 1000);
// }

// for -> map
Array(winBalls.length)
  .fill()
  .map((ele, i) =>
    setTimeout(() => {
      showBall(winBalls[i], $result);
    }, (i + 1) * 1000)
  );

setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);

/** while -> for문
for (let i = candidate.length; i > 0; i--) {
  const random = Math.floor(Math.random() * i);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle);
 */
