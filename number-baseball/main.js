const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 0; n <= 9; n += 1) {
  numbers.push(n);
}
const answer = [];
for (let n = 0; n < 4; n += 1) {
  // const index = Math.floor(Math.random() * (numbers.length - n));
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
const checkInput = (input) => {
  if (input.length !== 4) {
    return alert('4자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  return true;
};

const defeated = () => {
  const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
  $logs.append(message);
};

let out = 0;
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = $input.value;
  $input.value = '';
  if (!checkInput(value)) {
    return;
  }
  if (answer.join('') === value) {
    $logs.textContent = '홈런';
    return;
  }
  if (tries.length >= 9) {
    defeated();
    return;
  }
  // 몇 스트라이크, 볼인지 검사
  let strike = 0;
  let ball = 0;

  // answer: 3146
  // value: 1234
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    // 일치하는 숫자 발견
    if (index > -1) {
      // 자릿수도 같으면
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  if (strike === 0 && ball === 0) {
    out += 1;
    $logs.append(`${value}: ${out}아웃`, document.createElement('br'));
  } else {
    $logs.append(
      `${value}: ${strike} 스트라이크 ${ball} 볼`,
      document.createElement('br')
    );
  }
  if (out === 3) {
    defeated();
    return;
  }

  tries.push(value);
});
