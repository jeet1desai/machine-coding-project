const map = new Map();
function memoizeOne(fn) {
  function temp(...args) {
    const key = args.join("_");
    if (map.has(key)) {
      const value = map.get(key);

      console.log("Cached: " + value);
      return value;
    }
    
    const result = fn(...args);

    console.log("Calculate: " + result);
    map.set(key, result);
    return result;
  }

  return temp;
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const memoizedAdd = memoizeOne(add);
const memoizedSub = memoizeOne(sub);
memoizedAdd(1, 2); // 3 - add fun called
memoizedAdd(1, 2); // 3 - prev result
memoizedAdd(2, 3); // 5 - add fun called
memoizedAdd(2, 3); // 5 - prev result
memoizedAdd(2, 3); // 5 - prev result
memoizedSub(3, 2); // 1 - add fun called
memoizedSub(3, 2); // 1 - prev result
memoizedSub(5, 2); // 3 - add fun called
memoizedSub(5, 2); // 3 - prev result
