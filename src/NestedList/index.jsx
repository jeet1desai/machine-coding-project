import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Page 1",
    list: [
      {
        id: 1.1,
        title: "Page 1.1",
        list: [
          {
            id: 1.4,
            title: "Page 1.1.1",
          },
          {
            id: 1.5,
            title: "Page 1.1.2",
          },
          {
            id: 1.6,
            title: "Page 1.1.3",
          },
        ],
      },
      {
        id: 1.2,
        title: "Page 1.2",
      },
      {
        id: 1.3,
        title: "Page 1.3",
      },
    ],
  },
  {
    id: 2,
    title: "Page 2",
    list: [
      {
        id: 2.1,
        title: "Page 2.1",
      },
      {
        id: 2.2,
        title: "Page 2.2",
      },
    ],
  },
  {
    id: 3,
    title: "Page 3",
  },
];

const NestedList = () => {
  return (
    <div className="nested-list">
      <ItemComponent data={data} />
    </div>
  );
};

const ItemComponent = ({ data }) => {
  const [openIndex, setOpenIndex] = useState([]);

  return data.map((item, index) => {
    const isOpen = openIndex.includes(index);

    return (
      <>
        <p key={index} onClick={() => setOpenIndex(isOpen ? [...openIndex.filter((i) => i !== index)] : [...openIndex, index])}>
          <span>{item?.list ? isOpen ? <>🔽</> : <>▶️</> : <>⏺️</>}</span> <span>{item.title}</span>
        </p>
        {isOpen && item?.list && (
          <div className="nested-list-item">
            <ItemComponent data={item.list} />
          </div>
        )}
      </>
    );
  });
};

export default NestedList;
