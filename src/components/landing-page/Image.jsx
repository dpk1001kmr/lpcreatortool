import React from "react";
import DraggableBox from "./DraggableBox";

function Image({ item }) {
  return (
    <DraggableBox item={item}>
      <div className={item.selectedCssClassName}>
        <img src={item.src} alt={item.alt} />
      </div>
    </DraggableBox>
  );
}

export default Image;
