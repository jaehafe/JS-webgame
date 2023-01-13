const array = [1, 3, 5, 7];
array.map((arr, i) => {
  console.log(arr, i);
});
array.forEach((number, index) => {
  console.log(number, index);
});

for (let i = 0; i < array.length; i++) {
  console.log(array[i], i);
}
