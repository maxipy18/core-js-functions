function getArgumentsCount(arr) {
  const result = arr.map((item) => item.length);
  console.log(result);
}

getArgumentsCount([
  function () {
    console.log('hello world');
  },
  function myFunc(x) {
    return x;
  },
  (a, b) => a * b,
]);
