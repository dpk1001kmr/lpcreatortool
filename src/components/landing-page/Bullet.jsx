import React from "react";
import parse from "html-react-parser";
import DraggableBox from "./DraggableBox";

function Bullet({ item }) {
  return (
    <DraggableBox item={item}>
      <div
        className={
          item.selectedCssClassName
            ? item.selectedCssClassName
            : defualtCssClassName
        }
      >
        <div className="bullet">{parse("<p>&bull;</p>")}</div>
        <div className="text">{parse(item.text)}</div>
      </div>
    </DraggableBox>
  );
}

export default Bullet;
