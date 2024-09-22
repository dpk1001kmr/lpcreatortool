import React from "react";
import DraggableBox from "./DraggableBox";

function Cta({ item }) {
  return (
    <DraggableBox item={item}>
      <div
        className={
          item.selectedCssClassName
            ? item.selectedCssClassName
            : defualtCssClassName
        }
      >
        <button>{item.text}</button>
      </div>
    </DraggableBox>
  );
}

export default Cta;
