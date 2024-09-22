import React from "react";
import parse from "html-react-parser";
import DraggableBox from "./DraggableBox";

function Text({ item }) {
  return (
    <DraggableBox item={item}>
      <div className={item.selectedCssClassName}>{parse(item.text)}</div>
    </DraggableBox>
  );
}

export default Text;
