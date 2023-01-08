const playerNum = Number(prompt('몇 명이 참가하나요?'));

if (playerNum) {
  const $button = document.querySelector('button');
  const $input = document.querySelector('input');
  const $order = document.querySelector('#order');
  const $word = document.querySelector('#word');

  let word;
  let newWord;
  $input.focus();

  const onClickBtn = () => {
    //
    if (
      newWord.length === 3 &&
      (!word || word[word.length - 1] === newWord[0])
    ) {
      word = newWord;
      $word.textContent = word;
      const order = Number($order.textContent);
      if (order + 1 > playerNum) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      alert('3글자를 입력하세요');
    }
    $input.value = '';
    $input.focus();
  };

  $input.addEventListener('input', (e) => {
    newWord = e.target.value;
  });

  $button.addEventListener('click', onClickBtn);

  $input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      $button.click();
    }
  });
}
