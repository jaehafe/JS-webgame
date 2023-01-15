// 다음 이벤트 리스너를 removeEventListener 메서드로 제거해 보세요.

// const fun = (값) => () => {
//   console.log('고차 함수입니다', 값);
// }
// 태그.addEventListener('click', fun(1));

const fun = (값) => () => {
  console.log('고차 함수입니다', 값);
};
const fun1 = fun(1);
fun1 === fun1;
태그.addEventListener('click', fun1);
태그.removeEventListener('click', fun1);

// (() => {}) === (() => {}) false
