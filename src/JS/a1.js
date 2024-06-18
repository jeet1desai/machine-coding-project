const obj = [
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 1",
    data: "Data 2",
  },
  {
    key: "Sample 2",
    data: "Data 1",
  },
  {
    key: "Sample 3",
    data: "Data 1",
  },
  {
    key: "Sample 1",
    data: "Data 3",
  },
];

const output = {
  "Sample 1": [
    {
      key: "Sample 1",
      data: "Data 1",
    },
    {
      key: "Sample 1",
      data: "Data 2",
    },
    {
      key: "Sample 1",
      data: "Data 3",
    },
  ],
  "Sample 2": [
    {
      key: "Sample 2",
      data: "Data 1",
    },
  ],
  "Sample 3": [
    {
      key: "Sample 3",
      data: "Data 1",
    },
  ],
};

const result = {};
obj.forEach((item) => {
  if (result[item.key]) {
    result[item.key].push(item);
  } else {
    result[item.key] = [item];
  }
});

console.log(output);
console.log(result);
