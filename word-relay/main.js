const number = parseInt(prompt('몇 명이 참가하나요?'), 10);
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

let word; // 제시어
let newWord; // 새로 입력한 단어
$input.focus();

const onClickButton = () => {
  // 제시어가 비어있는가?
  if (!word || word[word.length - 1] === newWord[0]) {
    // 비어있다
    word = newWord; // 입력한 단어가 제시어가 된다
    $word.textContent = word;
    // 다음 사람에게 순서를 넘긴다
    const order = Number($order.textContent);
    // 현재 순서에서
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    // 올바르지 않다
    alert('올바르지 않은 단어입니다.');
  }
  $input.value = '';
  $input.focus();
};

const onInput = (e) => {
  // 입력한 단어
  newWord = e.target.value;
};

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClickButton);

$input.addEventListener('keypress', (e) => {
  // newWord = e.target.value;

  if (e.key === 'Enter') {
    e.preventDefault();
    $button.click();
  }
});
