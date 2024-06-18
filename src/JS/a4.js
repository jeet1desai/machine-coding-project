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
