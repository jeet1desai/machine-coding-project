const data = [1, 2, { key: "test" }, 3, [4, [5, 6]], 7, 8];

const result = [];
function flattenArray(data) {
  data.forEach((item) => {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      flattenArray(item);
    }
  });
}

flattenArray(data);
console.log(result);
