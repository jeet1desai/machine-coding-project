import React, { useState } from "react";

const data = [
  {
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, nulla delectus laborum error animi tempore soluta repudiandae quae ullam, laboriosam cupiditate eligendi voluptate doloribus ratione! Enim ratione distinctio accusamus minima.",
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, nulla delectus laborum error animi tempore soluta repudiandae quae ullam, laboriosam cupiditate eligendi voluptate doloribus ratione! Enim ratione distinctio accusamus minima.",
  },
  {
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, nulla delectus laborum error animi tempore soluta repudiandae quae ullam, laboriosam cupiditate eligendi voluptate doloribus ratione! Enim ratione distinctio accusamus minima.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} onClick={() => setOpenIndex(isOpen ? null : index)}>
            <div>
              <h4>{item.title}</h4>
              {isOpen ? <span>⬆️</span> : <span>⬇️</span>}
            </div>
            {isOpen && <p>{item.description}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
