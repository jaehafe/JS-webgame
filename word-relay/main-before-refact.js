const playerNumber = parseInt(prompt('몇 명이 참가하나요?'), 10);
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

let word; // 제시어
let newWord; // 새로 입력한 단어
$input.focus();

const onClickButton = () => {
  // 제시어가 비어있는가?
  if (!word) {
    // 비어있다
    word = newWord; // 입력한 단어가 제시어가 된다
    $word.textContent = word;
    // 다음 사람에게 순서를 넘긴다
    const order = Number($order.textContent);
    // 현재 순서에 1을 더한 값이 playerNumber보다 큰가?(같은가)
    if (order + 1 === playerNumber) {
      // 다음 순서를 1로 초기화
      $order.textContent = 1;
    } else {
      // 그렇지 않으면 다음 순서를 +1
      $order.textContent = order + 1;
    }
    $input.value = '';
    $input.focus();
  } else {
    // 비어있지 않다
    // 입력한 단어가 올바른가? => 이미 입력한 단어의 끝 글자 === 입력한 단어의 첫 글자
    if (word[word.length - 1] === newWord[0]) {
      // 올바른가
      word = newWord; // 입력한 단어가 제시어가 된다
      $word.textContent = word;
      // 다음 사람에게 순서를 넘긴다
      const order = Number($order.textContent);
      // 현재 순서에서
      if (order + 1 > playerNumber) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
      $input.value = '';
      $input.focus();
    } else {
      // 올바르지 않다
      alert('올바르지 않은 단어입니다.');
      $input.focus();
    }
  }
};

const onInput = (e) => {
  // 입력한 단어
  newWord = e.target.value;
};

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClickButton);

// $input.addEventListener('keypress', (e) => {
//   newWord = e.target.value;

//   if (e.key === 'Enter') {
//     e.preventDefault();
//   }
// });
