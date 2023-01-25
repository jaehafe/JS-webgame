function b() {
  var a = 1;
}
console.log(a); // Uncaught ReferenceError: a is not defined

// 블록: 중괄호를 의미
// 중괄호를 가진 애들: 함수, for, while, if, switch...
// let, const는 '중괄호' 밖에서 접근할 수 없다.
// var는 '함수'의 밖에서만 접근할 수 없다.

if (true) {
  var a = 1;
}
console.log(a); // 1
// 접근 가능하다.

if (true) {
  let a = 1;
}
console.log(a); // Uncaught ReferenceError: a is not defined

// 스코프, 클로저
// 함수 스코프를 가진 var과 비동기 함수가 만나면 클로저가 발생한다(ex addEventListener)
for (var i = 0; i < winBalls.length; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(winBalls[j], j);
      drawBall(winBalls[j], $result);
    }, 1000 * (i + 1));
  })(i);
}
// 'var는 '함수'의 밖에서만 접근할 수 없다'는 특성을 이용해 해결가능하다.
// i -> j 값을 전달, j는 함수 안에 갇히기 때문
// 클로저: 함수와 함수 밖에 있는 변수 관계
for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    console.log(winBalls[i], i);
    drawBall(winBalls[i], $result);
  }, 1000 * (i + 1));
}
// i 값이 for문 중괄호 안에 고정이 된다.
