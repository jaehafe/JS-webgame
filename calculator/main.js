let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

// 함수가 함수를 리턴하는 형태(고차함수)
// const onClickNumber = (number) => () => {
//   if (operator) {
//     // 변수가 있다
//     numTwo += number;
//   } else {
//     // 변수가 없다
//     numOne += number;
//   }
//   $result.value += number;
// };

const onClickNumber = (e) => {
  if (!operator) {
    numOne += e.target.textContent;
    $result.value += e.target.textContent;
    return;
  }
  // numTwo가 없으면 화면에 숫자를 지워라
  if (!numTwo) {
    $result.value = '';
  }
  numTwo += e.target.textContent;
  $result.value += e.target.textContent;
};

const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요');
  }
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document
  .querySelector('#minus')
  .addEventListener('click', onClickOperator('-'));
document
  .querySelector('#divide')
  .addEventListener('click', onClickOperator('/'));
document
  .querySelector('#multiply')
  .addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if (numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
  } else {
    alert('숫자를 먼저 입력하세요');
  }
});

document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  operator = '';
  numTwo = '';
  $result.value = '';
  $operator.value = '';
});

// if (조건a) {
//   if (조건b) {
//     if (조건c) {
//     }
//   } else {
//     if (조건d) {
//       if (조건e) {
//       } else {
//       }
//     } else {
//     }
//   }
// }

// 중첩문 줄이는 방법
// function test() {
//   let result = '';
//   if (!a) {
//     result = 'a';

//     result += 'b';
//     return result;
//   }
//   if (!b) {
//     result = 'c';

//     result += 'b';
//     return result;
//   }
// }
// if문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
// 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
// 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
// else를 제거한다(이때 중첩 하나가 제거된다).

console.log([1, 0].join(''));
