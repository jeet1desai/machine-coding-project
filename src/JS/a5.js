console.log("JS - 5");

function chunk(arr, size) {
  let res = [];
  let temp = [];

  arr.forEach((item) => {
    if (temp.length === size) {
      res.push(temp);
      temp = [];
    }
    temp.push(item);
  });
  res.push(temp);

  console.log(res);
}

chunk([1, 2, 3, 4, 5], 1);
chunk([1, 2, 3, 4, 5], 2);
chunk([1, 2, 3, 4, 5], 3);
chunk([1, 2, 3, 4, 5], 4);
chunk([1, 2, 3, 4, 5], 5);

// ============================================

function debounce(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(...args);
    }, delay);
  };
}

function print() {
  console.log("print");
}

// abort controller
const printOptimize = debounce(print, 1000);

document.addEventListener("input", () => {
  printOptimize();
});

// ============================================

const count = (() => {
  let counter = 0;

  function inner() {
    counter = counter + 1;
    console.log(counter);
    return counter;
  }

  inner.reset = function () {
    counter = 0;
  };

  return inner;
})();

console.log(count);

count();
count();
count();

count.reset();

count();
count();
count();
