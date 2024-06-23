import React, { useEffect, useState } from "react";

const AddEdit = () => {
  const [data, setData] = useState([]);

  const addFolderFile = (path, obj) => {
    const updateData = (data, path, obj) => {
      if (path.length === 0) {
        return [...data, obj];
      }
      const [head, ...tail] = path;
      return data.map((item, index) => {
        if (index === head) {
          return {
            ...item,
            list: updateData(item.list, tail, obj),
          };
        }
        return item;
      });
    };

    setData((prevData) => updateData(prevData, path, obj));
  };

  const editFolderFile = (path) => {
    const updateName = (data, path) => {
      if (path.length === 0) return data;

      const [head, ...tail] = path;
      return data.map((item, index) => {
        if (index === head) {
          if (tail.length === 0) {
            return {
              ...item,
              title: `Dummy ${Math.ceil(Math.random() * 100)}`,
            };
          }
          if (item.list) {
            return {
              ...item,
              list: updateName(item.list, tail),
            };
          }
        }
        return item;
      });
    };

    setData((prevData) => updateName(prevData, path));
  };

  const deleteFolderFile = (path) => {
    const updateName = (data, path) => {
      if (path.length === 0) return data;

      const [head, ...tail] = path;
      if (tail.length === 0) {
        return data.filter((_, index) => index !== head);
      }
      return data.map((item, index) => {
        if (index === head && item.list) {
          return {
            ...item,
            list: updateName(item.list, tail),
          };
        }
        return item;
      });
    };

    setData((prevData) => updateName(prevData, path));
  };

  return (
    <div className="nested-list">
      <ItemComponent data={data} addFunc={addFolderFile} editFunc={editFolderFile} deleteFunc={deleteFolderFile} path={[]} />
      <button onClick={() => addFolderFile([], { title: "Dummy", list: [] })}>Add Folder</button>
      <button onClick={() => addFolderFile([], { title: "Dummy" })}>Add File</button>
    </div>
  );
};

export default AddEdit;

const ItemComponent = ({ data, addFunc, editFunc, deleteFunc, path }) => {
  const [folder, setFolder] = useState(data);

  useEffect(() => {
    setFolder(data);
  }, [data]);

  return folder.map((item, index) => {
    const currentPath = [...path, index];
    return (
      <>
        <p key={index}>
          <span>{item?.list ? <>📂</> : <>⏺️</>}</span> <span>{item?.title}</span> <button onClick={() => editFunc(currentPath)}>🖋️</button>{" "}
          <button onClick={() => deleteFunc(currentPath)}>❌</button>
        </p>
        {item?.list && (
          <>
            <div className="nested-list-item">
              <ItemComponent data={item.list} addFunc={addFunc} editFunc={editFunc} deleteFunc={deleteFunc} path={currentPath} />
              <button onClick={() => addFunc(currentPath, { title: "Dummy", list: [] })}>Add Folder</button>
              <button onClick={() => addFunc(currentPath, { title: "Dummy" })}>Add File</button>
            </div>
          </>
        )}
      </>
    );
  });
};

/*
  Public
  - Script
    - char.js
    - index.js
    - level.js
  - Styles
    - index.css
  - Views
    - index.html
    - Component
      - button.html
  - app.js
*/
