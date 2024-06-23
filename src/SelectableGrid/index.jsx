import React, { useState } from "react";

const SelectableGrid = () => {
  return (
    <div>
      <h2>Selectable Grid</h2>
      <Grid rows={10} cols={10}></Grid>
    </div>
  );
};

const Grid = ({ rows, cols }) => {
  const [isMouseDown, setMouseDown] = useState(false);
  const [selectedBox, setSelectedBox] = useState([]);

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseDown = (boxNumber) => {
    setMouseDown(true);
    setSelectedBox([boxNumber]);
  };

  const handleMouseEnter = (boxNumber) => {
    if (isMouseDown) {
      const startBox = selectedBox[0];
      const endBox = boxNumber;

      const startRow = Math.floor((startBox - 1) / cols);
      const startCol = (startBox - 1) % cols;
      const endRow = Math.floor((endBox - 1) / cols);
      const endCol = (endBox - 1) % cols;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);

      const selected = [];
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          selected.push(i * cols + j + 1);
        }
      }

      setSelectedBox(selected);
    }
  };

  return (
    <div className="grid" style={{ "--rows": rows, "--cols": cols }} onMouseUp={handleMouseUp}>
      {[...Array(rows * cols).keys()].map((_, i) => {
        return (
          <div
            key={i}
            className={`box ${selectedBox.includes(i + 1) ? "active" : ""}`}
            onMouseDown={() => handleMouseDown(i + 1)}
            onMouseEnter={() => handleMouseEnter(i + 1)}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};

export default SelectableGrid;
