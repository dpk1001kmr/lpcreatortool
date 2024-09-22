import React from "react";

function Div({ children, mb }) {
  return (
    <div
      style={{
        marginBottom: `${mb ? mb : "0"}rem`,
        borderBottom: "1px solid var(--slate-300)",
        padding: "0.75rem 0.5rem",
      }}
    >
      {children}
    </div>
  );
}

export default Div;
