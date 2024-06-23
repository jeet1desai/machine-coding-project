import React, { useState } from "react";
import AddEdit from "./AddEdit";

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
        ],
      },
      {
        id: 1.2,
        title: "Page 1.2",
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
    ],
  },
  {
    id: 3,
    title: "Page 3",
  },
];

const NestedList = () => {
  return (
    <>
      <div className="nested-list">
        <ItemComponent data={data} />
      </div>

      <div>
        <h4>Add Folder, Add File, Edit Name</h4>
        <AddEdit />
      </div>
    </>
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
