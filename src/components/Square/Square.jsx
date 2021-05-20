import React, { useState } from "react";

export const Square = (props) => {
  // const [value, setValue] = useState(props.value);
  return (
    <button
      style={{
        width: "133px",
        height: "133px",
        border: "1px solid grey",
        boxSizing: "border-box"
      }}
      className="square"
      onClick={(event) => {
        props.onClick();
      }}
    >
      {props.value}
      {props.children}
    </button>
  );
};

export default Square;
