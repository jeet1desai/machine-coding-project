class ComputeAmount {
  amount = 0;

  thousand(num) {
    this.amount = this.amount + num * 1000;
    return this;
  }

  lacs(num) {
    this.amount = this.amount + num * 100000;
    return this;
  }

  crore(num) {
    this.amount = this.amount + num * 10000000;
    return this;
  }

  value() {
    return this.amount;
  }
}

console.log(new ComputeAmount().lacs(12).crore(5).crore(2).thousand(1).value());
console.log(new ComputeAmount().crore(2).thousand(1).value());

function handleSubmit() {
  console.log("Api call");
}

function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const throttle = (func, delay) => {
  let flag = true;
  return function (args) {
    if (flag) {
      func(args);
      flag = false;

      setInterval(() => {
        flag = true;
      }, delay);
    }
  };
};

const handleDebounceFunction = debounce(handleSubmit, 400);

document.addEventListener("input", (e) => {
  console.log(e.target.value);
  handleDebounceFunction();
});
